'use client'

// Footer — förbättrad sidfot med fullständig länkstruktur, sociala ikoner och språkväxlare
// Speglar Guardian-footer med Jiyan-branding

import Link            from 'next/link'
import { useState }    from 'react'

// ─── Länkkolumner ────────────────────────────────────────────────────────────

const FOOTER_COLUMNS = [
  {
    title: 'هەواڵ',
    links: [
      { label: 'ئەوروپا',     href: '/europe' },
      { label: 'بریتانیا',   href: '/uk' },
      { label: 'ئەمریکا',    href: '/us' },
      { label: 'جیهان',       href: '/world' },
      { label: 'زانست',       href: '/science' },
      { label: 'تێکنۆلۆجیا', href: '/tech' },
      { label: 'ژینگە',       href: '/environment' },
    ],
  },
  {
    title: 'ڕای کەسی',
    links: [
      { label: 'ڕای ژیان',         href: '/opinion' },
      { label: 'ستوونییەکان',      href: '/opinion' },
      { label: 'سەرنووسەرییەکان', href: '/opinion' },
      { label: 'نامەکان',          href: '/opinion' },
      { label: 'مامرگەکان',        href: '/opinion' },
    ],
  },
  {
    title: 'وەرزش',
    links: [
      { label: 'تۆپی پێ',          href: '/sport' },
      { label: 'کریکێت',           href: '/sport' },
      { label: 'ڕووگبی یووینیۆن',  href: '/sport' },
      { label: 'تێنیس',            href: '/sport' },
      { label: 'دووچەرخەسواری',    href: '/sport' },
      { label: 'F1',                href: '/sport' },
    ],
  },
  {
    title: 'کولتوور و ژیان',
    links: [
      { label: 'کولتوور',   href: '/culture' },
      { label: 'ژیانستایل', href: '/lifestyle' },
      { label: 'ڤیدیۆ',     href: '/video' },
      { label: 'پازڵ',      href: '/puzzles' },
      { label: 'نیوزلێتەر', href: '/newsletter' },
      { label: 'ڕادیۆ',    href: '/podcast' },
    ],
  },
  {
    title: 'پشتگیری',
    links: [
      { label: 'پشتگیری ژیان',        href: '/support' },
      { label: 'بەشداربوون',          href: '/subscribe' },
      { label: 'چوونەژوورەوە',        href: '/signin' },
      { label: 'دەربارەمان',          href: '/about' },
      { label: 'پەیوەندیمان پێوەبکە', href: '/contact' },
      { label: 'کارکردن لەگەڵمان',   href: '/careers' },
      { label: 'ڕیکلام',              href: '/advertise' },
    ],
  },
]

// ─── Språk ───────────────────────────────────────────────────────────────────

type Locale = 'ckb' | 'fa' | 'kmr' | 'en'
const LANGUAGES: { code: Locale; label: string }[] = [
  { code: 'ckb', label: 'کوردی سۆرانی' },
  { code: 'fa',  label: 'فارسی'         },
  { code: 'kmr', label: 'کورمانجی'      },
  { code: 'en',  label: 'English'        },
]

// ─── Sociala ikoner (SVG inline) ─────────────────────────────────────────────

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export function Footer() {
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const [currentLang, setCurrentLang]  = useState<Locale>('ckb')

  return (
    <footer className="jiyan-footer">
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>

        {/* Logotyp */}
        <div className="jiyan-footer-logo">ژیان</div>

        {/* Sociala medier + Språkväxlare */}
        <div style={{
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          flexWrap:       'wrap',
          gap:            '16px',
          paddingBottom:  '20px',
          borderBottom:   '1px solid rgba(255,255,255,0.12)',
          marginBottom:   '20px',
        }}>
          {/* Sociala ikoner */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginLeft: '4px' }}>
              شوێنمان بکەوە:
            </span>
            {[
              { href: 'https://twitter.com', label: 'Twitter/X',  Icon: TwitterIcon   },
              { href: 'https://instagram.com', label: 'Instagram', Icon: InstagramIcon },
              { href: 'https://youtube.com',  label: 'YouTube',   Icon: YoutubeIcon   },
              { href: 'https://t.me',         label: 'Telegram',  Icon: TelegramIcon  },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display:        'flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  width:          '34px',
                  height:         '34px',
                  borderRadius:   '50%',
                  background:     'rgba(255,255,255,0.08)',
                  color:          'rgba(255,255,255,0.7)',
                  transition:     'background 0.15s, color 0.15s',
                  border:         '1px solid rgba(255,255,255,0.12)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(255,255,255,0.18)'
                  el.style.color      = 'white'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = 'rgba(255,255,255,0.08)'
                  el.style.color      = 'rgba(255,255,255,0.7)'
                }}
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Språkväxlare */}
          <div
            style={{ position: 'relative' }}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setLangMenuOpen(false)
            }}
          >
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              style={{
                background:   'rgba(255,255,255,0.08)',
                border:       '1px solid rgba(255,255,255,0.2)',
                color:        'rgba(255,255,255,0.85)',
                padding:      '6px 14px',
                fontSize:     '0.78rem',
                cursor:       'pointer',
                fontFamily:   'var(--sans)',
                display:      'flex',
                alignItems:   'center',
                gap:          '6px',
                borderRadius: '2px',
              }}
            >
              <span>{LANGUAGES.find(l => l.code === currentLang)?.label}</span>
              <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>▼</span>
            </button>

            {langMenuOpen && (
              <div
                role="listbox"
                style={{
                  position:         'absolute',
                  bottom:           'calc(100% + 4px)',
                  insetInlineStart: 0,
                  background:       'var(--navy)',
                  border:           '1px solid rgba(255,255,255,0.2)',
                  minWidth:         '180px',
                  zIndex:           500,
                  borderRadius:     '2px',
                }}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={lang.code === currentLang}
                    onClick={() => { setCurrentLang(lang.code); setLangMenuOpen(false) }}
                    style={{
                      display:    'block',
                      width:      '100%',
                      padding:    '9px 14px',
                      fontSize:   '0.8rem',
                      color:      lang.code === currentLang ? 'var(--yellow)' : 'rgba(255,255,255,0.85)',
                      fontWeight: lang.code === currentLang ? 700 : 400,
                      background: lang.code === currentLang ? 'rgba(255,255,255,0.06)' : 'none',
                      border:     'none',
                      cursor:     'pointer',
                      textAlign:  'start',
                      fontFamily: 'var(--sans)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {lang.label}
                    {lang.code === currentLang && (
                      <span style={{ marginInlineStart: '6px', fontSize: '0.65rem' }}>✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Länkkolumner */}
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap:                 '16px',
          paddingBottom:       '24px',
          borderBottom:        '1px solid rgba(255,255,255,0.12)',
          marginBottom:        '16px',
        }}>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <div style={{ color: 'white', fontSize: '0.82rem', fontWeight: 700, marginBottom: '10px' }}>
                {col.title}
              </div>
              {col.links.map((link) => (
                <Link
                  key={`${col.title}-${link.label}`}
                  href={link.href}
                  style={{ display: 'block', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', marginBottom: '6px' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Juridisk rad */}
        <div style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          flexWrap:       'wrap',
          gap:            '12px',
        }}>
          <div style={{ fontSize: '0.72rem' }}>
            <Link href="/terms"         style={{ color: 'rgba(255,255,255,0.55)', marginLeft: '12px' }}>مەرج و مەرجەکان</Link>
            <Link href="/privacy"       style={{ color: 'rgba(255,255,255,0.55)', marginLeft: '12px' }}>سیاسەتی تایبەتی</Link>
            <Link href="/cookies"       style={{ color: 'rgba(255,255,255,0.55)', marginLeft: '12px' }}>سیاسەتی کووکی</Link>
            <Link href="/securedrop"    style={{ color: 'rgba(255,255,255,0.55)', marginLeft: '12px' }}>Securedrop</Link>
            <Link href="/accessibility" style={{ color: 'rgba(255,255,255,0.55)', marginLeft: '12px' }}>دەستگەیشتن</Link>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
            © ٢٠٢٥ ژیان — <span style={{ color: 'white', fontWeight: 700 }}>هەموو مافەکان پارێزراون</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
