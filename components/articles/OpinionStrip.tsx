// OpinionStrip — opinionssektionen med skribentavatarer
// Speglar .opinion-strip i index.html

import Image from 'next/image'
import Link from 'next/link'
import { type ArticleCardData } from './ArticleCard'

interface OpinionStripProps {
  articles: ArticleCardData[]
  locale?:  'ckb' | 'fa' | 'en'
}

export function OpinionStrip({ articles, locale = 'ckb' }: OpinionStripProps) {
  return (
    <div className="jiyan-opinion-strip">
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '14px' }}>
        ڕای کەسی
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {articles.map((article) => {
          const headline = article.headline[locale] || article.headline.ckb || article.headline.en || ''
          const authorName = article.author?.nameKurdi || article.author?.name || ''
          const initials = article.author?.initials || authorName.slice(0, 2).toUpperCase()
          const avatarColor = article.author?.avatarColor || '#005689'

          return (
            <Link
              key={article.id}
              href={`/article/${article.slug.current}`}
              style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
            >
              {/* Avatar — cirkulär profilbild eller initialer */}
              <div className="opinion-avatar" style={{ background: avatarColor }}>
                {initials}
              </div>

              {/* Skribentnamn */}
              <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--blue)', marginBottom: '4px' }}>
                {authorName}
              </div>

              {/* Rubriken */}
              <p style={{ fontFamily: 'var(--serif)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                {headline}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
