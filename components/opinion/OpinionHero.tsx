// OpinionHero — Featured opinion article med pullquote
// Guardian commentisfree-inspirerat, RTL-anpassat

import Image from 'next/image'
import Link from 'next/link'

export interface OpinionHeroData {
  id: string
  headline: string
  standfirst: string
  pullquote: string
  author: {
    name: string
    bio: string
    avatarUrl?: string
    avatarColor?: string
    initials?: string
  }
  imageUrl?: string
  slug: string
  publishedAt: string
  topic: string
}

interface OpinionHeroProps {
  article: OpinionHeroData
}

export function OpinionHero({ article }: OpinionHeroProps) {
  const initials = article.author.initials || article.author.name.slice(0, 2)
  const avatarColor = article.author.avatarColor || '#1a3a5c'

  return (
    <div className="opinion-hero-wrapper">
      <div className="opinion-hero-inner">
        {/* Vänster: text + pullquote */}
        <div className="opinion-hero-content">
          {/* Topic badge */}
          <div className="opinion-topic-badge">{article.topic}</div>

          {/* Rubrik */}
          <Link href={`/article/${article.slug}`} className="opinion-hero-link">
            <h1 className="opinion-hero-headline">{article.headline}</h1>
          </Link>

          {/* Ingress */}
          <p className="opinion-hero-standfirst">{article.standfirst}</p>

          {/* Pullquote */}
          <blockquote className="opinion-pullquote">
            <span className="opinion-pullquote-mark">&ldquo;</span>
            {article.pullquote}
            <span className="opinion-pullquote-mark">&rdquo;</span>
          </blockquote>

          {/* Kolumnistinfo */}
          <div className="opinion-hero-author">
            <div
              className="opinion-hero-avatar"
              style={{ background: article.author.avatarUrl ? 'transparent' : avatarColor }}
            >
              {article.author.avatarUrl ? (
                <Image
                  src={article.author.avatarUrl}
                  alt={article.author.name}
                  fill
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                />
              ) : (
                <span>{initials}</span>
              )}
            </div>
            <div>
              <div className="opinion-hero-author-name">{article.author.name}</div>
              <div className="opinion-hero-author-bio">{article.author.bio}</div>
              <div className="opinion-hero-meta">{article.publishedAt}</div>
            </div>
          </div>
        </div>

        {/* Höger: bild */}
        {article.imageUrl && (
          <Link href={`/article/${article.slug}`} className="opinion-hero-img-wrap">
            <Image
              src={article.imageUrl}
              alt={article.headline}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Link>
        )}
      </div>
    </div>
  )
}
