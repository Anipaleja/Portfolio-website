'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Check, Sun, Moon, Coffee, Zap } from 'lucide-react'
import { useTheme, themes, type ThemeName } from '../contexts/ThemeContext'

const themeIcons = {
  latte: Sun,
  frappe: Coffee,
  macchiato: Moon,
  mocha: Zap
}

const accentColors = [
  { key: 'accent', name: 'Blue', color: 'accent' },
  { key: 'green', name: 'Green', color: 'green' },
  { key: 'red', name: 'Red', color: 'red' },
  { key: 'yellow', name: 'Yellow', color: 'yellow' },
  { key: 'purple', name: 'Purple', color: 'purple' },
  { key: 'pink', name: 'Pink', color: 'pink' },
  { key: 'teal', name: 'Teal', color: 'teal' },
] as const

export default function ThemeSelector() {
  const { currentTheme, setTheme, accentColor, setAccentColor, theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full glass-strong border border-white/20 hover:border-accent/50 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open theme selector"
      >
        <Palette className="w-5 h-5 text-accent" />
      </motion.button>

      {/* Theme Selector Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 backdrop-blur-sm bg-black/20"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", duration: 0.3 }}
              className="fixed top-16 right-4 z-50 w-80 glass-strong rounded-2xl border border-white/20 p-6 font-mono"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-accent flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Theme
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-subtext hover:text-accent transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Theme Options */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-medium text-subtext uppercase tracking-wider">
                  Color Scheme
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(themes).map(([key, themeData]) => {
                    const Icon = themeIcons[key as ThemeName]
                    const isSelected = currentTheme === key
                    
                    return (
                      <motion.button
                        key={key}
                        onClick={() => setTheme(key as ThemeName)}
                        className={`relative p-3 rounded-xl transition-all duration-200 ${
                          isSelected 
                            ? 'bg-accent/20 border-2 border-accent' 
                            : 'bg-surface/50 border-2 border-transparent hover:border-accent/30'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4" style={{ color: themeData.accent }} />
                          <span className="text-sm font-medium">{themeData.name}</span>
                        </div>
                        
                        {/* Color Preview */}
                        <div className="flex space-x-1 mt-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: themeData.bg }}
                          />
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: themeData.surface }}
                          />
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: themeData.accent }}
                          />
                        </div>
                        
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-1 right-1"
                          >
                            <Check className="w-4 h-4 text-accent" />
                          </motion.div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Accent Color Selector */}
              <div className="space-y-4">
                <h4 className="text-sm font-medium text-subtext uppercase tracking-wider">
                  Accent Color
                </h4>
                
                <div className="grid grid-cols-7 gap-2">
                  {accentColors.map(({ key, name, color }) => {
                    const isSelected = accentColor === key
                    const colorValue = theme[color as keyof typeof theme] as string
                    
                    return (
                      <motion.button
                        key={key}
                        onClick={() => setAccentColor(color as keyof typeof theme)}
                        className={`relative w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                          isSelected 
                            ? 'border-white scale-110' 
                            : 'border-transparent hover:scale-105'
                        }`}
                        style={{ backgroundColor: colorValue }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={name}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-white drop-shadow-lg" />
                          </motion.div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Cool animated indicator */}
              <motion.div
                className="mt-6 h-1 bg-gradient-to-r from-accent/50 via-accent to-accent/50 rounded-full"
                animate={{
                  background: [
                    `linear-gradient(to right, ${theme.accent}50, ${theme.accent}, ${theme.accent}50)`,
                    `linear-gradient(to right, ${theme.accent}, ${theme.accent}50, ${theme.accent})`,
                    `linear-gradient(to right, ${theme.accent}50, ${theme.accent}, ${theme.accent}50)`,
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
