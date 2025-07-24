import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Calendar, Clock, ArrowLeft, Share } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  title: string
  date: string
  tags: string[]
  excerpt: string
  content: string
  readTime?: string
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)
    
    // Calculate read time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length
    const readTime = Math.ceil(wordCount / 200)

    return {
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt,
      content,
      readTime: `${readTime} min read`
    }
  } catch (error) {
    console.error('Error reading blog post:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Anish Paleja',
    }
  }

  return {
    title: `${post.title} - Anish Paleja`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Anish Paleja'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-secondary text-sm rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center text-muted-foreground mb-6">
            <Calendar size={18} className="mr-2" />
            <span className="mr-4">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <Clock size={18} className="mr-2" />
            <span>{post.readTime}</span>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article content */}
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 leading-relaxed text-foreground">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-foreground">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-foreground">{children}</strong>
              ),
              code: ({ children }) => (
                <code className="bg-secondary px-1 py-0.5 rounded text-sm font-mono">{children}</code>
              ),
              pre: ({ children }) => (
                <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                  {children}
                </blockquote>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Share section */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Share this post</h3>
              <p className="text-muted-foreground text-sm">
                Found this interesting? Share it with others!
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 border border-border rounded-lg hover:bg-secondary transition-colors">
                <Share size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation to other posts */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ← All Posts
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
