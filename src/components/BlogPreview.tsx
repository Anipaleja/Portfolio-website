'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock, BookOpen, Sparkles, TrendingUp } from 'lucide-react'

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
      tags: ['Robotics', 'AI', 'EMG', 'Hardware'],
      featured: true,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Creating a 4.7B Parameter Language Model with RAG Capabilities',
      excerpt: 'Deep dive into building iLLuMinator-4.7B, a transformer-based language model with integrated Retrieval-Augmented Generation.',
      date: '2024-01-10',
      readTime: '12 min read',
      slug: 'illuminator-language-model-rag',
      tags: ['AI', 'NLP', 'Transformers', 'RAG'],
      featured: true,
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Real-time Security Monitoring with nginx-defender',
      excerpt: 'How I built a lightweight Go application to detect and block malicious IP addresses in real-time.',
      date: '2024-01-05',
      readTime: '6 min read',
      slug: 'nginx-defender-security-monitoring',
      tags: ['Go', 'Security', 'DevOps', 'Monitoring'],
      featured: false,
      gradient: 'from-red-500 to-orange-600'
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <BookOpen className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-sm font-medium text-gray-300">Latest Insights</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              From the Blog
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Thoughts on AI, robotics, and building the future. 
            Sharing insights from my journey in technology and innovation.
          </p>
          
          <Link
            href="/blog"
            className="group inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            View all posts
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`group card-glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 ${
                post.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${post.gradient}`}></div>
              
              <div className="p-8">
                {/* Meta information */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="group/link inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  Read article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>

                {/* Featured badge */}
                {post.featured && (
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full">
                      <Sparkles className="w-3 h-3 text-white mr-1" />
                      <span className="text-xs font-bold text-white">Featured</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="text-center mt-20">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              Get notified when I publish new articles about AI, robotics, and innovative technologies. 
              No spam, just quality insights delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-400 flex-1 focus:outline-none focus:border-emerald-500/50 transition-colors"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
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
