'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hey! I'm{' '}
            <span className="gradient-text">Anish Paleja</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Student innovator | Robotics & AI enthusiast | Building LLMs & neural networks, 
            EMG prosthetics, and smarter tools. Passionate about solving real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              Get In Touch
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              <Download className="mr-2" size={20} />
              Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/anipaleja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/anish-paleja-85b951328/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:anish@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
