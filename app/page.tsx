export const revalidate = 3600

import { Suspense } from 'react'
import { client, isSanityConfigured } from '@/sanity/lib/client'
import { HOMEPAGE_ARTICLES_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import type { ArticleCardData } from '@/components/articles/ArticleCard'
import { Navigation }     from '@/components/layout/Navigation'
import { TopStrip }       from '@/components/layout/TopStrip'
import { RollingStrip }   from '@/components/rolling-strip/RollingStrip'
import { HeroSection }    from '@/components/articles/HeroSection'
import { CardRow }        from '@/components/articles/CardRow'
import { OpinionStrip }   from '@/components/articles/OpinionStrip'
import { SectionBlock }   from '@/components/articles/SectionBlock'
import { Sidebar }        from '@/components/sidebar/Sidebar'
import { Footer }         from '@/components/layout/Footer'
import { PaywallBanner }  from '@/components/ui/PaywallBanner'
import { JoinCTA }        from '@/components/ui/JoinCTA'
import { NewsBannerGrid } from '@/components/articles/NewsBannerGrid'

interface SanityArticleRaw {
  _id:          string
  headline?:    { ckb?: string; fa?: string; en?: string }
  standfirst?:  { ckb?: string; fa?: string; en?: string }
  kicker?:      { ckb?: string; fa?: string; en?: string }
  kickerColor?: 'blue' | 'red' | 'navy'
  coverImage?:  { _type: string; asset?: { _ref: string } }
  publishedAt?: string
  isPremium?:   boolean
  featured?:    boolean
  articleType?: string
  slug:         { current: string }
  author?:      { name?: string; nameKurdi?: string; initials?: string; avatarColor?: string }
}

function mapSanityArticle(raw: SanityArticleRaw): ArticleCardData {
  return {
    id:          raw._id,
    headline:    raw.headline    ?? {},
    standfirst:  raw.standfirst  ?? undefined,
    kicker:      raw.kicker      ?? undefined,
    kickerColor: raw.kickerColor ?? 'blue',
    imageUrl:    raw.coverImage?.asset
                   ? urlFor(raw.coverImage).width(800).height(400).fit('crop').url()
                   : undefined,
    publishedAt: raw.publishedAt
                   ? new Date(raw.publishedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
                   : undefined,
    isPremium:   raw.isPremium ?? false,
    slug:        raw.slug,
    author:      raw.author ?? undefined,
  }
}

async function getSanityArticles(): Promise<SanityArticleRaw[] | null> {
  if (!isSanityConfigured) return null
  try {
    return await client.fetch(HOMEPAGE_ARTICLES_QUERY)
  } catch {
    return null
  }
}

export default async function HomePage() {
  const rawArticles = await getSanityArticles()
  const allArticles: ArticleCardData[] = rawArticles ? rawArticles.map(mapSanityArticle) : []

  // Opinions separate
  const opinionArticles = rawArticles
    ? rawArticles.filter(r => r.articleType === 'opinion').map(mapSanityArticle)
    : []

  // Non-opinion articles (news, analysis, culture, sport, breaking)
  const newsArticles = rawArticles
    ? rawArticles.filter(r => r.articleType !== 'opinion').map(mapSanityArticle)
    : []

  // Hero: featured article, otherwise first news article
  const featuredRaw  = rawArticles?.find(r => r.featured)
  const heroArticle  = featuredRaw
    ? mapSanityArticle(featuredRaw)
    : newsArticles[0] ?? allArticles[0]

  // Remaining news after hero
  const afterHero = newsArticles.filter(a => a.id !== heroArticle?.id)

  // HeroSide: up to 3 articles
  const heroSideArticles = afterHero.slice(0, 3)

  // CardRow 1: next 4
  const cardRow1 = afterHero.slice(3, 7)

  // CardRow 2: next 4
  const cardRow2 = afterHero.slice(7, 11)

  // Section blocks: remaining articles
  const sectionArticles = afterHero.slice(11)

  // Sidebar: latest 6 articles
  const sidebarArticles = allArticles.slice(0, 6)

  // Rolling strip: podcast + latest 5 articles
  const stripCards = [
    {
      href:       '/podcast',
      kicker:     'پۆدکاستی تایبەت',
      title:      'ڕۆژهەڵات: مێژوو، هێز و بەرگری',
      titleColor: 'podcast' as const,
      isPodcast:  true,
    },
    ...allArticles.slice(0, 5).map(a => ({
      href:       `/article/${a.slug.current}`,
      kicker:     a.kicker?.ckb || a.kicker?.fa || a.kicker?.en || 'هەواڵ',
      title:      a.headline.ckb || a.headline.fa || a.headline.en || '',
      titleColor: (a.kickerColor === 'red' ? 'red' : a.kickerColor === 'navy' ? 'navy' : 'red') as 'red' | 'navy' | 'green',
      image:      a.imageUrl,
    })),
  ]

  return (
    <>
      <TopStrip />

      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '12px 0 0' }}>
            <div>
              <a href="/" className="jiyan-masthead-logo">ژیان</a>
              <div className="jiyan-masthead-date" suppressHydrationWarning>
                {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navigation />

      <RollingStrip cards={stripCards} />

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '0 32px', padding: '24px 0' }}
            className="content-grid"
          >
            <div>
              <PaywallBanner />

              {/* Latest articles banner */}
              {allArticles.length > 0 && (
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ borderTop: '3px solid var(--blue)', paddingTop: '8px', marginBottom: '12px' }}>
                    <h2 style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue)' }}>
                      دوایین هەواڵ
                    </h2>
                  </div>
                  <NewsBannerGrid articles={allArticles} />
                </div>
              )}

              {/* Hero */}
              {heroArticle && (
                <HeroSection
                  heroArticle={heroArticle}
                  sideArticles={heroSideArticles}
                />
              )}

              {/* Card row 1 */}
              {cardRow1.length > 0 && <CardRow articles={cardRow1} />}

              {/* Opinion strip */}
              {opinionArticles.length > 0 && (
                <OpinionStrip articles={opinionArticles} />
              )}

              {/* Section block 1: general articles */}
              {sectionArticles.length > 0 && (
                <Suspense fallback={<div className="jiyan-skeleton" style={{ height: 240 }} />}>
                  <SectionBlock
                    title="زیاتر بخوێنەوە"
                    articles={sectionArticles.slice(0, 6)}
                    layout="two-col"
                  />
                </Suspense>
              )}

              {/* Card row 2 */}
              {cardRow2.length > 0 && <CardRow articles={cardRow2} />}

              {/* Section block 2: remaining articles */}
              {sectionArticles.length > 6 && (
                <Suspense fallback={<div className="jiyan-skeleton" style={{ height: 200 }} />}>
                  <SectionBlock
                    title="هەواڵی تازە"
                    articles={sectionArticles.slice(6, 9)}
                    layout="three-col"
                  />
                </Suspense>
              )}
            </div>

            <aside className="jiyan-sidebar">
              <Sidebar mostViewedArticles={sidebarArticles} />
            </aside>
          </div>
        </div>

        <JoinCTA />
      </main>

      <Footer />
    </>
  )
}
