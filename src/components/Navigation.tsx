'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Github, Linkedin, Mail, Home, User, Code, BookOpen, MessageCircle } from 'lucide-react'
import Breadcrumb from './Breadcrumb'
import ThemeSelector from './ThemeSelector'

// HuggingFace Icon Component
const HuggingFaceIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 4.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S9 6.828 9 6s.672-1.5 1.5-1.5zm3 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S12 6.828 12 6s.672-1.5 1.5-1.5zM7.5 9c.828 0 1.5.672 1.5 1.5 0 1.5-3 4.5-3 4.5s-3-3-3-4.5C3 9.672 3.672 9 4.5 9h3zm9 0c.828 0 1.5.672 1.5 1.5 0 1.5-3 4.5-3 4.5s-3-3-3-4.5c0-.828.672-1.5 1.5-1.5h3zM12 16.5c-2.485 0-4.5-2.015-4.5-4.5h9c0 2.485-2.015 4.5-4.5 4.5z"/>
  </svg>
)

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/anipaleja', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/anish-paleja-85b951328/', label: 'LinkedIn' },
    { icon: HuggingFaceIcon, href: 'https://huggingface.co/Anipal', label: 'HuggingFace' },
    { icon: Mail, href: 'mailto:anipaleja@gmail.com', label: 'Email' },
  ]

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-mono ${
        scrolled 
          ? 'backdrop-blur-xl bg-surface/80 border-b border-overlay/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Breadcrumb & Theme Selector */}
            <div className="flex items-center space-x-4">
              <Breadcrumb />
              <div className="hidden md:block">
                <ThemeSelector />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-accent bg-accent/10'
                        : 'text-subtext hover:text-accent hover:bg-surface/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-subtext hover:text-accent transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-subtext hover:text-accent hover:bg-surface/20 transition-all duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Sidebar */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 backdrop-blur-sm bg-black/50 transition-opacity duration-300 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <aside className={`fixed inset-y-0 right-0 z-40 flex w-80 transform flex-col bg-surface border-l border-overlay/20 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-overlay/20 px-6">
          <span className="text-accent font-mono text-lg font-semibold">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-subtext hover:text-red-400 transition-colors duration-200"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-2" role="list">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-accent bg-accent/10 border-l-2 border-accent'
                        : 'text-subtext hover:text-accent hover:bg-surface/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={20} />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Divider */}
          <hr className="border-overlay/20 my-6" />

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-subtext text-xs font-semibold tracking-wider uppercase px-4">
              Connect
            </h3>
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg text-subtext hover:text-accent hover:bg-surface/20 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="mt-6 px-4">
            <h3 className="text-subtext text-xs font-semibold tracking-wider uppercase mb-3">
              Theme
            </h3>
            <ThemeSelector />
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Navigation
