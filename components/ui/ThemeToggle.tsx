'use client'

// ThemeToggle — växlar mellan ljust och mörkt läge
// Respekterar prefers-color-scheme vid första besök
// Sparar val i localStorage under nyckeln 'jiyan-theme'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round"
         strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  )
}

// Applicerar tema på <html> och sparar till localStorage
function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === 'dark') {
    root.setAttribute('data-theme', 'dark')
  } else {
    root.removeAttribute('data-theme')
  }
  try {
    localStorage.setItem('jiyan-theme', theme)
  } catch {
    // privat läge — ignorera
  }
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  // Läs sparad inställning eller systempreferens vid montering
  useEffect(() => {
    let saved: Theme | null = null
    try {
      saved = localStorage.getItem('jiyan-theme') as Theme | null
    } catch {
      // ignorera
    }

    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

    const initial: Theme = saved ?? preferred
    setTheme(initial)
    applyTheme(initial)
    setMounted(true)
  }, [])

  function toggle() {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
  }

  // Renderera ingenting tills montering är klar (undviker hydration-mismatch)
  if (!mounted) return null

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'light' ? 'گۆڕانی بۆ شێوازی شەو' : 'گۆڕانی بۆ شێوازی ڕۆژ'}
      title={theme === 'light' ? 'مۆدی تاریک' : 'مۆدی ڕووناک'}
      style={{
        background:  'rgba(255,255,255,0.1)',
        border:      '1px solid rgba(255,255,255,0.2)',
        color:       'rgba(255,255,255,0.85)',
        cursor:      'pointer',
        padding:     '4px 7px',
        display:     'flex',
        alignItems:  'center',
        justifyContent: 'center',
        borderRadius: '2px',
        transition:  'background 0.15s, color 0.15s',
        flexShrink:  0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.18)'
        el.style.color       = 'white'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,0.1)'
        el.style.color       = 'rgba(255,255,255,0.85)'
      }}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
