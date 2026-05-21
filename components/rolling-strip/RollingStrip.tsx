'use client'

// RollingStrip — Guardian-inspirerad horisontell rullande remsa
// Speglar .rolling-strip i index.html

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { StripCard } from '@/types/jiyan'

interface RollingStripProps {
  cards: StripCard[]
}

// Färgmappning för titel
function getTitleColor(color?: StripCard['titleColor']): string {
  switch (color) {
    case 'navy':    return 'var(--navy)'
    case 'podcast': return '#7b2d8b'
    case 'green':   return '#005f4e'
    default:        return 'var(--red)'
  }
}

export function RollingStrip({ cards }: RollingStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scrollStrip() {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -270, behavior: 'smooth' })
    }
  }

  return (
    <div className="jiyan-rolling-strip">
      <div style={{ display: 'flex', alignItems: 'stretch', direction: 'ltr' }}>

        {/* Rullande kortarea */}
        <div
          ref={scrollRef}
          style={{
            flex:            1,
            display:         'flex',
            direction:       'ltr',
            overflowX:       'auto',
            scrollBehavior:  'smooth',
            scrollbarWidth:  'none',
          }}
        >
          {cards.map((card, i) => (
            <Link
              key={i}
              href={card.href}
              className="strip-card"
              style={{ borderRight: i > 0 ? '1px solid #e0ccba' : 'none' }}
            >
              {/* Text */}
              <div style={{ flex: 1, minWidth: 0, direction: 'rtl', textAlign: 'right' }}>
                <div style={{ fontSize: '0.63rem', color: '#888', marginBottom: '4px', lineHeight: 1.4 }}>
                  {card.kicker}
                </div>
                <div style={{
                  fontFamily: 'var(--serif)',
                  fontSize:   '0.88rem',
                  fontWeight: 700,
                  lineHeight: 1.45,
                  color:      getTitleColor(card.titleColor),
                }}>
                  {card.title}
                </div>
              </div>

              {/* Cirkulär bild eller podcast-ikon */}
              <div className="strip-circle" style={card.isPodcast ? { background: 'linear-gradient(135deg,#7b2d8b,#4a1060)' } : {}}>
                {card.isPodcast ? (
                  <span style={{ fontSize: '1.9rem' }}>🎙</span>
                ) : card.image ? (
                  <Image src={card.image} alt={card.kicker} width={72} height={72} style={{ objectFit: 'cover' }} />
                ) : null}
              </div>
            </Link>
          ))}
        </div>

        {/* Pilknapp för att scrolla */}
        <button
          onClick={scrollStrip}
          aria-label="زیاتر"
          style={{
            width:      '54px',
            flexShrink: 0,
            border:     'none',
            cursor:     'pointer',
            background: 'linear-gradient(to right, transparent, #fdf0e8 55%)',
            display:    'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '8px',
          }}
        >
          <div style={{
            width:          '36px',
            height:         '36px',
            borderRadius:   '50%',
            background:     'var(--navy)',
            color:          'white',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            fontSize:       '1.05rem',
            fontWeight:     700,
          }}>
            ›
          </div>
        </button>

      </div>
    </div>
  )
}
