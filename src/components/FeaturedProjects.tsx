'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, ExternalLink, Star, GitFork, ArrowRight } from 'lucide-react'

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
      featured: true
    },
    {
      title: 'iLLuMinator-4.7B',
      description: 'A sophisticated transformer-based language model with integrated Retrieval-Augmented Generation (RAG) capabilities for intelligent question answering and conversation.',
      tech: ['Python', 'Transformers', 'RAG', 'NLP'],
      github: 'https://github.com/Anipaleja/iLLuMinator-4.7B',
      stars: 1,
      forks: 0,
      featured: true
    },
    {
      title: 'NHL Outcome Predictor ML',
      description: 'Predicts NHL game outcomes using advanced custom ML and neural network models. Features data preprocessing, label encoding, feature scaling, and model evaluation.',
      tech: ['Python', 'Machine Learning', 'Neural Networks', 'Data Science'],
      github: 'https://github.com/Anipaleja/NHL-Outcome-Predictor-ML',
      stars: 2,
      forks: 0,
      featured: true
    },
    {
      title: 'Neuraforge',
      description: 'A general-purpose agentic AI system written in pure Python using hand-coded neural networks and low-level PyTorch models (not pretrained).',
      tech: ['Python', 'PyTorch', 'Neural Networks', 'AI Agents'],
      github: 'https://github.com/Anipaleja/Neuraforge',
      stars: 1,
      forks: 0,
      featured: true
    },
    {
      title: 'nginx-defender',
      description: 'A lightweight, real-time log monitoring tool designed to detect and block IP addresses exhibiting abusive behavior such as brute force attacks and suspicious patterns.',
      tech: ['Go', 'Security', 'Log Monitoring', 'Real-time'],
      github: 'https://github.com/Anipaleja/nginx-defender',
      stars: 1,
      forks: 0,
      featured: true
    },
    {
      title: 'Advanced Dev Utils',
      description: 'TypeScript utility library packed with smart features, real-time streaming, intelligent caching, and much more. Built for modern developers who need powerful, production-ready utilities.',
      tech: ['TypeScript', 'Utilities', 'Caching', 'Streaming'],
      github: 'https://github.com/Anipaleja/Advanced-dev-utils',
      stars: 1,
      forks: 0,
      featured: true
    }
  ]

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Innovative solutions spanning AI, robotics, and developer tools
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all projects
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
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
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in collaborating or learning more about these projects?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get In Touch
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
