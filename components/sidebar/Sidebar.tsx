// Sidebar — höger sidopanel med väder, mest sedda och nyhetsbrev
// Speglar .sidebar i index.html

import Link from 'next/link'
import { type ArticleCardData } from '../articles/ArticleCard'

// Väderstäder — statisk data (kan hämtas från API i produktion)
const WEATHER_CITIES = [
  { name: 'پاریس',  temp: '14°C', desc: 'هەڵگرتووی بەشی' },
  { name: 'بەرلین', temp: '9°C',  desc: 'ئاسمانی داپۆشراو' },
  { name: 'مادرید', temp: '21°C', desc: 'خۆرئاوەدان' },
  { name: 'ڕۆم',   temp: '18°C', desc: 'خۆرئاوەدان' },
  { name: 'ڤارشۆ', temp: '6°C',  desc: 'بارانی سووک' },
  { name: 'ئەتێن', temp: '24°C', desc: 'ئاسمانی ڕوون' },
]

interface SidebarProps {
  mostViewedArticles?: ArticleCardData[]
  locale?:             'ckb' | 'fa' | 'en'
}

export function Sidebar({ mostViewedArticles = [], locale = 'ckb' }: SidebarProps) {
  return (
    <div style={{ paddingTop: '4px' }}>

      {/* Väderwidget */}
      <div style={{ marginBottom: '24px' }}>
        <div className="jiyan-sidebar-widget-title">کەشوهەوای ئەوروپا</div>
        <div style={{ background: 'var(--navy)', color: 'white', padding: '12px', borderRadius: '2px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, marginBottom: '10px', opacity: 0.7 }}>
            بارودۆخی ئەمڕۆ
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {WEATHER_CITIES.map((city) => (
              <div key={city.name}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700 }}>{city.name}</div>
                <div style={{ fontSize: '1rem', fontWeight: 300, fontFamily: 'var(--serif)', direction: 'ltr', textAlign: 'right' }}>
                  {city.temp}
                </div>
                <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>{city.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mest sedda */}
      {mostViewedArticles.length > 0 && (
        <div style={{ marginBottom: '24px' }}>
          <div className="jiyan-sidebar-widget-title blue-top">زۆر بینراوەکان</div>
          <ul style={{ listStyle: 'none' }}>
            {mostViewedArticles.map((article, i) => {
              const headline = article.headline[locale] || article.headline.ckb || article.headline.en || ''
              return (
                <li
                  key={article.id}
                  style={{
                    display:      'flex',
                    gap:          '12px',
                    padding:      '10px 0',
                    borderBottom: i < mostViewedArticles.length - 1 ? '1px solid var(--border)' : 'none',
                    alignItems:   'flex-start',
                  }}
                >
                  {/* Stor siffra */}
                  <span style={{
                    fontFamily: 'var(--serif)',
                    fontSize:   '1.6rem',
                    fontWeight: 700,
                    color:      'var(--border)',
                    lineHeight: 1,
                    flexShrink: 0,
                    minWidth:   '28px',
                    direction:  'ltr',
                    textAlign:  'center',
                  }}>
                    {i + 1}
                  </span>
                  <Link
                    href={`/article/${article.slug.current}`}
                    style={{
                      fontFamily:     'var(--serif)',
                      fontSize:       '0.88rem',
                      fontWeight:     700,
                      lineHeight:     1.5,
                      color:          'inherit',
                      textDecoration: 'none',
                    }}
                  >
                    {headline}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {/* Nyhetsbrev */}
      <div style={{ marginBottom: '24px' }}>
        <div className="jiyan-sidebar-widget-title">نووسراوەی ئەلیکترۆنی</div>
        <div className="jiyan-newsletter-widget">
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--blue)', marginBottom: '6px' }}>
            نووسراوەی ئەلیکترۆنی بەخۆڕایی
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontWeight: 700, fontSize: '1rem', marginBottom: '6px' }}>
            ئەمە ئەوروپایە
          </div>
          <div style={{ fontSize: '0.82rem', color: '#444', marginBottom: '12px', lineHeight: 1.6 }}>
            گرنگترین چیرۆکەکان لە سەرانسەری قارەکە، هەر بەیانی کاریمانی بۆ سندوقی ئیمەیڵەکەت دەنێرین.
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
          <button style={{
            background:  'var(--blue)',
            color:       'white',
            border:      'none',
            width:       '100%',
            padding:     '9px',
            fontSize:    '0.82rem',
            fontWeight:  700,
            cursor:      'pointer',
            fontFamily:  'var(--sans)',
          }}>
            بەخۆڕایی تۆمار بکە
          </button>
        </div>
      </div>

      {/* Annonsplatshållare */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{
          background:  'var(--off)',
          border:      '1px dashed var(--border)',
          height:      '250px',
          display:     'flex',
          alignItems:  'center',
          justifyContent: 'center',
          color:       'var(--muted)',
          fontSize:    '0.8rem',
        }}>
          ڕیکلام
        </div>
      </div>

    </div>
  )
}
