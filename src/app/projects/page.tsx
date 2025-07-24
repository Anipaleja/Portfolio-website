'use client'

import { useState, useEffect } from 'react'
import { Github, ExternalLink, Star, GitFork, Filter } from 'lucide-react'

const ProjectsPage = () => {
  const [mounted, setMounted] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('All')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const projects = [
    {
      title: 'Robotic AI Arm',
      description: 'An advanced AI-powered robotic arm that uses EMG sensors and intelligent control to respond to muscle signals and recognize users for personalized, real-time interaction.',
      longDescription: 'This project combines cutting-edge EMG sensor technology with machine learning to create an intuitive human-robot interface. The system can learn individual user patterns and adapt to different muscle signal characteristics.',
      tech: ['Python', 'AI/ML', 'Robotics', 'EMG Sensors', 'Arduino', 'TensorFlow'],
      github: 'https://github.com/Anipaleja/Robotic-AI-Arm',
      demo: null,
      stars: 3,
      forks: 1,
      category: 'Robotics',
      featured: true,
      status: 'Active'
    },
    {
      title: 'iLLuMinator-4.7B',
      description: 'A sophisticated transformer-based language model with integrated Retrieval-Augmented Generation (RAG) capabilities for intelligent question answering and conversation.',
      longDescription: 'A full-scale language model built from scratch with 4.7 billion parameters, featuring custom architecture optimizations and RAG integration for enhanced factual accuracy.',
      tech: ['Python', 'Transformers', 'RAG', 'NLP', 'PyTorch', 'CUDA'],
      github: 'https://github.com/Anipaleja/iLLuMinator-4.7B',
      demo: null,
      stars: 1,
      forks: 0,
      category: 'AI/ML',
      featured: true,
      status: 'Active'
    },
    {
      title: 'NHL Outcome Predictor ML',
      description: 'Predicts NHL game outcomes using advanced custom ML and neural network models. Features data preprocessing, label encoding, feature scaling, and model evaluation.',
      longDescription: 'A comprehensive machine learning system that analyzes hockey statistics and game data to predict match outcomes with high accuracy using ensemble methods.',
      tech: ['Python', 'Machine Learning', 'Neural Networks', 'Data Science', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/Anipaleja/NHL-Outcome-Predictor-ML',
      demo: null,
      stars: 2,
      forks: 0,
      category: 'AI/ML',
      featured: true,
      status: 'Complete'
    },
    {
      title: 'Neuraforge',
      description: 'A general-purpose agentic AI system written in pure Python using hand-coded neural networks and low-level PyTorch models (not pretrained).',
      longDescription: 'An experimental AI framework for building autonomous agents with custom neural architectures, designed for research and educational purposes.',
      tech: ['Python', 'PyTorch', 'Neural Networks', 'AI Agents', 'Reinforcement Learning'],
      github: 'https://github.com/Anipaleja/Neuraforge',
      demo: null,
      stars: 1,
      forks: 0,
      category: 'AI/ML',
      featured: true,
      status: 'In Development'
    },
    {
      title: 'nginx-defender',
      description: 'A lightweight, real-time log monitoring tool designed to detect and block IP addresses exhibiting abusive behavior such as brute force attacks and suspicious patterns.',
      longDescription: 'High-performance security monitoring solution built in Go, providing real-time threat detection and automatic mitigation for web servers.',
      tech: ['Go', 'Security', 'Log Monitoring', 'Real-time', 'Networking', 'iptables'],
      github: 'https://github.com/Anipaleja/nginx-defender',
      demo: null,
      stars: 1,
      forks: 0,
      category: 'Security',
      featured: true,
      status: 'Active'
    },
    {
      title: 'Advanced Dev Utils',
      description: 'TypeScript utility library packed with smart features, real-time streaming, intelligent caching, and much more. Built for modern developers who need powerful, production-ready utilities.',
      longDescription: 'A comprehensive TypeScript utility library featuring advanced data structures, streaming capabilities, and intelligent caching mechanisms for modern web development.',
      tech: ['TypeScript', 'Utilities', 'Caching', 'Streaming', 'Node.js', 'Performance'],
      github: 'https://github.com/Anipaleja/Advanced-dev-utils',
      demo: null,
      stars: 1,
      forks: 0,
      category: 'Development Tools',
      featured: true,
      status: 'Active'
    },
    // Additional projects
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive web application for visualizing neural network architectures and training processes in real-time.',
      longDescription: 'Educational tool that helps students and researchers understand neural network behavior through interactive visualizations.',
      tech: ['JavaScript', 'D3.js', 'Python', 'Flask', 'WebSockets'],
      github: 'https://github.com/Anipaleja/neural-network-visualizer',
      demo: 'https://nn-viz.example.com',
      stars: 0,
      forks: 0,
      category: 'Education',
      featured: false,
      status: 'Complete'
    },
    {
      title: 'Smart Home IoT System',
      description: 'IoT system for home automation using Arduino, sensors, and a custom dashboard for monitoring and control.',
      longDescription: 'Complete home automation solution with sensor integration, data logging, and remote control capabilities.',
      tech: ['Arduino', 'IoT', 'Python', 'React', 'MQTT', 'Sensors'],
      github: 'https://github.com/Anipaleja/smart-home-iot',
      demo: null,
      stars: 0,
      forks: 0,
      category: 'IoT',
      featured: false,
      status: 'In Development'
    }
  ]

  const categories = ['All', 'AI/ML', 'Robotics', 'Security', 'Development Tools', 'Education', 'IoT']
  
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const otherProjects = filteredProjects.filter(project => !project.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-500/20 text-green-400 border-green-500/50'
      case 'Complete': return 'bg-blue-500/20 text-blue-400 border-blue-500/50'
      case 'In Development': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50'
    }
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            A comprehensive collection of my work spanning AI, robotics, security, and developer tools. 
            Each project represents a journey of learning and innovation.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 flex items-center text-white">
              <Star className="mr-3 text-yellow-400" size={28} />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group card-glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {project.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                        <span className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={20} />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Star size={16} />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={16} />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-8">
              {selectedFilter === 'All' ? 'Other Projects' : `${selectedFilter} Projects`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <span className={`px-2 py-1 rounded-md text-xs border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 bg-secondary text-xs rounded-md text-muted-foreground">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16 bg-secondary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Interested in Collaboration?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, sharing knowledge, or collaborating 
            on innovative solutions. Let's build something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/anipaleja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              <Github className="mr-2" size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
