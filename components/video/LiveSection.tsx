'use client'

// LiveSection — "ڕاستەوخۆ" med pulsande LIVE-badge och 2 live-stream-platshållare

import { useState, useEffect } from 'react'

interface LiveStream {
  id:          string
  title:       string
  viewers:     string
  thumbnailUrl: string
}

interface LiveSectionProps {
  streams: LiveStream[]
}

function PulseBadge() {
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 900)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        display:     'inline-flex',
        alignItems:  'center',
        gap:         '6px',
        background:  '#c70000',
        color:       '#fff',
        fontWeight:  900,
        fontSize:    '0.7rem',
        padding:     '3px 10px 3px 8px',
        borderRadius: '2px',
        letterSpacing: '0.06em',
      }}
    >
      <div
        style={{
          width:        8,
          height:       8,
          borderRadius: '50%',
          background:   '#fff',
          opacity:      pulse ? 1 : 0.3,
          transition:   'opacity 0.4s',
        }}
      />
      LIVE
    </div>
  )
}

export function LiveSection({ streams }: LiveSectionProps) {
  return (
    <div
      style={{
        borderTop:    '3px solid #c70000',
        paddingTop:   '6px',
        marginBottom: '32px',
      }}
    >
      <div
        style={{
          display:        'flex',
          alignItems:     'center',
          gap:            '12px',
          marginBottom:   '18px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize:   '1.15rem',
            fontWeight: 700,
            color:      '#c70000',
          }}
        >
          ڕاستەوخۆ
        </div>
        <PulseBadge />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {streams.map((stream) => (
          <div
            key={stream.id}
            style={{
              border:       '2px solid #c70000',
              borderRadius: '2px',
              overflow:     'hidden',
              cursor:       'pointer',
            }}
          >
            {/* Thumbnail */}
            <div
              style={{
                position:      'relative',
                width:         '100%',
                paddingBottom: '56.25%',
                background:    '#111',
              }}
            >
              <img
                src={stream.thumbnailUrl}
                alt={stream.title}
                style={{
                  position:  'absolute',
                  top: 0, left: 0,
                  width:     '100%',
                  height:    '100%',
                  objectFit: 'cover',
                  opacity:   0.7,
                }}
              />
              {/* LIVE overlay */}
              <div
                style={{
                  position:        'absolute',
                  top:             '50%',
                  left:            '50%',
                  transform:       'translate(-50%, -50%)',
                  width:           56,
                  height:          56,
                  borderRadius:    '50%',
                  border:          '3px solid #fff',
                  background:      'rgba(199,0,0,0.85)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 4l14 8-14 8V4z" fill="#fff" />
                </svg>
              </div>

              {/* Tittarantal */}
              <div
                style={{
                  position:     'absolute',
                  bottom:       '8px',
                  right:        '8px',
                  background:   'rgba(0,0,0,0.75)',
                  color:        '#fff',
                  fontSize:     '0.68rem',
                  fontWeight:   700,
                  padding:      '2px 7px',
                  borderRadius: '2px',
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '4px',
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#fff" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {stream.viewers}
              </div>
            </div>

            {/* Titel */}
            <div style={{ padding: '10px 12px', background: '#fff' }}>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize:   '0.88rem',
                  fontWeight: 700,
                  lineHeight: 1.4,
                  color:      'var(--text)',
                }}
              >
                {stream.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
