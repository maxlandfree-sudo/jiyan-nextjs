// OpinionFeed — Opinionsflöde med omväxlande bild vänster/höger
// Guardian commentisfree-inspirerat, RTL-anpassat

import Image from 'next/image'
import Link from 'next/link'

export interface OpinionFeedArticle {
  id: string
  headline: string
  standfirst: string
  imageUrl?: string
  author: {
    name: string
    avatarUrl?: string
    avatarColor?: string
    initials?: string
  }
  topic: string
  publishedAt: string
  slug: string
}

interface OpinionFeedProps {
  articles: OpinionFeedArticle[]
}

export function OpinionFeed({ articles }: OpinionFeedProps) {
  return (
    <section className="opinion-feed-section">
      <div className="opinion-section-bar">
        <h2 className="opinion-section-title">ئازادانەترین ڕاکانی ئێمە</h2>
      </div>

      <div className="opinion-feed-list">
        {articles.map((article, index) => {
          const isImageLeft = index % 2 === 0
          const initials = article.author.initials || article.author.name.slice(0, 2)
          const bgColor = article.author.avatarColor || '#1a3a5c'

          return (
            <article
              key={article.id}
              className={`opinion-feed-item ${isImageLeft ? 'img-start' : 'img-end'}`}
            >
              {/* Bild */}
              {article.imageUrl && (
                <Link href={`/article/${article.slug}`} className="opinion-feed-img-link">
                  <div className="opinion-feed-img-wrap">
                    <Image
                      src={article.imageUrl}
                      alt={article.headline}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </Link>
              )}

              {/* Textinnehåll */}
              <div className="opinion-feed-body">
                <div className="opinion-feed-topic">{article.topic}</div>

                <Link href={`/article/${article.slug}`} className="opinion-feed-link">
                  <h3 className="opinion-feed-headline">{article.headline}</h3>
                </Link>

                <p className="opinion-feed-standfirst">{article.standfirst}</p>

                {/* Kolumnist */}
                <div className="opinion-feed-author">
                  <div
                    className="opinion-feed-avatar"
                    style={{ background: article.author.avatarUrl ? 'transparent' : bgColor }}
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
                    <div className="opinion-feed-author-name">{article.author.name}</div>
                    <div className="opinion-feed-date">{article.publishedAt}</div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
