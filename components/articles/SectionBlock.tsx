// SectionBlock — sektionsblock med titel och artikellista
// Stöder two-col och three-col layouter
// Speglar .section-block i index.html

import { ArticleCard, type ArticleCardData } from './ArticleCard'

interface SectionBlockProps {
  title:        string
  articles:     ArticleCardData[]
  layout?:      'two-col' | 'three-col' | 'list'
  accentColor?: 'blue' | 'red' | 'navy'
  locale?:      'ckb' | 'fa' | 'en'
}

export function SectionBlock({
  title,
  articles,
  layout = 'list',
  accentColor = 'blue',
  locale = 'ckb',
}: SectionBlockProps) {
  const borderColor = accentColor === 'red' ? 'var(--red)' : accentColor === 'navy' ? 'var(--navy)' : 'var(--blue)'
  const titleColor  = accentColor === 'red' ? 'var(--red)' : accentColor === 'navy' ? 'var(--navy)' : 'var(--blue)'

  return (
    <div style={{ borderTop: `3px solid ${borderColor}`, paddingTop: '6px', marginBottom: '24px' }}>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 700, color: titleColor, marginBottom: '14px' }}>
        {title}
      </div>

      {/* Three-col layout — användes för klimat-sektionen */}
      {layout === 'three-col' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="card" locale={locale} />
          ))}
        </div>
      )}

      {/* Two-col layout — användes för EU-politik och Ukraina */}
      {layout === 'two-col' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {/* Dela artiklarna i två kolumner */}
          <div>
            {articles.slice(0, Math.ceil(articles.length / 2)).map((article) => (
              <ArticleCard key={article.id} article={article} variant="list" locale={locale} />
            ))}
          </div>
          <div>
            {articles.slice(Math.ceil(articles.length / 2)).map((article) => (
              <ArticleCard key={article.id} article={article} variant="list" locale={locale} />
            ))}
          </div>
        </div>
      )}

      {/* List layout — standard listvariant */}
      {layout === 'list' && (
        <div>
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} variant="list" locale={locale} />
          ))}
        </div>
      )}
    </div>
  )
}
