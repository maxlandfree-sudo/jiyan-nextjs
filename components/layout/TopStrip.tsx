'use client'

// TopStrip — övre remsan med internationell edition, inloggning och prenumerera
// Inkluderar LanguageSwitcher, sök-ikon, ThemeToggle och hamburger-stöd
// Mobilresponsiv: på < 640px visas bara logotyp + sök + theme-toggle

import { useState, useTransition } from 'react'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'
import { SearchOverlay } from '@/components/search/SearchOverlay'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

// ─── Språkkonfiguration ──────────────────────────────────────────────────────

type Locale = 'ckb' | 'fa' | 'kmr' | 'en'

const LANGUAGES: { code: Locale; label: string; shortLabel: string }[] = [
  { code: 'ckb', label: 'کوردی سۆرانی', shortLabel: 'سۆرانی' },
  { code: 'fa',  label: 'فارسی',         shortLabel: 'فارسی'   },
  { code: 'kmr', label: 'کورمانجی',      shortLabel: 'کورمانجی'},
  { code: 'en',  label: 'English',        shortLabel: 'EN'      },
]

// ─── LanguageSwitcher ────────────────────────────────────────────────────────

function LanguageSwitcher() {
  const [menuOpen, setMenuOpen]      = useState(false)
  const [isPending, startTransition] = useTransition()
  const router   = useRouter()
  const pathname = usePathname()
  const locale   = useLocale() as Locale

  const currentLang = LANGUAGES.find(l => l.code === locale) ?? LANGUAGES[0]

  function switchLocale(next: Locale) {
    setMenuOpen(false)
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <div
      style={{ position: 'relative' }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setMenuOpen(false)
        }
      }}
    >
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        disabled={isPending}
        aria-haspopup="listbox"
        aria-expanded={menuOpen}
        style={{
          background:   'rgba(255,255,255,0.1)',
          border:       '1px solid rgba(255,255,255,0.2)',
          color:        isPending ? 'rgba(255,255,255,0.5)' : 'white',
          padding:      '3px 9px',
          fontSize:     '0.72rem',
          cursor:       isPending ? 'wait' : 'pointer',
          fontFamily:   'var(--sans)',
          display:      'flex',
          alignItems:   'center',
          gap:          '5px',
          borderRadius: '2px',
          transition:   'opacity 0.15s',
        }}
      >
        {currentLang.shortLabel}
        <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>▼</span>
      </button>

      {menuOpen && (
        <div
          role="listbox"
          style={{
            position:         'absolute',
            top:              'calc(100% + 4px)',
            insetInlineStart: 0,
            background:       'var(--navy)',
            border:           '1px solid rgba(255,255,255,0.2)',
            minWidth:         '160px',
            zIndex:           500,
            borderRadius:     '2px',
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={lang.code === locale}
              onClick={() => switchLocale(lang.code)}
              style={{
                display:      'block',
                width:        '100%',
                padding:      '9px 14px',
                fontSize:     '0.78rem',
                color:        lang.code === locale ? 'var(--yellow)' : 'rgba(255,255,255,0.85)',
                fontWeight:   lang.code === locale ? 700 : 400,
                background:   lang.code === locale ? 'rgba(255,255,255,0.06)' : 'none',
                border:       'none',
                cursor:       'pointer',
                textAlign:    'start',
                fontFamily:   'var(--sans)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {lang.label}
              {lang.code === locale && (
                <span style={{ marginInlineStart: '6px', fontSize: '0.65rem' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── SearchIcon ──────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

// ─── TopStrip ────────────────────────────────────────────────────────────────

export function TopStrip() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <div className="jiyan-top-strip">
        {/* Höger sida (RTL: visas till höger) — döljs på mobil */}
        <div
          className="jiyan-top-strip-left"
          style={{ display: 'flex', gap: '16px' }}
        >
          <a href="#">چاپی نێودەوڵەتی</a>
          <a href="#" className="jiyan-top-strip-newsletter">نووسراوەی ئەلیکترۆنی</a>
        </div>

        {/* Vänster sida (RTL: visas till vänster) */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {/* Sök-ikon — alltid synlig */}
          <button
            onClick={() => setSearchOpen(true)}
            aria-label="گەڕان"
            style={{
              background:  'none',
              border:      'none',
              color:       'rgba(255,255,255,0.85)',
              cursor:      'pointer',
              padding:     '3px 6px',
              display:     'flex',
              alignItems:  'center',
              transition:  'color 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'white'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'
            }}
          >
            <SearchIcon />
          </button>

          {/* Theme toggle — alltid synlig */}
          <ThemeToggle />

          {/* Dessa döljs på liten mobil via CSS */}
          <a href="#" className="jiyan-top-strip-support">پشتگیریمان بکە</a>
          <a href="#" className="jiyan-btn-subscribe">بەشداربە</a>

          {/* Språkväxlare — döljs på liten mobil */}
          <div className="jiyan-top-strip-lang">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Sökoverlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
