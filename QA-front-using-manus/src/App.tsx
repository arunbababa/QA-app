import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FileListDisplay from './components/FileListDisplay'
import './App.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import PrivacyPolicyPage from './components/PrivacyPolicy'
import UseageAndLicense from './components/UseageAndLicense'

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 min-h-screen">
        <Header />
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-10">
            {/* Sidebar: モバイルでは上部、デスクトップでは左側に表示 */}
            <div className="md:col-span-1 order-1 md:order-1">
              <Sidebar />
            </div>
            {/* Main Content: メインコンテンツエリア */}
            <div className="md:col-span-3 lg:col-span-4 order-2 md:order-2">
              <Routes>
                {/* これなくして使用方法とライセンスを入れる */}
                {/* <Route path="/" element={<PrivacyPolicyPage />} /> */}
                <Route path="/" element={<UseageAndLicense />} />
                <Route path="/videos/:fileFormat" element={<FileListDisplay />} />
                <Route path="/images/:fileFormat" element={<FileListDisplay />} />
                <Route path="/archives/:fileFormat" element={<FileListDisplay />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

