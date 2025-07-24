'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

const Breadcrumb = () => {
  const pathname = usePathname()
  const breadcrumbs = pathname.split('/').filter(Boolean).slice(0, 4)

  return (
    <nav aria-label="Breadcrumbs" className="flex items-center space-x-1 text-sm">
      <Link
        href="/"
        className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 flex items-center"
        aria-label="Home"
      >
        <Home size={16} />
      </Link>
      
      {breadcrumbs.map((segment, index) => {
        const href = `/${breadcrumbs.slice(0, index + 1).join('/')}`
        const isLast = index === breadcrumbs.length - 1
        const label = segment.charAt(0).toUpperCase() + segment.slice(1)
        
        return (
          <div key={`breadcrumb-${index}`} className="flex items-center space-x-1">
            <ChevronRight size={14} className="text-gray-600" />
            {isLast ? (
              <span className="text-gray-300" aria-current="page">
                {label}
              </span>
            ) : (
              <Link
                href={href}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
              >
                {label}
              </Link>
            )}
          </div>
        )
      })}
      
      {breadcrumbs.length > 0 && (
        <div className="flex items-center space-x-1">
          <ChevronRight size={14} className="text-gray-600" />
          <span className="w-2 h-4 bg-emerald-400 animate-pulse" aria-hidden="true"></span>
        </div>
      )}
    </nav>
  )
}

export default Breadcrumb
