'use client'

// SearchOverlay — modal-overlay med backdrop-blur
// Integreras i root layout (eller TopStrip)
// Tar emot isOpen/onClose via props för att undvika context-beroende

import { useEffect } from 'react'
import { SearchBar } from './SearchBar'

interface SearchOverlayProps {
  isOpen:  boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  // Förhindra scrollning när overlay är öppen
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {/* Wrapper med opacity-transition */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="گەڕان"
        style={{
          position:   'fixed',
          top:        0,
          left:       0,
          right:      0,
          zIndex:     900,
          opacity:    isOpen ? 1 : 0,
          transform:  isOpen ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.18s ease, transform 0.18s ease',
          pointerEvents: isOpen ? 'auto' : 'none',
          boxShadow:  '0 8px 32px rgba(0,0,0,0.18)',
        }}
      >
        <SearchBar isOpen={isOpen} onClose={onClose} />
      </div>

      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position:   'fixed',
          inset:      0,
          zIndex:     800,
          background: 'rgba(4, 31, 74, 0.35)',
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          opacity:    isOpen ? 1 : 0,
          transition: 'opacity 0.18s ease',
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        aria-hidden="true"
      />
    </>
  )
}
