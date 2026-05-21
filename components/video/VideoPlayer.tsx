'use client'

// VideoPlayer — Stor 16:9 videospelareplatshållare med play/pause-tillstånd

import { useState } from 'react'

interface VideoPlayerProps {
  title:      string
  duration:   string
  thumbnailUrl: string
  category:   string
}

export function VideoPlayer({ title, duration, thumbnailUrl, category }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <div
      style={{
        position:     'relative',
        width:        '100%',
        paddingBottom: '56.25%', // 16:9
        background:   '#000',
        overflow:     'hidden',
        cursor:       'pointer',
        marginBottom: '14px',
      }}
      onClick={() => setPlaying((p) => !p)}
    >
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        style={{
          position:   'absolute',
          top:        0, left: 0,
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',
          opacity:    playing ? 0.3 : 0.85,
          transition: 'opacity 0.25s',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position:   'absolute',
          top:        0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%)',
        }}
      />

      {/* Kategori-badge */}
      <div
        style={{
          position:     'absolute',
          top:          '16px',
          right:        '16px',
          background:   'var(--video)',
          color:        '#fff',
          fontWeight:   700,
          fontSize:     '0.7rem',
          padding:      '3px 10px',
          borderRadius: '2px',
          letterSpacing: '0.04em',
        }}
      >
        {category}
      </div>

      {/* Play/pause-knapp */}
      <div
        style={{
          position:        'absolute',
          top:             '50%',
          left:            '50%',
          transform:       'translate(-50%, -50%)',
          width:           72,
          height:          72,
          borderRadius:    '50%',
          background:      'rgba(255,255,255,0.95)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          transition:      'transform 0.15s',
        }}
      >
        {playing ? (
          /* Pause ikon */
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="4" width="4" height="16" rx="1" fill="#111" />
            <rect x="15" y="4" width="4" height="16" rx="1" fill="#111" />
          </svg>
        ) : (
          /* Play ikon */
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M6 4l14 8-14 8V4z" fill="#111" />
          </svg>
        )}
      </div>

      {/* Varaktighet */}
      <div
        style={{
          position:     'absolute',
          bottom:       '56px',
          left:         '16px',
          background:   'rgba(0,0,0,0.72)',
          color:        '#fff',
          fontSize:     '0.75rem',
          fontWeight:   700,
          padding:      '2px 7px',
          borderRadius: '2px',
        }}
      >
        {duration}
      </div>

      {/* Titel-overlay */}
      <div
        style={{
          position:   'absolute',
          bottom:     '16px',
          left:       '16px',
          right:      '16px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize:   '1.3rem',
            fontWeight: 700,
            color:      '#fff',
            lineHeight: 1.38,
          }}
        >
          {title}
        </div>
      </div>

      {/* Spelar-indikator */}
      {playing && (
        <div
          style={{
            position:        'absolute',
            top:             '50%',
            left:            '50%',
            transform:       'translate(-50%, -50%)',
            fontSize:        '0.85rem',
            color:           'rgba(255,255,255,0.9)',
            fontWeight:      700,
            marginTop:       '50px',
          }}
        >
          ڤیدیۆ دەگەڕێتەوە...
        </div>
      )}
    </div>
  )
}
