'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, ExternalLink, Calendar, Star, GitFork } from 'lucide-react'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import BlogPreview from '@/components/BlogPreview'
import Stats from '@/components/Stats'
import LetterGlitch from '@/components/LetterGlitch'
import { useTheme } from '@/contexts/ThemeContext'

export default function Home() {
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

  return (
    <div className="min-h-screen">
      <div className="pt-16"> {/* Add padding for fixed header */}
        <Hero />
        <Stats />
        
        {/* Letter Glitch Divider Section */}
        <section className="relative h-96 overflow-hidden">
          <LetterGlitch 
            glitchColors={getGlitchColors()}
            glitchSpeed={60}
            outerVignette={true}
            centerVignette={true}
            smooth={true}
            className="w-full h-full"
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center z-10">
              <h2 className="text-4xl md:text-6xl font-black text-text mb-4">
                Building Tomorrow
              </h2>
              <p className="text-xl text-subtext max-w-2xl mx-auto">
                Exploring the intersection of AI, robotics, and human potential
              </p>
            </div>
          </div>
        </section>
        
        <FeaturedProjects />
        <BlogPreview />
      </div>
    </div>
  )
}
