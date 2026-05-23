'use client'

import Link from 'next/link'
import type { ArticleCardData } from '@/components/articles/ArticleCard'

interface NewsBannerGridProps {
  articles: ArticleCardData[]
}

function getBannerBg(kickerColor?: 'blue' | 'red' | 'navy'): string {
  if (kickerColor === 'red')  return '#c70000'
  if (kickerColor === 'navy') return '#041f4a'
  return '#005689'
}

export function NewsBannerGrid({ articles }: NewsBannerGridProps) {
  if (articles.length === 0) return null

  const [featured, ...rest] = articles

  return (
    <div style={{ direction: 'rtl' }}>
      <Link
        href={`/article/${featured.slug.current}`}
        style={{
          display: 'block',
          backgroundColor: '#041f4a',
          color: '#fff',
          padding: '32px',
          textDecoration: 'none',
          borderRadius: 0,
          transition: 'filter 0.15s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(1.12)')}
        onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
      >
        {featured.kicker && (
          <div style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'rgba(255,255,255,0.75)',
            marginBottom: '10px',
          }}>
            {featured.kicker.ckb || featured.kicker.fa || featured.kicker.en}
          </div>
        )}
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.8rem',
          fontWeight: 700,
          lineHeight: 1.25,
          margin: '0 0 12px',
          color: '#fff',
        }}>
          {featured.headline.ckb || featured.headline.fa || featured.headline.en || ''}
        </h2>
        {featured.standfirst && (
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.5,
            color: 'rgba(255,255,255,0.85)',
            margin: '0 0 16px',
          }}>
            {featured.standfirst.ckb || featured.standfirst.fa || featured.standfirst.en}
          </p>
        )}
        {(featured.author?.name || featured.publishedAt) && (
          <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)' }}>
            {featured.author?.name && <span>{featured.author.name}</span>}
            {featured.author?.name && featured.publishedAt && <span style={{ margin: '0 6px' }}>·</span>}
            {featured.publishedAt && <span>{featured.publishedAt}</span>}
          </div>
        )}
      </Link>

      {rest.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '3px',
          marginTop: '3px',
        }}>
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/article/${article.slug.current}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: getBannerBg(article.kickerColor),
                color: '#fff',
                padding: '24px',
                minHeight: '160px',
                textDecoration: 'none',
                borderRadius: 0,
                transition: 'filter 0.15s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.filter = 'brightness(1.12)')}
              onMouseOut={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
            >
              <div>
                {article.kicker && (
                  <div style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'rgba(255,255,255,0.75)',
                    marginBottom: '8px',
                  }}>
                    {article.kicker.ckb || article.kicker.fa || article.kicker.en}
                  </div>
                )}
                <h3 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  margin: 0,
                  color: '#fff',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {article.headline.ckb || article.headline.fa || article.headline.en || ''}
                </h3>
              </div>
              {(article.author?.name || article.publishedAt) && (
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', marginTop: '12px' }}>
                  {article.author?.name && <span>{article.author.name}</span>}
                  {article.author?.name && article.publishedAt && <span style={{ margin: '0 6px' }}>·</span>}
                  {article.publishedAt && <span>{article.publishedAt}</span>}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
