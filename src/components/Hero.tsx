'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0})

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
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15) 0%, transparent 50%)`,
        }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-strong border border-white/10 mb-8 group hover:border-green-400/50 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-green-400 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none">
            <span className="block text-white">Hey! I'm</span>
            <span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Anish Paleja
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Student innovator building the future with{' '}
            <span className="text-green-400 font-semibold">AI</span>,{' '}
            <span className="text-blue-400 font-semibold">robotics</span>, and{' '}
            <span className="text-purple-400 font-semibold">neural networks</span>
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Passionate about solving real-world problems through innovative technology. 
            From EMG prosthetics to 4.7B parameter language models.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-16">
            <Link
              href="/projects"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </Link>
            
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 glass-strong rounded-full font-semibold text-white border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-white/5 rounded-full font-semibold text-gray-300 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
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
              className="group p-4 rounded-full glass hover:glass-strong transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/anish-paleja-85b951328/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full glass hover:glass-strong transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://huggingface.co/Anipal"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full glass hover:glass-strong transition-all duration-300 hover:scale-110"
              aria-label="HuggingFace"
            >
              {/* HuggingFace Icon */}
              <svg className="w-7 h-7 text-gray-400 group-hover:text-yellow-400 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 4.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S9 6.828 9 6s.672-1.5 1.5-1.5zm3 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S12 6.828 12 6s.672-1.5 1.5-1.5zM7.5 9c.828 0 1.5.672 1.5 1.5 0 1.5-3 4.5-3 4.5s-3-3-3-4.5C3 9.672 3.672 9 4.5 9h3zm9 0c.828 0 1.5.672 1.5 1.5 0 1.5-3 4.5-3 4.5s-3-3-3-4.5c0-.828.672-1.5 1.5-1.5h3zM12 16.5c-2.485 0-4.5-2.015-4.5-4.5h9c0 2.485-2.015 4.5-4.5 4.5z"/>
              </svg>
            </a>
            <a
              href="mailto:anipaleja@gmail.com"
              className="group p-4 rounded-full glass hover:glass-strong transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 text-gray-400 group-hover:text-green-400 transition-colors" />
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-sm text-gray-400">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <div className="text-sm text-gray-400">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-8 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}

export default Hero
