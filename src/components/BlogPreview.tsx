'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

const BlogPreview = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Sample blog posts - you can easily add more by editing this array
  const blogPosts = [
    {
      title: 'Building an AI-Powered Robotic Arm: From EMG Signals to Movement',
      excerpt: 'Exploring how I developed a robotic arm that responds to muscle signals using EMG sensors and machine learning algorithms.',
      date: '2024-01-15',
      readTime: '8 min read',
      slug: 'ai-robotic-arm-emg-signals',
      tags: ['Robotics', 'AI', 'EMG', 'Hardware']
    },
    {
      title: 'Creating a 4.7B Parameter Language Model with RAG Capabilities',
      excerpt: 'Deep dive into building iLLuMinator-4.7B, a transformer-based language model with integrated Retrieval-Augmented Generation.',
      date: '2024-01-10',
      readTime: '12 min read',
      slug: 'illuminator-language-model-rag',
      tags: ['AI', 'NLP', 'Transformers', 'RAG']
    },
    {
      title: 'Real-time Security Monitoring with nginx-defender',
      excerpt: 'How I built a lightweight Go application to detect and block malicious IP addresses in real-time.',
      date: '2024-01-05',
      readTime: '6 min read',
      slug: 'nginx-defender-security-monitoring',
      tags: ['Go', 'Security', 'DevOps', 'Monitoring']
    }
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Posts
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Thoughts on AI, robotics, and building the future
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            View all posts
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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

                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
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

        <div className="text-center mt-12">
          <div className="bg-secondary/50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Want to stay updated?</h3>
            <p className="text-muted-foreground mb-6">
              I write about AI, robotics, and innovative technologies. Subscribe to get notified about new posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-border rounded-lg bg-background flex-1"
              />
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
