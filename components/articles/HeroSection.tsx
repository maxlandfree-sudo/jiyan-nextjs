// HeroSection — hjältesektionen med stor artikel och sidostapel
// Speglar .hero-section i index.html

import { ArticleCard, type ArticleCardData } from './ArticleCard'

interface HeroSectionProps {
  heroArticle:   ArticleCardData
  sideArticles:  ArticleCardData[]
  locale?:       'ckb' | 'fa' | 'en'
}

export function HeroSection({ heroArticle, sideArticles, locale = 'ckb' }: HeroSectionProps) {
  return (
    <div style={{ borderTop: '3px solid var(--blue)', paddingTop: '4px' }}>
      <div style={{
        display:             'grid',
        gridTemplateColumns: '2fr 1fr',
        gap:                 '20px',
        paddingBottom:       '20px',
        borderBottom:        '1px solid var(--border)',
        marginBottom:        '20px',
      }}>
        {/* Stor hjälteartikel till vänster */}
        <ArticleCard article={heroArticle} variant="hero" locale={locale} />

        {/* Sidostapel med mindre artiklar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {sideArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              variant="side"
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
