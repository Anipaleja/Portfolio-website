'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

// Catppuccin color palettes inspired by Jason Cameron
export const themes = {
  latte: {
    name: 'Latte',
    bg: '#eff1f5',        // Light background
    surface: '#e6e9ef',   // Slightly darker surface
    overlay: '#6c6f85',   // Medium contrast for borders/overlays
    text: '#4c4f69',      // Dark text for excellent contrast on light bg
    subtext: '#5c5f77',   // Slightly lighter than main text
    accent: '#1e66f5',    // Blue accent
    green: '#40a02b',     // Green
    red: '#d20f39',       // Red
    yellow: '#df8e1d',    // Yellow/Orange
    purple: '#8839ef',    // Purple
    pink: '#ea76cb',      // Pink
    teal: '#179299',      // Teal
    class: 'theme-latte'
  },
  frappe: {
    name: 'Frappé',
    bg: '#303446',
    surface: '#414559',
    overlay: '#737994',
    text: '#c6d0f5',
    subtext: '#a5adce',
    accent: '#8caaee', // Blue
    green: '#a6d189',
    red: '#e78284',
    yellow: '#e5c890',
    purple: '#ca9ee6',
    pink: '#f4b8e4',
    teal: '#81c8be',
    class: 'theme-frappe'
  },
  macchiato: {
    name: 'Macchiato',
    bg: '#24273a',
    surface: '#363a4f',
    overlay: '#6e738d',
    text: '#cad3f5',
    subtext: '#a5adcb',
    accent: '#8aadf4', // Blue
    green: '#a6da95',
    red: '#ed8796',
    yellow: '#eed49f',
    purple: '#c6a0f6',
    pink: '#f5bde6',
    teal: '#8bd5ca',
    class: 'theme-macchiato'
  },
  mocha: {
    name: 'Mocha',
    bg: '#1e1e2e',
    surface: '#313244',
    overlay: '#6c7086',
    text: '#cdd6f4',
    subtext: '#a6adc8',
    accent: '#89b4fa', // Blue
    green: '#a6e3a1',
    red: '#f38ba8',
    yellow: '#f9e2af',
    purple: '#cba6f7',
    pink: '#f5c2e7',
    teal: '#94e2d5',
    class: 'theme-mocha'
  }
} as const

export type ThemeName = keyof typeof themes
export type Theme = typeof themes[ThemeName]

interface ThemeContextType {
  currentTheme: ThemeName
  theme: Theme
  setTheme: (theme: ThemeName) => void
  accentColor: string
  setAccentColor: (color: keyof Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('mocha')
  const [accentColor, setAccentColorState] = useState<keyof Theme>('accent')

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeName
    const savedAccent = localStorage.getItem('accent') as keyof Theme
    
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme)
    } else {
      // Default to dark theme (mocha) if no preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setCurrentTheme(prefersDark ? 'mocha' : 'latte')
    }
    
    if (savedAccent) {
      setAccentColorState(savedAccent)
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    const theme = themes[currentTheme]
    const root = document.documentElement
    
    // Apply CSS custom properties
    root.style.setProperty('--theme-bg', theme.bg)
    root.style.setProperty('--theme-surface', theme.surface)
    root.style.setProperty('--theme-overlay', theme.overlay)
    root.style.setProperty('--theme-text', theme.text)
    root.style.setProperty('--theme-subtext', theme.subtext)
    root.style.setProperty('--theme-accent', theme[accentColor] as string)
    root.style.setProperty('--theme-green', theme.green)
    root.style.setProperty('--theme-red', theme.red)
    root.style.setProperty('--theme-yellow', theme.yellow)
    root.style.setProperty('--theme-purple', theme.purple)
    root.style.setProperty('--theme-pink', theme.pink)
    root.style.setProperty('--theme-teal', theme.teal)
    root.style.setProperty('--theme-blue', theme.accent) // Use accent as blue
    root.style.setProperty('--theme-orange', theme.yellow) // Use yellow as orange fallback
    
    // Apply theme class
    root.className = theme.class
    
    // Save to localStorage
    localStorage.setItem('theme', currentTheme)
    localStorage.setItem('accent', accentColor as string)
  }, [currentTheme, accentColor])

  const setTheme = (theme: ThemeName) => {
    // Add smooth transition effect
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setCurrentTheme(theme)
      })
    } else {
      setCurrentTheme(theme)
    }
  }

  const setAccentColor = (color: keyof Theme) => {
    setAccentColorState(color)
  }

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      theme: themes[currentTheme],
      setTheme,
      accentColor: accentColor as string,
      setAccentColor
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
