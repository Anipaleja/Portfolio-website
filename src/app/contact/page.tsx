'use client'

import { useState, useEffect } from 'react'
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Briefcase,
  Users,
  Coffee
} from 'lucide-react'

const ContactPage = () => {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // For now, we'll just create a mailto link
    const mailtoLink = `mailto:anipaleja@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email and I\'ll get back to you within 24 hours',
      value: 'anipaleja@gmail.com',
      href: 'mailto:anipaleja@gmail.com',
      primary: true
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my code and contribute to open source projects',
      value: '@anipaleja',
      href: 'https://github.com/anipaleja',
      primary: false
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with me professionally and stay updated',
      value: 'Anish Paleja',
      href: 'https://www.linkedin.com/in/anish-paleja-85b951328/',
      primary: false
    }
  ]

  const inquiryTypes = [
    {
      icon: Briefcase,
      title: 'Project Collaboration',
      description: 'Let\'s work together on innovative projects'
    },
    {
      icon: MessageCircle,
      title: 'Technical Discussion',
      description: 'Share ideas about AI, robotics, or technology'
    },
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Seeking guidance or offering knowledge sharing'
    },
    {
      icon: Coffee,
      title: 'Just Chat',
      description: 'Casual conversation about tech and innovation'
    }
  ]

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to connect with fellow innovators, discuss new projects, 
            or share knowledge about AI, robotics, and technology. Let's start a conversation!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Technical Discussion">Technical Discussion</option>
                  <option value="Mentorship">Mentorship</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Let's connect</h2>
            
            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                    rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                    className={`block p-4 border rounded-lg transition-all duration-300 hover:shadow-lg ${
                      method.primary 
                        ? 'border-primary bg-primary/5 hover:bg-primary/10' 
                        : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                    }`}
                  >
                    <div className="flex items-start">
                      <Icon className={`mr-4 mt-1 ${method.primary ? 'text-primary' : 'text-muted-foreground'}`} size={24} />
                      <div>
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <p className={`text-sm font-medium ${method.primary ? 'text-primary' : 'text-foreground'}`}>
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Inquiry Types */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">What can we discuss?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inquiryTypes.map((type, index) => {
                  const Icon = type.icon
                  return (
                    <div key={index} className="p-4 bg-secondary/20 rounded-lg">
                      <div className="flex items-start">
                        <Icon className="mr-3 mt-1 text-primary" size={20} />
                        <div>
                          <h4 className="font-medium mb-1">{type.title}</h4>
                          <p className="text-xs text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Location & Availability */}
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="mr-3 text-muted-foreground" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Markham, Ontario, Canada</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="mr-3 text-muted-foreground" size={20} />
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-sm text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Looking for immediate contact?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For urgent matters or quick questions, feel free to reach out directly via email 
                or connect with me on LinkedIn.
              </p>
              <div className="flex space-x-3">
                <a
                  href="mailto:anipaleja@gmail.com"
                  className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  <Mail className="mr-2" size={16} />
                  Email Now
                </a>
                <a
                  href="https://www.linkedin.com/in/anish-paleja-85b951328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm"
                >
                  <Linkedin className="mr-2" size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ or Additional Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">How quickly do you respond?</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours, often sooner. For urgent matters, 
                please mention it in your subject line.
              </p>
            </div>
            <div className="text-left p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">What projects interest you?</h4>
              <p className="text-sm text-muted-foreground">
                I'm particularly interested in AI, robotics, healthcare tech, and 
                innovative solutions that can make a real-world impact.
              </p>
            </div>
            <div className="text-left p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Are you available for consulting?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! I'm open to consulting opportunities, especially in AI/ML, 
                robotics, and software development. Let's discuss your needs.
              </p>
            </div>
            <div className="text-left p-4 border border-border rounded-lg">
              <h4 className="font-semibold mb-2">Do you offer mentorship?</h4>
              <p className="text-sm text-muted-foreground">
                I enjoy helping others learn and grow in technology. Feel free to 
                reach out if you're looking for guidance or want to share knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
