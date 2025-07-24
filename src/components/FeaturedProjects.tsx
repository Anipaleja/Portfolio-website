'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, ExternalLink, Star, GitFork, ArrowRight, Zap, Brain, Shield, Code, Cpu, Globe } from 'lucide-react'

const FeaturedProjects = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const featuredProjects = [
    {
      title: 'Robotic AI Arm',
      description: 'An advanced AI-powered robotic arm that uses EMG sensors and intelligent control to respond to muscle signals and recognize users for personalized, real-time interaction.',
      tech: ['Python', 'AI/ML', 'Robotics', 'EMG Sensors'],
      github: 'https://github.com/Anipaleja/Robotic-AI-Arm',
      stars: 3,
      forks: 1,
      featured: true,
      icon: Cpu,
      gradient: 'from-green-500 to-teal-600',
      category: 'Robotics'
    },
    {
      title: 'iLLuMinator-4.7B',
      description: 'A sophisticated transformer-based language model with integrated Retrieval-Augmented Generation (RAG) capabilities for intelligent question answering and conversation.',
      tech: ['Python', 'Transformers', 'RAG', 'NLP'],
      github: 'https://github.com/Anipaleja/iLLuMinator-4.7B',
      stars: 1,
      forks: 0,
      featured: true,
      icon: Brain,
      gradient: 'from-purple-500 to-indigo-600',
      category: 'AI/ML'
    },
    {
      title: 'NHL Outcome Predictor ML',
      description: 'Predicts NHL game outcomes using advanced custom ML and neural network models. Features data preprocessing, label encoding, feature scaling, and model evaluation.',
      tech: ['Python', 'Machine Learning', 'Neural Networks', 'Data Science'],
      github: 'https://github.com/Anipaleja/NHL-Outcome-Predictor-ML',
      stars: 2,
      forks: 0,
      featured: true,
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-600',
      category: 'Machine Learning'
    },
    {
      title: 'nginx-defender',
      description: 'A lightweight, real-time log monitoring tool designed to detect and block IP addresses exhibiting abusive behavior such as brute force attacks and suspicious patterns.',
      tech: ['Go', 'Security', 'Log Monitoring', 'Real-time'],
      github: 'https://github.com/Anipaleja/nginx-defender',
      stars: 1,
      forks: 0,
      featured: true,
      icon: Shield,
      gradient: 'from-red-500 to-orange-600',
      category: 'Security'
    },
    {
      title: 'Advanced Dev Utils',
      description: 'TypeScript utility library packed with smart features, real-time streaming, intelligent caching, and much more. Built for modern developers who need powerful, production-ready utilities.',
      tech: ['TypeScript', 'Utilities', 'Caching', 'Streaming'],
      github: 'https://github.com/Anipaleja/Advanced-dev-utils',
      stars: 1,
      forks: 0,
      featured: true,
      icon: Code,
      gradient: 'from-yellow-500 to-amber-600',
      category: 'Developer Tools'
    },
    {
      title: 'Neuraforge',
      description: 'A general-purpose agentic AI system written in pure Python using hand-coded neural networks and low-level PyTorch models (not pretrained).',
      tech: ['Python', 'PyTorch', 'Neural Networks', 'AI Agents'],
      github: 'https://github.com/Anipaleja/Neuraforge',
      stars: 1,
      forks: 0,
      featured: true,
      icon: Globe,
      gradient: 'from-pink-500 to-rose-600',
      category: 'AI Framework'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Innovative solutions spanning AI, robotics, and developer tools. 
            Each project represents a journey of learning and pushing boundaries.
          </p>
          
          <Link
            href="/projects"
            className="group inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium"
          >
            View all projects
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group card-glass rounded-2xl p-8 hover:scale-105 transition-all duration-500"
              >
                {/* Project Icon & Category */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats & Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              I'm always interested in discussing new projects, sharing ideas, or collaborating 
              on innovative solutions. Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center px-8 py-4 glass rounded-full font-semibold text-white border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
