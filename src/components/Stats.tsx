'use client'

import { useState, useEffect } from 'react'
import { Code, Star, GitFork, Users, Zap, Brain, Cpu, Rocket } from 'lucide-react'

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
      value: '18+',
      description: 'Programming languages mastered',
      color: 'accent',
      details: 'Python, TypeScript, Go, Rust, C++, Java, JavaScript, SQL'
    },
    {
      icon: Star,
      label: 'GitHub Stars',
      value: '20+',
      description: 'Stars across repositories',
      color: 'yellow',
      details: 'Recognition from the developer community'
    },
    {
      icon: GitFork,
      label: 'Projects',
      value: '30+',
      description: 'Open source repositories',
      color: 'green',
      details: 'AI, robotics, security, and developer tools'
    },
    {
      icon: Users,
      label: 'Contributions',
      value: '600+',
      description: 'Commits this year',
      color: 'purple',
      details: 'Consistent development and innovation'
    }
  ]

  const highlights = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Building custom neural networks, LLMs, and intelligent systems from scratch using PyTorch and TensorFlow',
      gradient: 'from-pink-500 to-rose-600',
      achievements: ['4.7B Parameter Language Model', 'Custom RAG Implementation', 'EMG Signal Processing']
    },
    {
      icon: Cpu,
      title: 'Robotics & Hardware',
      description: 'Developing EMG-controlled prosthetics and AI-powered robotic arms with real-time sensor integration',
      gradient: 'from-orange-500 to-red-600',
      achievements: ['EMG-Controlled Arm', 'Real-time Processing', 'User Recognition System']
    },
    {
      icon: Rocket,
      title: 'Developer Tools',
      description: 'Creating utilities, libraries, and security tools that make developers more productive and secure',
      gradient: 'from-green-500 to-green-600',
      achievements: ['Advanced Dev Utils', 'nginx-defender', 'Real-time Monitoring']
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full blur-3xl" style={{
          background: `linear-gradient(45deg, var(--theme-accent)40, var(--theme-purple)40)`
        }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl" style={{
          background: `linear-gradient(45deg, var(--theme-green)40, var(--theme-teal)40)`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">Performance Metrics</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              By the Numbers
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            A snapshot of my journey in technology, innovation, and open-source contribution. 
            Every metric represents hours of learning and building.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group card-glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-500"
              >
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-xl shadow-lg text-${stat.color}`} style={{
                    backgroundColor: `var(--theme-${stat.color})20`
                  }}>
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className={`text-4xl font-black text-text group-hover:text-${stat.color} transition-colors`}>
                    {stat.value}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-subtext mb-2">{stat.label}</h3>
                <p className="text-sm text-overlay mb-4">{stat.description}</p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-overlay leading-relaxed">{stat.details}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Technical Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="group card-glass rounded-2xl p-8 hover:scale-105 transition-all duration-500"
              >
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${highlight.gradient} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {highlight.description}
                </p>
                
                <div className="space-y-2">
                  {highlight.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing
            </h3>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              These numbers represent just the beginning. I'm always looking for new challenges 
              and opportunities to push the boundaries of what's possible with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Anipaleja"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <GitFork className="mr-2 w-5 h-5" />
                View GitHub Profile
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center px-8 py-4 glass rounded-full font-semibold text-white border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
