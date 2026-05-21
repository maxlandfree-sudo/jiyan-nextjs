// CultureHero — hjältesektionen för kultursidan
// Speglar .hero-section med kultur-accentfärg (#005f4e) istället för blå
// Stöder stjärnbetyg på kicker-nivå

import Image from 'next/image'
import Link from 'next/link'

export interface CultureHeroArticle {
  id:          string
  headline:    string
  standfirst?: string
  kicker:      string       // t.ex. "★★★★★ — فیلم"
  kickerType?: 'film' | 'music' | 'books' | 'art' | 'theatre' | 'culture'
  imageUrl:    string
  author:      string
  publishedAt: string
  slug:        string
}

export interface CultureSideArticle {
  id:          string
  headline:    string
  kicker:      string
  kickerType?: 'film' | 'music' | 'books' | 'art' | 'theatre' | 'culture'
  imageUrl?:   string
  author:      string
  publishedAt: string
  slug:        string
}

// Färgmappning för kulturens underkategorier
const KICKER_COLORS: Record<string, string> = {
  film:    '#8b0000',
  music:   '#6b3fa0',
  books:   '#c05800',
  art:     '#006064',
  theatre: '#4a0080',
  culture: '#005f4e',
}

function kickerColor(type?: string): string {
  return type ? (KICKER_COLORS[type] ?? '#005f4e') : '#005f4e'
}

interface CultureHeroProps {
  heroArticle:  CultureHeroArticle
  sideArticles: CultureSideArticle[]
}

export function CultureHero({ heroArticle, sideArticles }: CultureHeroProps) {
  return (
    <div style={{ borderTop: '3px solid #005f4e', paddingTop: '4px' }}>
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: '2fr 1fr',
          gap:                 '20px',
          paddingBottom:       '20px',
          borderBottom:        '1px solid var(--border)',
          marginBottom:        '20px',
        }}
      >
        {/* Stor hjälteartikel */}
        <Link
          href={`/article/${heroArticle.slug}`}
          style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          <div style={{ position: 'relative', width: '100%', height: '360px', marginBottom: '10px' }}>
            <Image src={heroArticle.imageUrl} alt={heroArticle.headline} fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ color: kickerColor(heroArticle.kickerType), fontSize: '0.75rem', fontWeight: 700, marginBottom: '5px' }}>
            {heroArticle.kicker}
          </div>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.65rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '8px' }}>
            {heroArticle.headline}
          </h2>
          {heroArticle.standfirst && (
            <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: '#333', lineHeight: 1.7, marginBottom: '8px' }}>
              {heroArticle.standfirst}
            </p>
          )}
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
            <span style={{ color: '#005f4e', fontWeight: 600 }}>{heroArticle.author}</span>
            <span>·</span>
            <span>{heroArticle.publishedAt}</span>
          </div>
        </Link>

        {/* Sidostapel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {sideArticles.map((article, i) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              style={{
                display:        'block',
                borderTop:      i === 0 ? 'none' : '1px solid var(--border)',
                paddingTop:     i === 0 ? 0 : '12px',
                textDecoration: 'none',
                color:          'inherit',
                cursor:         'pointer',
              }}
            >
              {article.imageUrl && (
                <div style={{ position: 'relative', width: '100%', height: '120px', marginBottom: '8px' }}>
                  <Image src={article.imageUrl} alt={article.headline} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ color: kickerColor(article.kickerType), fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
                {article.kicker}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, marginBottom: '6px' }}>
                {article.headline}
              </h3>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                <span style={{ color: '#005f4e', fontWeight: 600 }}>{article.author}</span>
                <span>·</span>
                <span>{article.publishedAt}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
