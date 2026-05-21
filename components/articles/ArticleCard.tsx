// ArticleCard — återanvändbar artikelkortkomponent
// Används i kortrade, sektionsblock och listor
// Speglar .card-article, .list-article och .side-article i index.html

import Image from 'next/image'
import Link from 'next/link'

// Gemensam typ för alla artikelvarianter
export interface ArticleCardData {
  id:           string
  headline:     { ckb?: string; fa?: string; en?: string }
  standfirst?:  { ckb?: string; fa?: string; en?: string }
  kicker?:      { ckb?: string; fa?: string; en?: string }
  kickerColor?: 'blue' | 'red' | 'navy'
  imageUrl?:    string
  author?:      { name?: string; nameKurdi?: string; initials?: string; avatarColor?: string }
  publishedAt?: string
  slug:         { current: string }
  isPremium?:   boolean
}

// Varianttyp — styr storlek och layout
type CardVariant = 'hero' | 'side' | 'card' | 'list'

interface ArticleCardProps {
  article:  ArticleCardData
  variant?: CardVariant
  locale?:  'ckb' | 'fa' | 'en'
}

// Hjälpfunktion — hämta text för rätt språk
function getText(field: { ckb?: string; fa?: string; en?: string } | undefined, locale: 'ckb' | 'fa' | 'en'): string {
  if (!field) return ''
  return field[locale] || field.ckb || field.en || ''
}

// Kickerfärg -> CSS-färg
function getKickerColor(color?: 'blue' | 'red' | 'navy'): string {
  if (color === 'red')  return 'var(--red)'
  if (color === 'navy') return 'var(--navy)'
  return 'var(--blue)'
}

export function ArticleCard({ article, variant = 'card', locale = 'ckb' }: ArticleCardProps) {
  const headline   = getText(article.headline, locale)
  const kicker     = getText(article.kicker, locale)
  const standfirst = getText(article.standfirst, locale)

  if (variant === 'hero') {
    return (
      <Link href={`/article/${article.slug.current}`} style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
        {article.imageUrl && (
          <div style={{ position: 'relative', width: '100%', height: '340px', marginBottom: '10px' }}>
            <Image src={article.imageUrl} alt={kicker} fill style={{ objectFit: 'cover' }} />
          </div>
        )}
        {kicker && (
          <div className="article-kicker" style={{ color: getKickerColor(article.kickerColor) }}>
            {kicker}
          </div>
        )}
        <h2 className="article-headline-hero reveal">{headline}</h2>
        {standfirst && <p className="article-standfirst">{standfirst}</p>}
        <div className="article-meta">
          {article.author?.name && (
            <span className="article-author">{article.author.nameKurdi || article.author.name}</span>
          )}
          {article.publishedAt && <><span>·</span><span>{article.publishedAt}</span></>}
        </div>
      </Link>
    )
  }

  if (variant === 'side') {
    return (
      <Link
        href={`/article/${article.slug.current}`}
        style={{ display: 'block', borderTop: '1px solid var(--border)', paddingTop: '12px', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
      >
        {article.imageUrl && (
          <div style={{ position: 'relative', width: '100%', height: '120px', marginBottom: '8px' }}>
            <Image src={article.imageUrl} alt={kicker} fill style={{ objectFit: 'cover' }} />
          </div>
        )}
        {kicker && (
          <div className="article-kicker" style={{ color: getKickerColor(article.kickerColor) }}>
            {kicker}
          </div>
        )}
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '6px' }}>
          {headline}
        </h3>
      </Link>
    )
  }

  if (variant === 'list') {
    return (
      <Link
        href={`/article/${article.slug.current}`}
        style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border)', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
      >
        {article.imageUrl && (
          <div style={{ position: 'relative', width: '100px', height: '68px', flexShrink: 0 }}>
            <Image src={article.imageUrl} alt={kicker} fill style={{ objectFit: 'cover' }} />
          </div>
        )}
        <div>
          {kicker && (
            <div className="article-kicker" style={{ color: getKickerColor(article.kickerColor) }}>
              {kicker}
            </div>
          )}
          <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.45 }}>
            {headline}
          </div>
          <div className="article-meta" style={{ marginTop: '4px' }}>
            {article.author?.name && (
              <span className="article-author">{article.author.nameKurdi || article.author.name}</span>
            )}
            {article.publishedAt && <><span>·</span><span>{article.publishedAt}</span></>}
          </div>
        </div>
      </Link>
    )
  }

  // Standard card-variant
  return (
    <Link
      href={`/article/${article.slug.current}`}
      style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
    >
      {article.imageUrl && (
        <div style={{ position: 'relative', width: '100%', height: '130px', marginBottom: '8px' }}>
          <Image src={article.imageUrl} alt={kicker} fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      {kicker && (
        <div className="article-kicker" style={{ color: getKickerColor(article.kickerColor) }}>
          {kicker}
        </div>
      )}
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.45, marginBottom: '6px' }}>
        {headline}
      </h3>
      <div className="article-meta">
        {article.author?.name && (
          <span className="article-author">{article.author.nameKurdi || article.author.name}</span>
        )}
      </div>
    </Link>
  )
}
