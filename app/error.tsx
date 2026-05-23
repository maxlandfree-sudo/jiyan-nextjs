'use client'

// Jiyan ژیان — Global error boundary (rot-nivå)
// Krävs av Next.js 14 App Router för att hantera oväntade fel
// Visas när ett fel kastas i root-layouten eller dess children

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Logga felet till din felrapporteringstjänst här
    console.error('Global error:', error)
  }, [error])

  return (
    <>
      <header style={{
        background:   '#041f4a',
        padding:      '16px 20px',
        borderBottom: '2px solid #ffbb00',
      }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              fontFamily:     'serif',
              fontSize:       '2rem',
              fontWeight:     900,
              color:          '#ffbb00',
              textDecoration: 'none',
            }}
          >
            ژیان
          </Link>
        </div>
      </header>

      <main>
        <div style={{
          maxWidth:      '1300px',
          margin:        '0 auto',
          padding:       '60px 20px',
          minHeight:     '60vh',
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          textAlign:     'center',
        }}>
          <div style={{
            fontSize:     'clamp(3rem, 10vw, 6rem)',
            fontWeight:   900,
            color:        '#041f4a',
            lineHeight:   1,
            marginBottom: '20px',
          }}>
            ⚠
          </div>

          <h1 style={{
            fontSize:     'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight:   700,
            color:        '#041f4a',
            marginBottom: '16px',
            direction:    'rtl',
          }}>
            هەڵەیەک ڕوویدا
          </h1>

          <p style={{
            fontSize:     '1rem',
            color:        '#767676',
            maxWidth:     '500px',
            lineHeight:   1.7,
            marginBottom: '32px',
            direction:    'rtl',
          }}>
            ببوورە، کێشەیەکی نەچاوەڕێکراو ڕوویدا. تکایە دووبارە هەوڵ بدە یان بگەڕێیتەوە بۆ پەڕەی سەرەکی.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={reset}
              style={{
                display:        'inline-block',
                background:     '#041f4a',
                color:          'white',
                padding:        '12px 32px',
                borderRadius:   '3px',
                fontSize:       '0.9rem',
                fontWeight:     700,
                border:         'none',
                cursor:         'pointer',
                direction:      'rtl',
              }}
            >
              دووبارە هەوڵ بدە
            </button>

            <Link
              href="/"
              style={{
                display:        'inline-block',
                background:     'transparent',
                color:          '#041f4a',
                padding:        '12px 32px',
                borderRadius:   '3px',
                fontSize:       '0.9rem',
                fontWeight:     700,
                textDecoration: 'none',
                border:         '2px solid #041f4a',
                direction:      'rtl',
              }}
            >
              بگەڕێوە بۆ پەڕەی سەرەکی
            </Link>
          </div>
        </div>
      </main>

      <footer style={{
        background: '#041f4a',
        padding:    '24px 20px',
        marginTop:  '48px',
        textAlign:  'center',
      }}>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
          © ٢٠٢٥ ژیان — هەموو مافەکان پارێزراون
        </div>
      </footer>
    </>
  )
}
