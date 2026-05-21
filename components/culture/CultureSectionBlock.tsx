// CultureSectionBlock — sektionsblock för kultursidan
// Stöder kultur-specifika accentfärger (film, music, books, art, theatre)
// Omsluter de befintliga ArticleCard-varianterna

import Image from 'next/image'
import Link from 'next/link'

// Typ-definitioner för kulturartiklar (med stöd för direkt strängtext)
export interface CultureArticleData {
  id:          string
  headline:    string
  kicker:      string
  kickerType?: 'film' | 'music' | 'books' | 'art' | 'theatre' | 'culture'
  imageUrl?:   string
  author:      string
  publishedAt: string
  slug:        string
}

// Färgpalett för kulturens underkategorier (speglar culture.html CSS-variabler)
const CATEGORY_COLORS: Record<string, string> = {
  film:    '#8b0000',
  music:   '#6b3fa0',
  books:   '#c05800',
  art:     '#006064',
  theatre: '#4a0080',
  culture: '#005f4e',
}

function accentColor(type?: string): string {
  return type ? (CATEGORY_COLORS[type] ?? '#005f4e') : '#005f4e'
}

interface CultureSectionBlockProps {
  title:      string
  category:   'film' | 'music' | 'books' | 'art' | 'theatre' | 'culture' | 'tv'
  articles:   CultureArticleData[]
  layout:     'card-row' | 'two-col' | 'three-col' | 'list'
}

// Kort-rad med fyra kolumner (film-sektionen)
function CardRow({ articles, category }: { articles: CultureArticleData[], category: string }) {
  const color = accentColor(category)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px 20px' }}>
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/article/${article.slug}`}
          style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          {article.imageUrl && (
            <div style={{ position: 'relative', width: '100%', height: '140px', marginBottom: '8px' }}>
              <Image src={article.imageUrl} alt={article.headline} fill style={{ objectFit: 'cover' }} />
            </div>
          )}
          <div style={{ color, fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
            {article.kicker}
          </div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.5, marginBottom: '6px' }}>
            {article.headline}
          </h3>
          <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
            <span style={{ color, fontWeight: 600 }}>{article.author}</span>
            <span style={{ marginRight: '4px', marginLeft: '4px' }}>·</span>
            <span>{article.publishedAt}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

// Listrad med bild till höger (RTL-layout)
function ListItem({ article, category }: { article: CultureArticleData, category: string }) {
  const color = accentColor(category)
  return (
    <Link
      href={`/article/${article.slug}`}
      style={{
        display:        'flex',
        gap:            '12px',
        padding:        '12px 0',
        borderBottom:   '1px solid var(--border)',
        cursor:         'pointer',
        textDecoration: 'none',
        color:          'inherit',
      }}
    >
      {article.imageUrl && (
        <div style={{ position: 'relative', width: '100px', height: '68px', flexShrink: 0 }}>
          <Image src={article.imageUrl} alt={article.headline} fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div>
        <div style={{ color, fontSize: '0.75rem', fontWeight: 700, marginBottom: '3px' }}>
          {article.kicker}
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.45 }}>
          {article.headline}
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px', display: 'flex', gap: '6px' }}>
          <span style={{ color, fontWeight: 600 }}>{article.author}</span>
          <span>·</span>
          <span>{article.publishedAt}</span>
        </div>
      </div>
    </Link>
  )
}

export function CultureSectionBlock({
  title,
  category,
  articles,
  layout,
}: CultureSectionBlockProps) {
  const tvCategory = category === 'tv' ? 'culture' : category
  const color      = accentColor(tvCategory)

  return (
    <div style={{ borderTop: `3px solid ${color}`, paddingTop: '6px', marginBottom: '24px' }}>
      {/* Sektionstitel */}
      <div
        style={{
          fontFamily:   'var(--serif)',
          fontSize:     '1.15rem',
          fontWeight:   700,
          color,
          marginBottom: '14px',
        }}
      >
        {title}
      </div>

      {/* Kort-rad med 4 kolumner */}
      {layout === 'card-row' && (
        <CardRow articles={articles} category={tvCategory} />
      )}

      {/* Två-kolumnslayout (listform) */}
      {layout === 'two-col' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            {articles.slice(0, Math.ceil(articles.length / 2)).map((a) => (
              <ListItem key={a.id} article={a} category={tvCategory} />
            ))}
          </div>
          <div>
            {articles.slice(Math.ceil(articles.length / 2)).map((a) => (
              <ListItem key={a.id} article={a} category={tvCategory} />
            ))}
          </div>
        </div>
      )}

      {/* Tre-kolumnslayout */}
      {layout === 'three-col' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          {articles.map((a) => (
            <Link
              key={a.id}
              href={`/article/${a.slug}`}
              style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              {a.imageUrl && (
                <div style={{ position: 'relative', width: '100%', height: '140px', marginBottom: '8px' }}>
                  <Image src={a.imageUrl} alt={a.headline} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ color: accentColor(a.kickerType), fontSize: '0.75rem', fontWeight: 700, marginBottom: '4px' }}>
                {a.kicker}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.45, marginBottom: '6px' }}>
                {a.headline}
              </h3>
            </Link>
          ))}
        </div>
      )}

      {/* Standardlista */}
      {layout === 'list' && (
        <div>
          {articles.map((a) => (
            <ListItem key={a.id} article={a} category={tvCategory} />
          ))}
        </div>
      )}
    </div>
  )
}
