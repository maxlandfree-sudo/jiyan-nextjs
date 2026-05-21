// CardRow — horisontell rad med fyra artikelkort
// Speglar .card-row i index.html

import { ArticleCard, type ArticleCardData } from './ArticleCard'

interface CardRowProps {
  articles: ArticleCardData[]
  locale?:  'ckb' | 'fa' | 'en'
}

export function CardRow({ articles, locale = 'ckb' }: CardRowProps) {
  return (
    <div style={{
      display:             'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap:                 '16px 20px',
      padding:             '20px 0',
      borderBottom:        '1px solid var(--border)',
      marginBottom:        '20px',
    }}>
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          variant="card"
          locale={locale}
        />
      ))}
    </div>
  )
}
