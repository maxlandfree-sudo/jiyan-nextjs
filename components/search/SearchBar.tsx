'use client'

// SearchBar — animerat sökfält med overlay
// Visar senaste sökningar + populära ämnen (tomt), filtrerar mockdata vid inmatning

import { useState, useEffect, useRef, useCallback } from 'react'

// ── Mockdata ─────────────────────────────────────────────────────────────────

const MOCK_ARTICLES = [
  { id: '1', title: 'سەرۆکانی ئەوروپا گەیشتنە ڕێکەوتنی ئاگربەست لە بروکسێل', category: 'ئەوروپا',    slug: 'eu-ceasefire-brussels' },
  { id: '2', title: 'ماکرۆن ڕووبەڕووی گەورەترین سەرکێشی پارلەمانیی دەبێتەوە',  category: 'فەرەنسا',    slug: 'macron-parliament-challenge' },
  { id: '3', title: 'بەستەکانی ئەڵپ گەیشتنە کەمترین ئاستی ٤٠ ساڵ',            category: 'ژینگە',      slug: 'alps-glaciers-40-year-low' },
  { id: '4', title: 'هێزەکانی ڕووسیا هێرشی نوێیان لە سەر خارکیڤ کردن',         category: 'ئۆکراینا',   slug: 'russia-kharkiv-attack' },
  { id: '5', title: 'فیلمی کوردی «سووتانی دار» لە جەشنوارەی کان',              category: 'کولتوور',    slug: 'burning-tree-cannes' },
  { id: '6', title: 'لیگی یەکەمی کوردستان: ئەنجامی هەفتەی ٣٢',                category: 'وەرزش',      slug: 'kurdistan-league-week32' },
  { id: '7', title: 'یاسای بازاری دیجیتاڵی یەکێتی ئەوروپا ئەپڵ بەرپرسدار دەکات', category: 'تێکنۆلۆجیا', slug: 'eu-dma-apple' },
  { id: '8', title: 'پیلی ئاوی دەریای مەدیتەرانە گەیشتە بەرزترین تۆماری خۆی',  category: 'ژینگە',      slug: 'mediterranean-temp-record' },
  { id: '9', title: 'ئەڵمانیا گەیشتە ڕێژەی ٦٢٪ی وزەی نوێبوونەوە',             category: 'ژینگە',      slug: 'germany-62-renewables' },
  { id: '10', title: 'کۆمپانیاکانی ئەوروپایی سەرنج دەکەنەوە بۆ داماڵینەوەی ئۆکراینا', category: 'ئابووری', slug: 'ukraine-reconstruction' },
]

const RECENT_SEARCHES = ['ئاگربەست', 'ئۆکراینا', 'کولتوور کوردی', 'وەرزش']

const POPULAR_TOPICS = [
  { label: 'ئەوروپا',    href: '/culture' },
  { label: 'ژینگە',      href: '/climate' },
  { label: 'وەرزش',      href: '/sport' },
  { label: 'کولتوور',    href: '/culture' },
  { label: 'بیردۆزی',    href: '/opinion' },
  { label: 'تێکنۆلۆجیا', href: '#' },
]

// ── Types ─────────────────────────────────────────────────────────────────────

interface Article {
  id:       string
  title:    string
  category: string
  slug:     string
}

interface SearchBarProps {
  isOpen:   boolean
  onClose:  () => void
}

// ── SearchBar ─────────────────────────────────────────────────────────────────

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query,   setQuery]   = useState('')
  const [results, setResults] = useState<Article[]>([])
  const inputRef              = useRef<HTMLInputElement>(null)

  // Fokusera inmatningsfältet när overlay öppnas
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
      setResults([])
    }
  }, [isOpen])

  // Tangentbord: Escape stänger
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Filtrering
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value
    setQuery(q)
    if (q.trim().length > 0) {
      setResults(
        MOCK_ARTICLES.filter(
          (a) =>
            a.title.includes(q) ||
            a.category.includes(q)
        ).slice(0, 6)
      )
    } else {
      setResults([])
    }
  }

  if (!isOpen) return null

  return (
    <div
      style={{
        padding:     '20px 16px',
        background:  'white',
        borderBottom:'1px solid #e8e8e8',
      }}
      dir="rtl"
    >
      {/* Sökfält */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <span style={{ fontSize: '1.1rem', color: '#888', flexShrink: 0 }}>🔍</span>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="بگەڕێ لە ژیان..."
          dir="rtl"
          style={{
            flex:         1,
            padding:      '10px 14px',
            border:       '2px solid #005689',
            borderRadius: '3px',
            fontSize:     '1rem',
            fontFamily:   'var(--sans)',
            outline:      'none',
            color:        '#222',
          }}
        />
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border:     'none',
            fontSize:   '1.2rem',
            cursor:     'pointer',
            color:      '#888',
            padding:    '4px 8px',
            flexShrink: 0,
          }}
          aria-label="داخستن"
        >
          ✕
        </button>
      </div>

      <div style={{ maxWidth: '720px', margin: '16px auto 0' }}>
        {/* Sökresultat */}
        {query.trim() && (
          <div>
            {results.length > 0 ? (
              <>
                <p style={{ fontSize: '0.72rem', color: '#888', fontFamily: 'var(--sans)', marginBottom: '8px' }}>
                  ئەنجامەکان ({results.length})
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {results.map((article) => (
                    <li key={article.id}>
                      <a
                        href={`/article/${article.slug}`}
                        onClick={onClose}
                        style={{
                          display:        'flex',
                          alignItems:     'center',
                          gap:            '12px',
                          padding:        '10px 12px',
                          background:     '#f8f9fa',
                          borderRadius:   '3px',
                          textDecoration: 'none',
                          transition:     'background 0.12s',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = '#eef4f8'
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = '#f8f9fa'
                        }}
                      >
                        <span
                          style={{
                            fontSize:     '0.65rem',
                            fontWeight:   700,
                            background:   '#005689',
                            color:        'white',
                            padding:      '2px 8px',
                            borderRadius: '2px',
                            fontFamily:   'var(--sans)',
                            whiteSpace:   'nowrap',
                            flexShrink:   0,
                          }}
                        >
                          {article.category}
                        </span>
                        <span
                          style={{
                            fontSize:   '0.875rem',
                            color:      '#222',
                            fontFamily: 'var(--serif)',
                            lineHeight: 1.4,
                          }}
                        >
                          {article.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p style={{ fontSize: '0.875rem', color: '#888', fontFamily: 'var(--sans)' }}>
                هیچ ئەنجامێک نەدۆزرایەوە بۆ «{query}»
              </p>
            )}
          </div>
        )}

        {/* Tom sökruta: visa senaste + populära */}
        {!query.trim() && (
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {/* Senaste sökningar */}
            <div>
              <p style={{ fontSize: '0.72rem', color: '#888', fontFamily: 'var(--sans)', marginBottom: '10px' }}>
                دوایین گەڕانەکانت
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {RECENT_SEARCHES.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setQuery(s)
                      setResults(
                        MOCK_ARTICLES.filter(
                          (a) => a.title.includes(s) || a.category.includes(s)
                        ).slice(0, 6)
                      )
                    }}
                    style={{
                      background:   '#f0f2f4',
                      border:       '1px solid #ddd',
                      borderRadius: '20px',
                      padding:      '5px 14px',
                      fontSize:     '0.8rem',
                      color:        '#444',
                      cursor:       'pointer',
                      fontFamily:   'var(--sans)',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Populära ämnen */}
            <div>
              <p style={{ fontSize: '0.72rem', color: '#888', fontFamily: 'var(--sans)', marginBottom: '10px' }}>
                بابەتە بەناوبانگەکان
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {POPULAR_TOPICS.map((t) => (
                  <a
                    key={t.label}
                    href={t.href}
                    onClick={onClose}
                    style={{
                      background:     '#005689',
                      color:          'white',
                      borderRadius:   '20px',
                      padding:        '5px 14px',
                      fontSize:       '0.8rem',
                      textDecoration: 'none',
                      fontFamily:     'var(--sans)',
                    }}
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
