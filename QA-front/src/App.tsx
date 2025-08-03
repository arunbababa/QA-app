import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import Videos from './components/pages/videos'
import Images from './components/pages/images'

function App({ children }: { children: React.ReactNode }) {

  const currentURL = window.location.href
  if (currentURL.includes("images")) {
    console.log("sas")
  }

  return (
    <>
      {/* 全然このサイドバーじゃなくていい気がするな */}
      <SidebarProvider className='mr-100'>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>

      <div>
        {/* ここでURLキャッチしてimagesならimagesコンポ表示 */}
        {currentURL.includes("images") && <Images />} {/* このコンポーネントにml入れてやっと解決したクソこれどうにかしたい */}
        {currentURL.includes("images") && <Videos />}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex min-h-svh flex-col items-center justify-center">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <Button>Click me</Button>
      </div>
    </>
  )
}

export default App
