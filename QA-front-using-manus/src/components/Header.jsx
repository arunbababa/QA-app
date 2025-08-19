import { Shield } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Badge } from './ui/badge'

const Header = () => {
    const location = useLocation()

    const getPageTitle = () => {
        if (location.pathname.startsWith('/videos/')) {
            const format = location.pathname.split('/')[2]
            return `${format?.toUpperCase()} Videos`
        }
        if (location.pathname.startsWith('/images/')) {
            const format = location.pathname.split('/')[2]
            return `${format?.toUpperCase()} Images`
        }
        return 'Privacy Policy'
    }

    return (
        <header className="bg-white dark:bg-slate-900 shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-white" />
                            </div>
                            <h1 className="text-xl font-bold text-slate-900 dark:text-white">Sample files</h1>
                        </Link>
                    </div>
                    <nav className="flex space-x-6">
                        <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
                        <a href="#" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contact</a>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {getPageTitle()}
                        </Badge>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header