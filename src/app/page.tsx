'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Github, ExternalLink, Calendar, Star, GitFork } from 'lucide-react'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import BlogPreview from '@/components/BlogPreview'
import Stats from '@/components/Stats'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="pt-16"> {/* Add padding for fixed header */}
        <Hero />
        <Stats />
        <FeaturedProjects />
        <BlogPreview />
      </div>
    </div>
  )
}
