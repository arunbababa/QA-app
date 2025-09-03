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
            <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 xl:px-12">
                <div className="flex justify-between items-center h-20 sm:h-24 lg:h-28">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                        <Link to="/" className="flex items-center space-x-4 sm:space-x-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Shield className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                            </div>
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white">Sample files hub</h1>
                        </Link>
                    </div>
                    <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8 mr-12">
                        <a href="https://qa-app-6zm.pages.dev/" className="text-base sm:text-lg lg:text-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors underline mr-5">Home</a>
                        {/* <Badge variant="secondary" className="text-sm sm:text-base lg:text-lg px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {getPageTitle()}
                        </Badge> */}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header