'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, ChevronDown } from 'lucide-react'
import LetterGlitch from './LetterGlitch'
import { useTheme } from '@/contexts/ThemeContext'
import type { ThemeName } from '@/contexts/ThemeContext'

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0})
  const { currentTheme } = useTheme()

  // Get theme-appropriate colors for the glitch effect
  const getGlitchColors = () => {
    switch(currentTheme) {
      case 'latte':
        return ['#40a02b', '#1e66f5', '#8839ef'] // green, blue, purple for light theme
      case 'frappe':
        return ['#a6d189', '#81c8be', '#ca9ee6'] // soft colors for frappe
      case 'macchiato':
        return ['#a6da95', '#8bd5ca', '#c6a0f6'] // macchiato colors
      case 'mocha':
      default:
        return ['#a6e3a1', '#89dceb', '#cba6f7'] // mocha colors (default)
    }
  }

  useEffect(() => {
    setMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Letter Glitch Background */}
      <div className="absolute inset-0">
        <LetterGlitch 
          glitchColors={getGlitchColors()}
          glitchSpeed={80}
          outerVignette={true}
          centerVignette={false}
          smooth={true}
          className="w-full h-full"
        />
      </div>

      {/* Interactive mouse gradient overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, var(--theme-accent)15 0%, transparent 50%)`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface/50 backdrop-blur-sm border border-overlay/20 mb-8 group hover:border-green/50 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-green mr-2 animate-pulse" />
            <span className="text-sm font-medium text-subtext">Available for new opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span className="block text-text">Hey! I'm</span>
            <span className="block bg-gradient-to-r from-green to-accent to-purple bg-clip-text text-transparent animate-pulse">
              Anish Paleja
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-subtext mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Student innovator building the future with{' '}
            <span className="text-green font-semibold">AI</span>,{' '}
            <span className="text-accent font-semibold">robotics</span>, and{' '}
            <span className="text-purple font-semibold">neural networks</span>
          </p>

          <p className="text-lg text-overlay mb-12 max-w-2xl mx-auto">
            Passionate about solving real-world problems through innovative technology. 
            From EMG prosthetics to 4.7B parameter language models.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
            <Link
              href="/projects"
              className="group relative inline-flex items-center px-8 py-4 bg-accent rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-surface/50 backdrop-blur-sm rounded-full font-semibold text-text border border-overlay/20 hover:border-accent/50 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-surface/30 backdrop-blur-sm rounded-full font-semibold text-subtext border border-overlay/20 hover:border-overlay/50 hover:bg-surface/50 transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5 transition-transform group-hover:scale-110" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center space-x-8 mb-16">
            <a
              href="https://github.com/anipaleja"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-surface/30 backdrop-blur-sm hover:bg-surface/50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7 text-subtext group-hover:text-text transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/anish-paleja-85b951328/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-surface/30 backdrop-blur-sm hover:bg-surface/50 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 text-subtext group-hover:text-accent transition-colors" />
            </a>
            <a
              href="mailto:anish@example.com"
              className="group p-4 rounded-full bg-surface/30 backdrop-blur-sm hover:bg-surface/50 transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 text-subtext group-hover:text-green transition-colors" />
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-text mb-2">30+</div>
              <div className="text-sm text-overlay">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text mb-2">10+</div>
              <div className="text-sm text-overlay">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text mb-2">3</div>
              <div className="text-sm text-overlay">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-text mb-2">2+</div>
              <div className="text-sm text-overlay">Years Experience</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-overlay mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 w-2 h-2 bg-green rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-8 w-1 h-1 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-1.5 h-1.5 bg-purple rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

export default Hero
