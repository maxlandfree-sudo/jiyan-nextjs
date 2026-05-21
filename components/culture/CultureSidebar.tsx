// CultureSidebar — sidopanel specifik för kultursidan
// Speglar .sidebar i culture.html med:
//   - "Mest lästa" med culture-accent
//   - "Kommande evenemang" med film-badge-datum
//   - Nyhetsbrev-widget för kultur

'use client'

import Link from 'next/link'

interface MostViewedItem {
  id:       string
  headline: string
  slug:     string
}

interface ComingItem {
  date:  string     // t.ex. "١ ئەیپ"
  text:  string
  slug?: string
}

interface CultureSidebarProps {
  mostViewed?:  MostViewedItem[]
  comingItems?: ComingItem[]
}

// Kulturens gröna accentfärg
const CULTURE_GREEN = '#005f4e'
const FILM_RED      = '#8b0000'

export function CultureSidebar({
  mostViewed  = [],
  comingItems = [],
}: CultureSidebarProps) {
  return (
    <div style={{ paddingTop: '4px' }}>

      {/* Mest lästa — kultur */}
      {mostViewed.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <div
            className="jiyan-sidebar-widget-title"
            style={{ borderTopColor: CULTURE_GREEN }}
          >
            زۆر خوێندراوەکان
          </div>
          <ul style={{ listStyle: 'none' }}>
            {mostViewed.map((item, i) => (
              <li
                key={item.id}
                style={{
                  display:      'flex',
                  gap:          '12px',
                  padding:      '10px 0',
                  borderBottom: i < mostViewed.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems:   'flex-start',
                  cursor:       'pointer',
                }}
              >
                {/* Stort numeral */}
                <span
                  style={{
                    fontFamily: 'var(--serif)',
                    fontSize:   '1.6rem',
                    fontWeight: 700,
                    color:      'var(--border)',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth:   '28px',
                    direction:  'ltr',
                    textAlign:  'center',
                  }}
                >
                  {i + 1}
                </span>
                <Link
                  href={`/article/${item.slug}`}
                  style={{
                    fontFamily:     'var(--serif)',
                    fontSize:       '0.88rem',
                    fontWeight:     700,
                    lineHeight:     1.5,
                    color:          'inherit',
                    textDecoration: 'none',
                  }}
                >
                  {item.headline}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Kommande evenemang */}
      {comingItems.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <div
            style={{
              borderTop:    `3px solid ${FILM_RED}`,
              paddingTop:   '8px',
            }}
          >
            <div
              style={{
                fontFamily:   'var(--serif)',
                fontSize:     '0.95rem',
                fontWeight:   700,
                color:        FILM_RED,
                marginBottom: '12px',
              }}
            >
              بەرهەمی داهاتوو
            </div>
            {comingItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display:      'flex',
                  gap:          '10px',
                  padding:      '8px 0',
                  borderBottom: i < comingItems.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems:   'flex-start',
                  cursor:       'pointer',
                }}
              >
                {/* Datum-badge */}
                <span
                  style={{
                    fontSize:     '0.68rem',
                    fontWeight:   700,
                    color:        'white',
                    background:   FILM_RED,
                    padding:      '2px 5px',
                    borderRadius: '2px',
                    flexShrink:   0,
                    textAlign:    'center',
                    minWidth:     '40px',
                    direction:    'ltr',
                    lineHeight:   1.6,
                  }}
                >
                  {item.date}
                </span>
                <span
                  style={{
                    fontSize:   '0.8rem',
                    fontFamily: 'var(--serif)',
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Nyhetsbrev — kultur */}
      <div style={{ marginBottom: '24px' }}>
        <div className="jiyan-sidebar-widget-title">نووسراوەی ئەلیکترۆنی</div>
        <div className="jiyan-newsletter-widget">
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: CULTURE_GREEN, marginBottom: '6px' }}>
            بەخۆڕایی — هەر هەفتەیەک
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>
            ئەمەی کولتوورە
          </div>
          <div style={{ fontSize: '0.82rem', color: '#444', marginBottom: '12px', lineHeight: 1.6 }}>
            باشترین ڕیویوو، گفتوگۆ، و ئاماژەکانی هونەر و کولتوور — هەر یەکشەممێک بۆ ئیمەیڵەکەت.
          </div>
          <input
            type="email"
            placeholder="ئیمەیڵەکەت بنووسە"
            style={{
              width:       '100%',
              padding:     '8px 10px',
              border:      '1px solid var(--border)',
              fontSize:    '0.82rem',
              marginBottom: '8px',
              outline:     'none',
              direction:   'rtl',
              fontFamily:  'var(--sans)',
              textAlign:   'right',
            }}
          />
          <button
            style={{
              background:  CULTURE_GREEN,
              color:       'white',
              border:      'none',
              width:       '100%',
              padding:     '9px',
              fontSize:    '0.82rem',
              fontWeight:  700,
              cursor:      'pointer',
              fontFamily:  'var(--sans)',
            }}
          >
            بەخۆڕایی تۆمار بکە
          </button>
        </div>
      </div>

      {/* Annonsplatshållare */}
      <div style={{ marginBottom: '24px' }}>
        <div
          style={{
            background:     'var(--off)',
            border:         '1px dashed var(--border)',
            height:         '250px',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            color:          'var(--muted)',
            fontSize:       '0.8rem',
          }}
        >
          ڕیکلام
        </div>
      </div>

    </div>
  )
}
