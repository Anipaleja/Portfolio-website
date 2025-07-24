import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Theme system colors
        'theme-bg': 'var(--theme-bg)',
        'theme-surface': 'var(--theme-surface)',
        'theme-overlay': 'var(--theme-overlay)',
        'theme-text': 'var(--theme-text)',
        'theme-subtext': 'var(--theme-subtext)',
        'theme-accent': 'var(--theme-accent)',
        'theme-green': 'var(--theme-green)',
        'theme-red': 'var(--theme-red)',
        'theme-yellow': 'var(--theme-yellow)',
        'theme-purple': 'var(--theme-purple)',
        'theme-pink': 'var(--theme-pink)',
        'theme-teal': 'var(--theme-teal)',
        // Semantic aliases for easier use
        'bg': 'var(--theme-bg)',
        'surface': 'var(--theme-surface)',
        'overlay': 'var(--theme-overlay)',
        'text': 'var(--theme-text)',
        'subtext': 'var(--theme-subtext)',
        'accent': 'var(--theme-accent)',
        'green': 'var(--theme-green)',
        'red': 'var(--theme-red)',
        'yellow': 'var(--theme-yellow)',
        'purple': 'var(--theme-purple)',
        'pink': 'var(--theme-pink)',
        'teal': 'var(--theme-teal)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'monospace'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slideInLeft': 'slideInLeft 0.3s ease-out',
        'slideInRight': 'slideInRight 0.3s ease-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)',
          },
          '50%': {
            transform: 'rotate(3deg)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config