'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Terminal } from 'lucide-react'
import { useState, useEffect } from 'react'

const Breadcrumb = () => {
  const pathname = usePathname()
  const [showCursor, setShowCursor] = useState(true)

  // Animate cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  // Split pathname into segments
  const pathSegments = pathname.split('/').filter(segment => segment !== '')
  
  // Create breadcrumb items
  const breadcrumbItems = [
    { name: 'home', href: '/', isHome: true }
  ]
  
  let currentPath = ''
  pathSegments.forEach(segment => {
    currentPath += `/${segment}`
    breadcrumbItems.push({
      name: segment,
      href: currentPath,
      isHome: false
    })
  })

  return (
    <nav 
      className="flex items-center space-x-1 font-mono text-sm text-green-400/80 select-none"
      aria-label="Breadcrumb navigation"
    >
      {/* Terminal prompt symbol */}
      <div className="flex items-center space-x-2 mr-2">
        <Terminal size={16} className="text-green-400" />
        <span className="text-green-500">~</span>
      </div>

      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-1">
          {/* Path separator */}
          {index > 0 && (
            <span className="text-green-600/60">/</span>
          )}
          
          {/* Breadcrumb item */}
          <Link
            href={item.href}
            className={`
              transition-all duration-200 hover:text-green-400 
              ${index === breadcrumbItems.length - 1 
                ? 'text-green-300 font-medium' 
                : 'text-green-400/70 hover:text-green-400'
              }
            `}
            aria-current={index === breadcrumbItems.length - 1 ? 'page' : undefined}
          >
            {item.isHome ? (
              <div className="flex items-center space-x-1">
                <Home size={14} />
                <span>~</span>
              </div>
            ) : (
              item.name
            )}
          </Link>
        </div>
      ))}
      
      {/* Animated cursor */}
      <span 
        className={`
          inline-block w-2 h-4 bg-green-400 ml-1 transition-opacity duration-100
          ${showCursor ? 'opacity-100' : 'opacity-0'}
        `}
        aria-hidden="true"
      />
    </nav>
  )
}

export default Breadcrumb
