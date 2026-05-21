'use client'
export const dynamic = 'force-dynamic'

// نووسراوەی ئەلیکترۆنی — Nyhetsbrevssida
// Sektioner: hero, kort-grid, senaste utgåvor, CTA

import { useState } from 'react'
import { NewsletterHero } from '@/components/newsletter/NewsletterHero'
import { NewsletterCard } from '@/components/newsletter/NewsletterCard'
import { TopStrip } from '@/components/layout/TopStrip'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

// ── Data ────────────────────────────────────────────────────────────────────

const NEWSLETTERS = [
  {
    id:          'culture',
    name:        'ڕووداوی کولتووری',
    description: 'باشترین ئەنجامدانی هونەری، فیلمی کوردی، موزیک و پیشانگا هەر هەفتەیێک — هەڵبژاردەکراو لە لایەن ڕۆژنامەنووسانی کولتوورمان.',
    frequency:   'هەفتانە',
    accentColor: '#005f4e',
    subscribers: '٨٤٠٠ خوێنەر',
    category:    'کولتوور',
  },
  {
    id:          'opinion',
    name:        'نووسینی بیردۆزانەی ژیان',
    description: 'نووسینی تازەی ستوونیستەکانمان دەرباری سیاسەت، ژمێرایەتی و کۆمەڵایەتی — هەر ئەمڕۆ بۆ ئیمەیڵەکەت.',
    frequency:   'ڕۆژانە',
    accentColor: '#1a3a5c',
    subscribers: '١٢٥٠٠ خوێنەر',
    category:    'بیردۆزی',
  },
  {
    id:          'sport',
    name:        'گەلی وەرزش',
    description: 'ئەنجامی یاریەکان، شیکارییەکانی تاکتیک، چەند پێشبینی و مەوجی وەرزش لە کوردستان و جیهان.',
    frequency:   'هەفتانە',
    accentColor: '#003580',
    subscribers: '١٩٢٠٠ خوێنەر',
    category:    'وەرزش',
  },
  {
    id:          'climate',
    name:        'زەمین و ژینگە',
    description: 'توێژینەوە، داتا و ڕاپۆرتی تایبەت دەربارەی گەرمابوونی زەوی و پێشبینییەکانی ئاب و هەوا بۆ هەرێمی کوردستان.',
    frequency:   'هەفتانە',
    accentColor: '#2d6a4f',
    subscribers: '٦٣٠٠ خوێنەر',
    category:    'ژینگە',
  },
  {
    id:          'lifestyle',
    name:        'ژیانی ژیان',
    description: 'خواردن، گەشت، تەندروستی و ڕووداوی کۆمەڵایەتی — ئامادەکراوی نووسەرانی پیشەیی بۆ ژیانی ئەمرۆیی.',
    frequency:   'هەفتانە',
    accentColor: '#7b2d8b',
    subscribers: '٧١٠٠ خوێنەر',
    category:    'ژیانستایل',
  },
  {
    id:          'breaking',
    name:        'ئاگاداری داهاتوو',
    description: 'بە ئەوەی ئاگادار بە — تازەترین هەواڵەکانی شکستیهێنەر و ئەو بابەتانەی کە ئیمرۆ گرینگن بۆ ئیمەیڵەکەت دێن.',
    frequency:   'ڕۆژانە',
    accentColor: '#c70000',
    subscribers: '٢٣٨٠٠ خوێنەر',
    category:    'داهاتوو',
  },
]

const RECENT_ISSUES = [
  {
    id:    'r1',
    date:  '١٩ی ئایار ٢٠٢٦',
    title: 'نووسراوەی کولتووری — ژمارە ٤٧',
    desc:  'فیلمی کوردی لە کان، پیشانگای تازەی ئەربیل و موزیکی نوێی ژیانی',
    tag:   'کولتوور',
    color: '#005f4e',
  },
  {
    id:    'r2',
    date:  '١٨ی ئایار ٢٠٢٦',
    title: 'ئاگاداری داهاتوو — هەفتەی بەرپرسایەتی',
    desc:  'هەموو ئەو بابەتانەی کە مانەوە لە ئیمرۆی هەفتەی بڕیارە سیاسییەکان',
    tag:   'داهاتوو',
    color: '#c70000',
  },
  {
    id:    'r3',
    date:  '١٧ی ئایار ٢٠٢٦',
    title: 'گەلی وەرزش — ژمارە ١١٢',
    desc:  'شیکاری لیگی کوردستان، ئەنجامی چەمپیۆنز لیگ و پێشبینی',
    tag:   'وەرزش',
    color: '#003580',
  },
]

// ── CTASection (client component) ───────────────────────────────────────────

function CTASection() {
  const [email,     setEmail]     = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setError('تکایە ئیمەیڵێکی دروست بنووسە')
      return
    }
    setLoading(true)
    setError('')
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section
      dir="rtl"
      style={{
        background:  'linear-gradient(135deg, #041f4a 0%, #1a3a5c 100%)',
        padding:     '64px 24px',
        textAlign:   'center',
        marginTop:   '64px',
      }}
    >
      <div style={{ maxWidth: '560px', margin: '0 auto' }}>
        <h2
          style={{
            color:      'white',
            fontSize:   '1.9rem',
            fontWeight: 700,
            marginBottom:'12px',
            fontFamily: 'var(--serif)',
          }}
        >
          ئیمرۆ بەشداربە
        </h2>
        <p
          style={{
            color:       'rgba(255,255,255,0.72)',
            fontSize:    '0.95rem',
            lineHeight:  1.7,
            marginBottom:'32px',
            fontFamily:  'var(--sans)',
          }}
        >
          بە بەشداری خۆڕایی، دەستت دەگات بە هەموو نووسراوەکانی ژیان.
          دەتوانیت هەر کاتێک ببڕیتەوە.
        </p>

        {submitted ? (
          <div
            style={{
              background:   'rgba(255,255,255,0.1)',
              border:       '1px solid rgba(255,255,255,0.3)',
              borderRadius: '4px',
              padding:      '18px 24px',
              color:        'white',
              fontSize:     '0.95rem',
              fontFamily:   'var(--sans)',
            }}
          >
            سوپاس! پشتڕاستکردنەوەی بەشداری بۆ ئیمەیڵەکەت نێردرا ✓
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display:      'flex',
                gap:          '10px',
                justifyContent:'center',
                flexWrap:     'wrap',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ئیمەیڵەکەت..."
                dir="rtl"
                style={{
                  padding:      '12px 18px',
                  border:       '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '3px',
                  background:   'rgba(255,255,255,0.1)',
                  color:        'white',
                  fontSize:     '0.9rem',
                  fontFamily:   'var(--sans)',
                  outline:      'none',
                  minWidth:     '280px',
                  flex:         1,
                  maxWidth:     '360px',
                }}
              />
              <button
                type="submit"
                disabled={loading}
                style={{
                  background:   loading ? '#888' : '#f5c518',
                  color:        '#041f4a',
                  border:       'none',
                  padding:      '12px 28px',
                  borderRadius: '3px',
                  fontSize:     '0.9rem',
                  fontWeight:   700,
                  cursor:       loading ? 'wait' : 'pointer',
                  fontFamily:   'var(--sans)',
                  whiteSpace:   'nowrap',
                  transition:   'background 0.15s',
                }}
              >
                {loading ? '...' : 'بەشداری خۆڕایی'}
              </button>
            </div>
            {error && (
              <p style={{ color: '#ffb3b3', fontSize: '0.78rem', marginTop: '8px', fontFamily: 'var(--sans)' }}>
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}

// ── Sidhuvud ─────────────────────────────────────────────────────────────────

export default function NewsletterPage() {
  return (
    <>
      <TopStrip />

      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '12px 0 0' }}>
            <div>
              <a href="/" className="jiyan-masthead-logo">ژیان</a>
              <div className="jiyan-masthead-date">دووشەممە، ٢١ی ئایار ٢٠٢٦</div>
            </div>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Hero */}
      <NewsletterHero />

      <main>
        {/* ── Newsletter-grid ─────────────────────────────────────────────── */}
        <section
          dir="rtl"
          style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '56px 24px 0' }}
        >
          <h2
            style={{
              fontSize:     '1.5rem',
              fontWeight:   700,
              color:        '#041f4a',
              marginBottom: '8px',
              fontFamily:   'var(--serif)',
            }}
          >
            هەموو نووسراوەکانمان
          </h2>
          <p
            style={{
              color:        '#666',
              fontSize:     '0.875rem',
              marginBottom: '32px',
              fontFamily:   'var(--sans)',
            }}
          >
            بەشداری یەک یان چەند نووسراوەیەک بە. هەموو خۆڕایین.
          </p>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap:                 '24px',
            }}
          >
            {NEWSLETTERS.map((nl) => (
              <NewsletterCard key={nl.id} {...nl} />
            ))}
          </div>
        </section>

        {/* ── Senaste utgåvor ──────────────────────────────────────────────── */}
        <section
          dir="rtl"
          style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '64px 24px 0' }}
        >
          <div
            style={{
              display:        'flex',
              justifyContent: 'space-between',
              alignItems:     'center',
              marginBottom:   '24px',
              flexWrap:       'wrap',
              gap:            '12px',
            }}
          >
            <h2
              style={{
                fontSize:   '1.35rem',
                fontWeight: 700,
                color:      '#041f4a',
                fontFamily: 'var(--serif)',
                margin:     0,
              }}
            >
              دوایین ژمارەکان
            </h2>
            <a
              href="/newsletter/archive"
              style={{
                fontSize:       '0.82rem',
                color:          '#005689',
                fontFamily:     'var(--sans)',
                textDecoration: 'none',
                borderBottom:   '1px solid #005689',
              }}
            >
              ئەرشیفی هەموو ژمارەکان ←
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {RECENT_ISSUES.map((issue) => (
              <a
                key={issue.id}
                href={`/newsletter/${issue.id}`}
                style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '16px',
                  padding:      '18px 20px',
                  background:   'white',
                  border:       '1px solid #eee',
                  borderRight:  `4px solid ${issue.color}`,
                  textDecoration:'none',
                  transition:   'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#f8f9fa'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = 'white'
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  <div
                    style={{
                      fontSize:     '0.95rem',
                      fontWeight:   700,
                      color:        '#041f4a',
                      fontFamily:   'var(--serif)',
                      marginBottom: '4px',
                    }}
                  >
                    {issue.title}
                  </div>
                  <div
                    style={{
                      fontSize:   '0.81rem',
                      color:      '#666',
                      fontFamily: 'var(--sans)',
                    }}
                  >
                    {issue.desc}
                  </div>
                </div>
                <div
                  style={{
                    fontSize:   '0.72rem',
                    color:      '#999',
                    fontFamily: 'var(--sans)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {issue.date}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
