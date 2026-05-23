'use client'

// Jiyan ژیان — Global error boundary för root-layout
// global-error.tsx hanterar fel som uppstår i root layout.tsx
// Kräver egna <html> och <body>-taggar eftersom root-layouten inte renderas

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="ckb" dir="rtl">
      <body style={{ margin: 0, fontFamily: 'serif', background: '#f6f6f6' }}>
        <header style={{
          background:   '#041f4a',
          padding:      '16px 20px',
          borderBottom: '2px solid #ffbb00',
        }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <a
              href="/"
              style={{
                fontSize:       '2rem',
                fontWeight:     900,
                color:          '#ffbb00',
                textDecoration: 'none',
              }}
            >
              ژیان
            </a>
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
            <h1 style={{
              fontSize:     '1.8rem',
              fontWeight:   700,
              color:        '#041f4a',
              marginBottom: '16px',
            }}>
              هەڵەیەک ڕوویدا
            </h1>

            <p style={{
              fontSize:     '1rem',
              color:        '#767676',
              marginBottom: '32px',
            }}>
              کێشەیەکی نەچاوەڕێکراو ڕوویدا.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                onClick={reset}
                style={{
                  background:   '#041f4a',
                  color:        'white',
                  padding:      '12px 32px',
                  borderRadius: '3px',
                  fontSize:     '0.9rem',
                  fontWeight:   700,
                  border:       'none',
                  cursor:       'pointer',
                }}
              >
                دووبارە هەوڵ بدە
              </button>

              <a
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
                }}
              >
                بگەڕێوە بۆ پەڕەی سەرەکی
              </a>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
