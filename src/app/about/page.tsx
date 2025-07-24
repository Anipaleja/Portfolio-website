'use client'

import { useState, useEffect } from 'react'
import { 
  Brain, 
  Cpu, 
  Code, 
  Rocket, 
  Users, 
  Award,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar
} from 'lucide-react'

const AboutPage = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      items: ['Neural Networks', 'Deep Learning', 'NLP', 'Computer Vision', 'LLMs', 'RAG Systems']
    },
    {
      category: 'Robotics & Hardware',
      icon: Cpu,
      items: ['EMG Sensors', 'Arduino', 'Servo Control', 'Signal Processing', 'IoT', 'Embedded Systems']
    },
    {
      category: 'Programming',
      icon: Code,
      items: ['Python', 'TypeScript', 'Go', 'Rust', 'JavaScript', 'C++']
    },
    {
      category: 'Tools & Frameworks',
      icon: Rocket,
      items: ['PyTorch', 'TensorFlow', 'React', 'Next.js', 'Docker', 'Git']
    }
  ]

  const organizations = [
    {
      name: 'UHS Robotics',
      role: 'Team Member',
      description: 'Contributing to robotics competitions and educational initiatives'
    },
    {
      name: 'Nexus Browser',
      role: 'Developer',
      description: 'Working on next-generation web browsing technology'
    },
    {
      name: 'BioBuddy AI Inc',
      role: 'AI Developer',
      description: 'Developing AI solutions for healthcare and biology applications'
    }
  ]

  const achievements = [
    'GitHub Developer Program Member',
    'GitHub PRO user',
    'Multiple repositories with community engagement',
    'Open source contributor to various projects'
  ]

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate student innovator from Markham, Ontario, dedicated to pushing the boundaries 
            of technology through AI, robotics, and innovative software solutions.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a student innovator with a deep passion for artificial intelligence, robotics, 
                and solving real-world problems through technology. My journey began with curiosity 
                about how things work, which led me to build everything from neural networks from 
                scratch to EMG-controlled robotic arms.
              </p>
              <p>
                What drives me is the potential of technology to improve human lives. Whether it's 
                creating more intuitive human-computer interfaces, developing AI systems that can 
                understand and reason, or building tools that make developers more productive, 
                I'm always looking for ways to make a meaningful impact.
              </p>
              <p>
                I believe in learning by doing, which is why I've built large language models, 
                developed real-time security monitoring tools, and created AI-powered robotics 
                systems. Each project teaches me something new and brings me closer to my goal 
                of contributing to the future of technology.
              </p>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-3" size={20} />
                <span>Markham, Ontario, Canada</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-3" size={20} />
                <span>Available for collaboration and opportunities</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">What I Do</h2>
            <div className="space-y-6">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">🤖 AI & Machine Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Building neural networks from scratch, developing LLMs with RAG capabilities, 
                  and creating intelligent systems that can learn and adapt.
                </p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">🦾 Robotics & Hardware</h3>
                <p className="text-sm text-muted-foreground">
                  Designing EMG-controlled prosthetics, AI-powered robotic arms, and 
                  human-computer interface systems.
                </p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">⚡ Developer Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Creating utilities, libraries, and tools that help developers build 
                  better software more efficiently.
                </p>
              </div>
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold mb-2">🔒 Security & Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Developing real-time monitoring systems and security tools to protect 
                  web applications and infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{skill.category}</h3>
                  <div className="space-y-1">
                    {skill.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Organizations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {organizations.map((org, index) => (
              <div key={index} className="bg-secondary/20 rounded-lg p-6 text-center">
                <Users className="mx-auto mb-4 text-primary" size={32} />
                <h3 className="font-semibold text-lg mb-2">{org.name}</h3>
                <p className="text-primary font-medium mb-2">{org.role}</p>
                <p className="text-sm text-muted-foreground">{org.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-secondary/20 rounded-lg">
                <Award className="text-primary mr-3 flex-shrink-0" size={24} />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="text-center bg-secondary/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always interested in discussing new projects, sharing ideas, or collaborating 
            on innovative solutions. Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/anipaleja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-background border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anish-paleja-85b951328/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-background border border-border rounded-lg hover:bg-secondary transition-colors"
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
            <a
              href="mailto:anish@example.com"
              className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="mr-2" size={20} />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
