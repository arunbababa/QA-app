import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Shield, Eye, Cookie, Users, Lock, Mail, ExternalLink, BarChart3, FileText, Download, SidebarClose } from 'lucide-react'
import FileListDisplay from './components/FileListDisplay.jsx'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import Header from './components/Header.jsx'
import PrivacyPolicyPage from './components/PrivacyPolicy.jsx'
import UseageAndLicense from './components/UseageAndLicense.jsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Sidebar: 1カラム目に常に表示 */}
            <Sidebar />
            {/* Main Content: 3カラム分を占有し、ルーティングで切り替え */}
            <div className="lg:col-span-3">
              <Routes>
                <Route path="/" element={<PrivacyPolicyPage />} />
                <Route path="/videos/:fileFormat" element={<FileListDisplay />} />
                <Route path="/images/:fileFormat" element={<FileListDisplay />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

