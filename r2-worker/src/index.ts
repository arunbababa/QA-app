export interface Env {
	MY_BUCKET: R2Bucket,
	UPLOAD_TOKEN: string;
	DB: D1Database
}

function corsHeaders(request: Request, allowAll = false) {
	const origin = request.headers.get("Origin");
	const allowOrigin = origin || "*"; // 常にOriginをエコー。未指定時のみ"*"
	return {
		"Access-Control-Allow-Origin": allowOrigin,
		"Access-Control-Allow-Credentials": "true",
		"Access-Control-Allow-Methods": "GET,POST,OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, X-Upload-Token",
		"Access-Control-Max-Age": "86400",
	};
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url); // searchParamsメソッドの恩恵を受けるため
		const key = url.searchParams.get("key");

		if (!key) {
			return new Response("Missing 'key'", {
				status: 400,
				headers: corsHeaders(request, true), // CORSヘッダーを追加
			});
		}

		// ファイルアップロード時用の処理です。詳しくはプロジェクト内の適当なshファイルを参照してください。
		if (request.method === "POST" && key !== "metrics/downloads/increment") { // 後半の条件分岐いる?→いる、下のPOSTの時と分別するため、でも関心分離ができていないので他の条件分岐にした方がgood、例えば && key == "downloadsCount" の判定をするなど
			const token = request.headers.get("X-Upload-Token");
			if (!token || token !== env.UPLOAD_TOKEN)
				return new Response("Unauthorized: アップロードトークンが正しくありません。", { status: 401, headers: corsHeaders(request, true) });
			try {
				const contentType = request.headers.get("content-type") ?? undefined;
				const body = await request.arrayBuffer();
				await env.MY_BUCKET.put(key, body, {
					httpMetadata: { contentType },
				});
				const uploaded = await env.MY_BUCKET.get(key)
				if (!uploaded) {
					throw new Error("アップロードファイルの取得に失敗しました。正常にアップロードできていない可能性があります。")
				}
				return new Response(`wranglerによるアップロードが正常完了しました: ${key}`, { headers: corsHeaders(request, true) });
			} catch (e) {
				return new Response((e as Error).message, { status: 500, headers: corsHeaders(request, true) })
			}
		}

		// 各ダウンロードボタン押印時の処理用
		if (request.method === "POST" && key === "metrics/downloads/increment") {
			try {
				const contentType = request.headers.get('content-type') || '';
				let fileType = '';
				if (contentType.includes('application/json')) {
					const body = await request.json() as { file_type?: string };
					fileType = (body.file_type || '').toUpperCase();
				} else {
					fileType = (url.searchParams.get('file_type') || '').toUpperCase();
				}
				if (!fileType) {
					return new Response(JSON.stringify({ error: 'file_type is required' }), { status: 400, headers: { 'Content-Type': 'application/json', ...corsHeaders(request, true) } });
				}

				// UPSERT 的に存在確認→更新/挿入
				const tx = env.DB;
				const row = await tx.prepare("SELECT download_count FROM file_downloads WHERE file_type = ?").bind(fileType).first<{ download_count?: number }>();
				if (row && typeof row.download_count === 'number') {
					await tx.prepare("UPDATE file_downloads SET download_count = download_count + 1 WHERE file_type = ?").bind(fileType).run();
				} else {
					await tx.prepare("INSERT INTO file_downloads (file_type, download_count) VALUES (?, 1)").bind(fileType).run();
				}
				const latest = await tx.prepare("SELECT download_count FROM file_downloads WHERE file_type = ?").bind(fileType).first<{ download_count?: number }>();
				const downloadCount = latest?.download_count ?? 0;
				return new Response(JSON.stringify({ fileType, downloadCount }), { headers: { 'Content-Type': 'application/json', ...corsHeaders(request, true) } });
			} catch (e) {
				return new Response(JSON.stringify({ error: (e as Error).message }), { status: 500, headers: { 'Content-Type': 'application/json', ...corsHeaders(request, true) } });
			}
		}

		// 初回レンダリング用
		if (request.method === "GET" && key === "metrics/downloads") {
			try {
				const fileType = (url.searchParams.get("file_type") || "").toUpperCase();
				// 一旦all用の分岐を作る 要修正
				console.log(fileType)
				if (fileType == 'ALL') {
					const result = await env.DB.prepare(
						"SELECT SUM(download_count) as total_count FROM file_downloads"
					).first<{ total_count?: number }>();
					console.log('ALL query result:', result);
					console.log('Raw result type:', typeof result);
					console.log('Raw result:', JSON.stringify(result));

					// データベースにデータがあるかも確認
					const allData = await env.DB.prepare("SELECT * FROM file_downloads").all();
					console.log('All file_downloads data:', allData);

					const sumDownloadCount = result?.total_count ?? 0;
					console.log('Calculated sumDownloadCount:', sumDownloadCount);

					return new Response(JSON.stringify({ fileType, sumDownloadCount }), {
						headers: { "Content-Type": "application/json", ...corsHeaders(request, true) },
					});
				}
				const result = await env.DB.prepare(
					"SELECT download_count FROM file_downloads WHERE file_type = ?"
				).bind(fileType).all();
				const rows = (result as unknown as { results?: Array<{ download_count?: number }> }).results || [];
				const downloadCount = rows[0]?.download_count ?? 0;
				return new Response(JSON.stringify({ fileType, downloadCount }), {
					headers: { "Content-Type": "application/json", ...corsHeaders(request, true) },
				});
			} catch (e) {
				return new Response(JSON.stringify({ error: (e as Error).message }), {
					status: 500,
					headers: { "Content-Type": "application/json", ...corsHeaders(request, true) },
				});
			}
		}

		if (request.method === "GET") {
			try {
				const object = await env.MY_BUCKET.get(key);
				if (!object) {
					return new Response("Not Found", { status: 404, headers: corsHeaders(request, true) });
				}
				const filename = key.split('/')?.pop() || 'download';
				const contentType = object.httpMetadata?.contentType
					|| (filename.endsWith('.png') ? 'image/png'
						: filename.endsWith('.mp4') ? 'video/mp4'
							: 'application/octet-stream');
				const headers = {
					...corsHeaders(request, true),
					"Content-Type": contentType,
					"Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
				};
				return new Response(object.body, { headers });
			} catch (e) {
				return new Response((e as Error).message, { status: 500, headers: corsHeaders(request, true) });
			}
		}

		return new Response("Not Found", {
			status: 404,
			headers: corsHeaders(request, true), // CORSヘッダーを追加
		});
	},
};
