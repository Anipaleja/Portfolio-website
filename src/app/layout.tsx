import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeSelector from '@/components/ThemeSelector'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anish Paleja - Portfolio',
  description: 'Student innovator | Robotics & AI enthusiast | Building LLMs & neural networks, EMG prosthetics, and smarter tools',
  keywords: ['Anish Paleja', 'AI', 'Machine Learning', 'Robotics', 'Software Development', 'Portfolio'],
  authors: [{ name: 'Anish Paleja' }],
  openGraph: {
    title: 'Anish Paleja - Portfolio',
    description: 'Student innovator | Robotics & AI enthusiast | Building LLMs & neural networks, EMG prosthetics, and smarter tools',
    url: 'https://anishpaleja.dev',
    siteName: 'Anish Paleja Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anish Paleja - Portfolio',
    description: 'Student innovator | Robotics & AI enthusiast | Building LLMs & neural networks, EMG prosthetics, and smarter tools',
    creator: '@anishpaleja',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="theme-mocha">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          <ThemeSelector />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
