# How to Add New Blog Posts

This portfolio website includes an easy-to-use blog system. You can add new blog posts by simply creating markdown files in the `content/blog/` directory.

## Creating a New Blog Post

### Step 1: Create a New Markdown File

Create a new file in `content/blog/` with a descriptive filename. For example:
- `content/blog/my-new-project.md`
- `content/blog/learning-about-ai.md`
- `content/blog/robotics-breakthrough.md`

### Step 2: Add Frontmatter

Start your file with YAML frontmatter (metadata) between `---` lines:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-20"
tags: ["AI", "Robotics", "Programming"]
excerpt: "A brief description of your post that appears in previews"
---
```

### Step 3: Write Your Content

After the frontmatter, write your blog post content using simple HTML tags:

```markdown
<p>This is a paragraph. You can write your content using simple HTML tags.</p>

<h2>This is a Heading</h2>

<p>You can write about your projects, learnings, or any technical topics.</p>

<ul>
<li>Create lists easily</li>
<li>Add multiple items</li>
<li>Keep it organized</li>
</ul>

<p><strong>Bold text</strong> and <em>italic text</em> are supported.</p>
```

## Complete Example

Here's a complete example of a blog post file:

```markdown
---
title: "Building My First Neural Network"
date: "2024-01-20"
tags: ["AI", "Machine Learning", "Python"]
excerpt: "My journey learning about neural networks and implementing one from scratch"
---

<p>Today I want to share my experience building my first neural network from scratch. It was challenging but incredibly rewarding!</p>

<h2>What I Learned</h2>

<p>The most important things I discovered were:</p>

<ul>
<li>Understanding backpropagation is crucial</li>
<li>Data preprocessing makes a huge difference</li>
<li>Starting simple is the best approach</li>
</ul>

<h2>The Implementation</h2>

<p>I started with a simple feedforward network using Python. The key components were:</p>

<p><strong>Forward Pass:</strong> Computing predictions from input to output.</p>

<p><strong>Backward Pass:</strong> Calculating gradients and updating weights.</p>

<h2>Results</h2>

<p>After training for 100 epochs, my network achieved 95% accuracy on the test set. Not bad for a first attempt!</p>

<p>Next, I plan to experiment with different architectures and optimization techniques.</p>
```

## Available HTML Tags

You can use these HTML tags in your blog posts:

- `<p>` - Paragraphs
- `<h1>`, `<h2>`, `<h3>` - Headings
- `<strong>` - Bold text
- `<em>` - Italic text
- `<ul>`, `<ol>`, `<li>` - Lists
- `<a href="url">` - Links
- `<code>` - Inline code
- `<pre>` - Code blocks

## Tips for Great Blog Posts

1. **Use descriptive titles** - They appear in search results and social shares
2. **Write compelling excerpts** - These show up in the blog listing page
3. **Choose relevant tags** - They help readers find related content
4. **Use proper dates** - Format as "YYYY-MM-DD"
5. **Keep paragraphs readable** - Wrap content in `<p>` tags
6. **Structure with headings** - Use `<h2>` and `<h3>` to organize content

## Automatic Features

The blog system automatically:
- Calculates reading time based on word count
- Formats dates for display
- Creates tag badges
- Generates navigation between posts
- Provides search functionality
- Makes posts responsive for mobile

## Publishing Your Post

Once you save your markdown file in `content/blog/`, it will automatically appear on your blog! The system will:
- Show it in the blog listing at `/blog`
- Make it accessible at `/blog/your-filename` (without .md)
- Include it in the homepage blog preview (if it's recent)
- Add it to search results

That's it! No complex setup or deployment needed. Just create a markdown file and start writing.
