'use client'

// ShareButtons — Twitter/X, Facebook, kopiera länk
// Kräver "use client" för clipboard API och window-objekt

import { useState } from 'react'

interface ShareButtonsProps {
  headline: string
  slug:     string
}

export function ShareButtons({ headline, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const articleUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/article/${slug}`
    : `/article/${slug}`

  const encodedUrl     = encodeURIComponent(articleUrl)
  const encodedHeadline = encodeURIComponent(headline)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div
      style={{
        display:    'flex',
        alignItems: 'center',
        gap:        '8px',
        flexWrap:   'wrap',
      }}
    >
      <span
        style={{
          fontSize:    '0.72rem',
          fontWeight:  700,
          color:       '#767676',
          letterSpacing: '0.04em',
        }}
      >
        بەشداریبکە:
      </span>

      {/* Twitter / X */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedHeadline}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '5px',
          background:     '#000',
          color:          'white',
          fontSize:       '0.75rem',
          fontWeight:     600,
          padding:        '5px 12px',
          borderRadius:   '3px',
          textDecoration: 'none',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.842L2 2.25h7.022l4.258 5.634L18.244 2.25zM17.083 19.77h1.833L6.966 4.126H5L17.083 19.77z" />
        </svg>
        X / Twitter
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '5px',
          background:     '#1877f2',
          color:          'white',
          fontSize:       '0.75rem',
          fontWeight:     600,
          padding:        '5px 12px',
          borderRadius:   '3px',
          textDecoration: 'none',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
        Facebook
      </a>

      {/* Kopiera länk */}
      <button
        onClick={handleCopy}
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          gap:            '5px',
          background:     copied ? '#0a7c45' : '#f6f6f6',
          color:          copied ? 'white' : '#333',
          fontSize:       '0.75rem',
          fontWeight:     600,
          padding:        '5px 12px',
          borderRadius:   '3px',
          border:         '1px solid #dcdcdc',
          cursor:         'pointer',
          transition:     'background 0.2s, color 0.2s',
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
        {copied ? 'کۆپی کرا!' : 'کۆپی بکە'}
      </button>
    </div>
  )
}
