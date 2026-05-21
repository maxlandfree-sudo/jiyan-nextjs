// Jiyan ژیان — 404-sida (not-found)
// Fristående — använder inte next-intl-komponenter
// Jiyan-branded 404 med navigation till populära sektioner

import Link from 'next/link'

const POPULAR_SECTIONS = [
  { label: 'هەواڵ',      href: '/',          bg: '#005689' },
  { label: 'ڕای کەسی',  href: '/opinion',   bg: '#c70000' },
  { label: 'وەرزش',      href: '/sport',     bg: '#005689' },
  { label: 'کولتوور',    href: '/culture',   bg: '#005f4e' },
  { label: 'ژینگە',      href: '/climate',   bg: '#15803d' },
  { label: 'پازڵ',       href: '/puzzles',   bg: '#6b21a8' },
]

export default function NotFound() {
  return (
    <>
      {/* Enkel header utan next-intl-beroenden */}
      <header style={{
        background:    'var(--navy)',
        padding:       '16px 20px',
        borderBottom:  '2px solid var(--yellow)',
      }}>
        <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              fontFamily:    'var(--serif)',
              fontSize:      '2rem',
              fontWeight:    900,
              color:         'var(--yellow)',
              textDecoration: 'none',
              letterSpacing: '-0.5px',
            }}
          >
            ژیان
          </Link>
        </div>
      </header>

      <main>
        <div
          style={{
            maxWidth:      'var(--max-width)',
            margin:        '0 auto',
            padding:       '60px 20px',
            minHeight:     '60vh',
            display:       'flex',
            flexDirection: 'column',
            alignItems:    'center',
            textAlign:     'center',
          }}
        >
          {/* Stor 404 */}
          <div
            style={{
              fontSize:      'clamp(5rem, 18vw, 9rem)',
              fontWeight:    900,
              color:         'var(--navy)',
              lineHeight:    1,
              fontFamily:    'var(--serif)',
              marginBottom:  '20px',
              letterSpacing: '-2px',
            }}
          >
            ٤٠٤
          </div>

          {/* Rubrik */}
          <h1
            style={{
              fontSize:     'clamp(1.4rem, 4vw, 2rem)',
              fontWeight:   700,
              color:        'var(--navy)',
              fontFamily:   'var(--serif)',
              marginBottom: '16px',
            }}
          >
            ئەم پەڕەیە نەدۆزرایەوە
          </h1>

          {/* Förklaring */}
          <p
            style={{
              fontSize:     '1rem',
              color:        '#767676',
              maxWidth:     '500px',
              lineHeight:   1.7,
              marginBottom: '32px',
            }}
          >
            ببوورە، ئەم پەڕەیەی بەدوای دەگەڕێی بوونی نییە یان گواسترایەتەوە.
            دەتوانیت بگەڕێیتەوە بۆ پەڕەی سەرەکی یان یەکێک لە بەشەکانی خوارەوە
            بکاتە هەڵبژاردن.
          </p>

          {/* Tillbaka-knapp */}
          <Link
            href="/"
            style={{
              display:        'inline-block',
              background:     'var(--navy)',
              color:          'white',
              padding:        '12px 32px',
              borderRadius:   '3px',
              fontSize:       '0.9rem',
              fontWeight:     700,
              textDecoration: 'none',
              marginBottom:   '48px',
            }}
          >
            بگەڕێوە بۆ پەڕەی سەرەکی
          </Link>

          {/* Populära sektioner */}
          <div style={{ width: '100%', maxWidth: '640px' }}>
            <div style={{
              fontSize:      '0.8rem',
              fontWeight:    700,
              color:         '#767676',
              marginBottom:  '16px',
              letterSpacing: '0.05em',
            }}>
              بەشەکانی بەناوبانگ
            </div>

            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap:                 '12px',
              }}
            >
              {POPULAR_SECTIONS.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="jiyan-404-section-link"
                  style={{ background: section.bg }}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Enkel footer utan next-intl-beroenden */}
      <footer style={{
        background:  'var(--navy)',
        padding:     '24px 20px',
        marginTop:   '48px',
        textAlign:   'center',
      }}>
        <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
          © ٢٠٢٥ ژیان — هەموو مافەکان پارێزراون
        </div>
      </footer>
    </>
  )
}
