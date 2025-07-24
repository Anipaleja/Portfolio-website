'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react'

const BlogPage = () => {
  const [mounted, setMounted] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Sample blog posts - you can easily add more by editing this array
  const blogPosts = [
    {
      title: 'Building an AI-Powered Robotic Arm: From EMG Signals to Movement',
      excerpt: 'Exploring how I developed a robotic arm that responds to muscle signals using EMG sensors and machine learning algorithms. This project combines hardware engineering with cutting-edge AI to create intuitive human-machine interfaces.',
      date: '2024-01-15',
      readTime: '8 min read',
      slug: 'ai-robotic-arm-emg-signals',
      tags: ['Robotics', 'AI', 'EMG', 'Hardware'],
      featured: true
    },
    {
      title: 'Creating a 4.7B Parameter Language Model with RAG Capabilities',
      excerpt: 'Deep dive into building iLLuMinator-4.7B, a transformer-based language model with integrated Retrieval-Augmented Generation. Learn about the architecture decisions and training process.',
      date: '2024-01-10',
      readTime: '12 min read',
      slug: 'illuminator-language-model-rag',
      tags: ['AI', 'NLP', 'Transformers', 'RAG'],
      featured: true
    },
    {
      title: 'Real-time Security Monitoring with nginx-defender',
      excerpt: 'How I built a lightweight Go application to detect and block malicious IP addresses in real-time. Protecting web servers from brute force attacks and suspicious behavior.',
      date: '2024-01-05',
      readTime: '6 min read',
      slug: 'nginx-defender-security-monitoring',
      tags: ['Go', 'Security', 'DevOps', 'Monitoring'],
      featured: false
    },
    {
      title: 'Neural Networks from Scratch: Understanding the Fundamentals',
      excerpt: 'Building neural networks without frameworks to truly understand how they work. This post covers backpropagation, gradient descent, and optimization from first principles.',
      date: '2023-12-20',
      readTime: '10 min read',
      slug: 'neural-networks-from-scratch',
      tags: ['AI', 'Neural Networks', 'Mathematics', 'Python'],
      featured: false
    },
    {
      title: 'The Future of Human-Computer Interaction',
      excerpt: 'Thoughts on how EMG sensors, brain-computer interfaces, and AI will reshape how we interact with technology. Exploring the potential and challenges ahead.',
      date: '2023-12-15',
      readTime: '7 min read',
      slug: 'future-human-computer-interaction',
      tags: ['HCI', 'Future Tech', 'AI', 'BCI'],
      featured: false
    }
  ]

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Thoughts on AI, robotics, and building the future. Sharing insights from my journey in technology and innovation.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background"
            />
          </div>
        </div>

        {/* Featured Posts */}
        {!searchTerm && featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-secondary/20 border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span className="mx-2">·</span>
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-secondary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Read more
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">
            {searchTerm ? `Search Results (${filteredPosts.length})` : 'All Posts'}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts found matching your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm ? filteredPosts : regularPosts).map((post, index) => (
                <article
                  key={index}
                  className="bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                      <span className="mx-2">·</span>
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-secondary text-xs rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      Read more
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default BlogPage
