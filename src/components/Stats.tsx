'use client'

import { useState, useEffect } from 'react'
import { Code, Star, GitFork, Users } from 'lucide-react'

const Stats = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats = [
    {
      icon: Code,
      label: 'Languages',
      value: 'Python, TypeScript, Go, Rust',
      description: 'Primary technologies'
    },
    {
      icon: Star,
      label: 'GitHub Stars',
      value: '10+',
      description: 'Across all repositories'
    },
    {
      icon: GitFork,
      label: 'Projects',
      value: '30+',
      description: 'Open source repositories'
    },
    {
      icon: Users,
      label: 'Organizations',
      value: '3',
      description: 'Active memberships'
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coding Stats & Highlights
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-secondary/50 p-6 rounded-lg text-center hover:bg-secondary/70 transition-colors"
              >
                <div className="mb-4 flex justify-center">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
            <p className="text-muted-foreground">
              Building custom neural networks, LLMs, and intelligent systems from scratch
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Robotics & Hardware</h3>
            <p className="text-muted-foreground">
              Developing EMG-controlled prosthetics and AI-powered robotic arms
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
            <p className="text-muted-foreground">
              Creating utilities and libraries that make developers' lives easier
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
