import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
