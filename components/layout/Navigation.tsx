// Navigation — Huvudnavigation med hamburger-meny för mobil
// RTL-kompatibel: drawer glider in från höger (logisk inlineEnd)

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

// Navigationspost
const NAV_ITEMS = [
  { label: 'هەواڵ',                 href: '/',             key: 'news'       },
  { label: 'ڕای کەسی',             href: '/opinion',      key: 'opinion'    },
  { label: 'وەرزش',                 href: '/sport',        key: 'sport'      },
  { label: 'کولتوور',               href: '/culture',      key: 'culture'    },
  { label: 'ژیانی ڕۆژانە',         href: '/lifestyle',    key: 'lifestyle'  },
  { label: 'ئاووهەوا',             href: '/climate',      key: 'climate'    },
  { label: 'نووسراوەی ئەلیکترۆنی', href: '/newsletter',   key: 'newsletter' },
  { label: 'ڤیدیۆ',               href: '/video',         key: 'video'      },
  { label: 'پازڵ',                 href: '/puzzles',       key: 'puzzles'    },
]

// ─── HamburgerIcon ────────────────────────────────────────────────────────────

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="3" y1="3" x2="19" y2="19" />
          <line x1="19" y1="3" x2="3"  y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="6"  x2="19" y2="6"  />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="16" x2="19" y2="16" />
        </>
      )}
    </svg>
  )
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export function Navigation() {
  const pathname          = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Stäng drawer vid sidnavigering
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  // Förhindra scroll på body när drawer är öppen
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <nav className="jiyan-main-nav">
        <div
          className="jiyan-page-wrap jiyan-nav-desktop"
          style={{
            maxWidth:       'var(--max-width)',
            display:        'flex',
            direction:      'rtl',
            gap:            0,
            overflowX:      'auto',
            scrollbarWidth: 'none',
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`jiyan-nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        {/* Hamburger-knapp — visas bara på mobil */}
        <div
          className="jiyan-hamburger"
          style={{
            maxWidth:       'var(--max-width)',
            margin:         '0 auto',
            padding:        '0 20px',
            display:        'none',         /* Visas via CSS på mobil */
            alignItems:     'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Aktiv sida-etikett */}
          <span style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>
            {NAV_ITEMS.find((i) => i.href === pathname)?.label ?? 'ژیان'}
          </span>

          <button
            onClick={() => setDrawerOpen((v) => !v)}
            aria-label={drawerOpen ? 'داخستنی مێنو' : 'کردنەوەی مێنو'}
            aria-expanded={drawerOpen}
            style={{
              background: 'none',
              border:     'none',
              color:      'white',
              cursor:     'pointer',
              padding:    '8px 4px',
              display:    'flex',
              alignItems: 'center',
            }}
          >
            <HamburgerIcon open={drawerOpen} />
          </button>
        </div>
      </nav>

      {/* Overlay/backdrop */}
      {drawerOpen && (
        <div
          className="jiyan-mobile-overlay"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobil drawer — glider in från höger (RTL: inlineEnd = höger sida) */}
      <aside
        className={`jiyan-mobile-drawer${drawerOpen ? ' open' : ''}`}
        aria-label="ناڤیگەیشن"
        role="dialog"
        aria-modal="true"
      >
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                style={{
                  color:          isActive ? 'var(--yellow)' : 'rgba(255,255,255,0.9)',
                  fontWeight:     isActive ? 700 : 500,
                  fontSize:       '1rem',
                  padding:        '14px 24px',
                  borderBottom:   '1px solid rgba(255,255,255,0.08)',
                  textDecoration: 'none',
                  display:        'block',
                  borderRight:    isActive ? '3px solid var(--yellow)' : '3px solid transparent',
                  transition:     'background 0.12s',
                }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
