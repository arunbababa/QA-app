export interface Env {
	MY_BUCKET: R2Bucket,
	UPLOAD_TOKEN: string;
	DB: D1Database
}

function corsHeaders(request: Request, allowAll = false) {
	const origin = request.headers.get("Origin") || "";
	const allowOrigin = allowAll ? "*" : (origin || "*"); // 開発中は * でOK
	return {
		"Access-Control-Allow-Origin": allowOrigin,
		"Access-Control-Allow-Methods": "GET,OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Max-Age": "86400",
	};
}

function toType(ct: string | null, key: string): string {
	// 1) Content-Type優先
	if (ct) {
		const c = ct.toLowerCase();
		if (c.startsWith("image/png")) return "PNG";
		if (c.startsWith("image/jpeg")) return "JPEG";
		if (c.startsWith("image/gif")) return "GIF";
		if (c.startsWith("video/mp4")) return "MP4";
		if (c.startsWith("application/pdf")) return "PDF";
		if (c.startsWith("application/zip")) return "ZIP";
	}
	// 2) 拡張子でフォールバック
	const lower = key.toLowerCase();
	if (lower.endsWith(".png")) return "PNG";
	if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "JPEG";
	if (lower.endsWith(".gif")) return "GIF";
	if (lower.endsWith(".mp4")) return "MP4";
	if (lower.endsWith(".pdf")) return "PDF";
	if (lower.endsWith(".zip")) return "ZIP";
	return "OTHER";
}

const isSafeKey = (k: string) =>
	!!k && !k.includes("..") && !k.startsWith(".") && !k.endsWith("/");

async function ensureFileRow(env: Env, key: string, fileType: string) {
	await env.DB.prepare(
		`INSERT INTO files (r2_key, file_type) VALUES (?1, ?2)
     ON CONFLICT(r2_key) DO NOTHING`
	).bind(key, fileType).run();

	const row = await env.DB.prepare(
		`SELECT id FROM files WHERE r2_key = ?1`
	).bind(key).first<{ id: number }>();

	return row!.id;
}

async function incCount(env: Env, fileId: number) {
	await env.DB.prepare(
		`INSERT INTO file_download_counts (file_id, download_count)
     VALUES (?1, 1)
     ON CONFLICT(file_id) DO UPDATE SET download_count = download_count + 1`
	).bind(fileId).run();
}

export default {
	async fetch(request: Request, env: Env, ctx:ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
	    const key = url.searchParams.get("key") || url.pathname.slice(1); // GETはパスから?key部分を取得
		if (!key && url.pathname !== "/metrics/summary" && url.pathname !== "/favicon.ico") {
			return new Response("Missing 'key'", { status: 400 });
		}

		if (request.method === "OPTIONS") {
			return new Response(null, { headers: corsHeaders(request, true) });
		}

		if (request.method === "POST") {
			const token = request.headers.get("X-Upload-Token");
			if (!token || token !== env.UPLOAD_TOKEN)
				return new Response("Unauthorized", { status: 401 });
			try {
				const contentType = request.headers.get("content-type") || "application/octet-stream";
				const body = await request.arrayBuffer();
				await env.MY_BUCKET.put(key, body, {
					httpMetadata: { contentType },
				});
				const uploaded = await env.MY_BUCKET.get(key)
				if(!uploaded){
					throw new Error("アップロードファイルの取得に失敗しました。正常にアップロードできていない可能性があります。")
				}
				// さらに細分化したエラー(サイズ違い、名前違いなど)を追加するか検討 TODO
				return new Response(`wranglerによるアップロードが正常完了しました: ${key}`);
			} catch (e) {
				return new Response((e as Error).message, {status:500})
			}
		}

		// ブラウザが勝手に叩くやつは空で返して黙らせる
		if (request.method === "GET" && url.pathname === "/favicon.ico")
			return new Response(null, { status: 204 });

		// ここを追加：通常のGET分岐より手前に置くこと
		if (request.method === "GET" && url.pathname === "/metrics/summary") {
			const byType = await env.DB.prepare(
				`SELECT f.file_type, SUM(c.download_count) AS total
         FROM file_download_counts c
         JOIN files f ON c.file_id = f.id
         GROUP BY f.file_type
         ORDER BY total DESC`
			).all();

			const grand = await env.DB.prepare(
				`SELECT COALESCE(SUM(download_count),0) AS total FROM file_download_counts`
			).first<{ total: number }>();

			return new Response(JSON.stringify({
				totals: byType.results,
				all_downloads: grand?.total ?? 0,
			}), { headers: { "Content-Type": "application/json", ...corsHeaders(request, true), "Cache-Control": "no-store" } });
		}

		if (request.method === "GET") {
			// ① キーの安全チェック
			if (!isSafeKey(key)) return new Response("Bad key", { status: 400 });

			const object = await env.MY_BUCKET.get(key);
			if (!object) return new Response("Not found", { status: 404 });

			const headers = new Headers();
			object.writeHttpMetadata(headers);
			headers.set("etag", object.httpEtag);
			headers.set("Content-Disposition",
				`attachment; filename="${key.split("/").pop()}"`);
			headers.set("Cache-Control", "public, max-age=31536000, immutable");

			// （任意）配布レスポンスにもCORSを付けたい場合
			const ch = corsHeaders(request, true);
			for (const [k, v] of Object.entries(ch)) headers.set(k, v);

			const ct = headers.get("Content-Type");
			const fileType = toType(ct, key);

			// ② DB更新は非ブロッキングで
			ctx.waitUntil((async () => {
				try {
					const fileId = await ensureFileRow(env, key, fileType);
					await incCount(env, fileId);
				} catch (_) { /* 記録失敗は無視（配布は継続）*/ }
			})());

			return new Response(object.body, { headers });
		}
		else {
			return new Response("Method not allowed", { status: 405 });
		}
	},
};
