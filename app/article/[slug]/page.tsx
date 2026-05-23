// Artikeldetaljsida — وتار
// Guardian-inspirerat, RTL/soraniska kurdiska
// Statiska data — ersätts med Sanity-queries i produktion

import { Navigation } from '@/components/layout/Navigation'
import { TopStrip } from '@/components/layout/TopStrip'
import { Footer } from '@/components/layout/Footer'
import { ShareButtons } from '@/components/articles/ShareButtons'
import Image from 'next/image'
import Link from 'next/link'
import { client, isSanityConfigured } from '@/sanity/lib/client'
import { ARTICLE_BY_SLUG_QUERY } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'

// Artikeldatat (placeholder — i produktion: params.slug -> Sanity query)
const ARTICLE = {
  headline:    'کوردستان لەسەر خاچی سیاسی: ئۆتۆنۆمی یان پووچەڵبوونی مامناوەند؟',
  standfirst:  'پاش سی ساڵ لە ئازادیی ئیدارەیی، هەرێمی کوردستان ئێستا لەناو بارودۆخێکی ئاسایی نییەدایە. گفتوگۆکانی نێوان هەولێر و بەغدا پووچەڵبوونەوەی پێکردووە.',
  imageUrl:    'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&h=630&fit=crop',
  imageCaption: 'دەروازەی شاری هەولێر — وێنە: رووداوی نێودەوڵەتی',
  author: {
    name:        'شیرین مەحمود',
    bio:         'نووسەری سیاسی و پرۆفیسەری مافی بنەڕەتی لە زانکۆی ئامستەردام',
    avatarColor: '#1a3a5c',
    initials:    'شم',
  },
  publishedAt:  '٢١ی ئایار ٢٠٢٦',
  updatedAt:    '٢١ی ئایار ٢٠٢٦، ١٤:٣٠',
  readingTime:  '٧ خولەک',
  kicker:       'ڕای کەسی — کوردستان',
  kickerColor:  '#003580',
  topic:        'سیاسەت',
  slug:         'kurdistan-political-crossroads-autonomy',
  body: [
    'لە دوای سی ساڵ لە ئیدارەی خۆمان، هەرێمی کوردستان بووەتە نموونەیەکی تایبەت لە ناو ئاستی نێودەوڵەتیدا — نە وەکو دەوڵەتێکی تەواو، نە وەکو پارچەیەکی ئاسایی لە ناو عێراقدا. ئەم دۆخەی ئارامیی پێچەوانەیی — کوردستانی بەهێز بەلام سروشتی قانوونیی شلەی لایبڕدوو — ئەمڕۆ بووەتە کاریگەری سووکی ئابووری.',

    'گفتوگۆکانی نێوان هەولێر و بەغدا کە تەنها بووەتە سەرچاوەی مامناوەند و قورسایی، تووشی یەکێک لە بازنەی پووچی کردووە: کوردستان ئابووری خۆی ئارادەکات، بەغداش ئارادەکات بەراورد بکات لەگەڵ یاسای سەرەکیی کۆمارە فیدراڵەکە. لەم دۆخەدا، نەوتی کوردستان — کە دەبوایە ببێتە بنچینەی تووانا — بووەتە سەرچاوەی مامناوەند و قورسایی.',

    'بیر و بۆچوونی نوێ لە نەوجوانانی کوردستاندا پرسیاری زیاتر دەکات: ئایا ئۆتۆنۆمی تەنها مانای ئیدارەی خۆتانە، یان مانای کارکردنی ئابووری ئازاد، دیپلۆماسیی سەربەخۆ و ئارامیی مامناوەندیش دەدات؟ ئەگەر وەلامەکە "نەخێر" بێت، ئایا ئۆتۆنۆمی کافیە؟',

    'پاسخ ئەمەیە کە ئۆتۆنۆمی بەبێ مانای ئابووریی و دیپلۆماسی تەنها کەواتی ئیدارەیی نییە — قاڵبێکی بەبێ ناوەڕۆکە. ژماری زۆری نوێیەکان جوانترن لە ستانبوڵ، بەرلین و ئامستەرداندا ئاواتی باشتر دەبینن. ئەمەش نیشانەی نە شکست، بەڵکوو نیشانەی ئەوەیە کە سیستەم پێویستی بە پرسیارکردنەوەی بنەڕەتیی هەیە.',
  ],
}

// ─── Relaterade artiklar ──────────────────────────────────────────────────────
const relatedArticles = [
  {
    id:       'ra1',
    headline: 'نەوت وەک چەکێک: ئابووری کوردستان لە سایەی شەڕی ئاکتیڤدا',
    kicker:   'ئابووری',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=240&fit=crop',
    author:   'کاوەی رەشیدی',
    publishedAt: '٢٠ی ئایار',
    slug:     'oil-weapon-kurdistan-economy',
  },
  {
    id:       'ra2',
    headline: 'ژنان لە کوردستاندا: نێوان یاسای نوێ و دەستووری کۆن',
    kicker:   'فیمینیزم',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=240&fit=crop',
    author:   'پەرێز هاشمی',
    publishedAt: '١٩ی ئایار',
    slug:     'women-kurdistan-new-law-old-custom',
  },
  {
    id:       'ra3',
    headline: 'دیاسپۆرای کوردی: خوازراوی سیاسیی نوێ',
    kicker:   'دیاسپۆرا',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=240&fit=crop',
    author:   'بنیامین ئازیزی',
    publishedAt: '١٨ی ئایار',
    slug:     'kurdish-diaspora-new-political-actor',
  },
]

// ─── Sidebar data ─────────────────────────────────────────────────────────────
const mostReadArticles = [
  { id: 'mr1', headline: 'تیمی نیشتمانیی کوردستان بەرەو نیو-فاینال', slug: 'kurdistan-national-team-asia-cup-semifinal' },
  { id: 'mr2', headline: 'ئینقیلابی ژن: چۆن ئێران گۆڕی',             slug: 'jin-revolution-iran-kurdistan-change' },
  { id: 'mr3', headline: 'کوردستان و یەکێتی ئەوروپا: دەرگاکە',       slug: 'kurdistan-eu-door-reopening' },
  { id: 'mr4', headline: 'مافی ڕايبووندنەوەی کوردستانی سوریا',        slug: 'rojava-right-self-determination' },
  { id: 'mr5', headline: 'ئاووهەوا لە کوردستاندا: گرمای زەوی',        slug: 'climate-kurdistan-political-defence' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
interface ArticlePageProps {
  params: { slug: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  let sanityArticle = null
  if (isSanityConfigured) {
    try {
      sanityArticle = await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug: params.slug })
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        console.error('[Jiyan] Artikel-fetch misslyckades för slug:', params.slug, err)
      }
    }
  }

  const article = {
    headline:    sanityArticle?.headline?.ckb || sanityArticle?.headline?.en || ARTICLE.headline,
    standfirst:  sanityArticle?.standfirst?.ckb || sanityArticle?.standfirst?.en || ARTICLE.standfirst,
    imageUrl:    sanityArticle?.coverImage?.asset
                   ? urlFor(sanityArticle.coverImage).width(1200).height(630).fit('crop').url()
                   : ARTICLE.imageUrl,
    imageCaption: ARTICLE.imageCaption,
    author: {
      name:        sanityArticle?.author?.nameKurdi || sanityArticle?.author?.name || ARTICLE.author.name,
      bio:         sanityArticle?.author?.bio || ARTICLE.author.bio,
      avatarColor: sanityArticle?.author?.avatarColor || ARTICLE.author.avatarColor,
      initials:    sanityArticle?.author?.initials || ARTICLE.author.initials,
    },
    publishedAt:  sanityArticle?.publishedAt
                    ? new Date(sanityArticle.publishedAt).toLocaleDateString('ar-IQ', { day: 'numeric', month: 'long', year: 'numeric' })
                    : ARTICLE.publishedAt,
    updatedAt:    ARTICLE.updatedAt,
    readingTime:  ARTICLE.readingTime,
    kicker:      (sanityArticle?.kicker?.ckb || sanityArticle?.kicker?.en || ARTICLE.kicker) as string,
    kickerColor:  '#003580',
    topic:        ARTICLE.topic,
    slug:         params.slug,
    body:         ARTICLE.body,
  }

  return (
    <>
      <TopStrip />

      {/* Header */}
      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '12px 0 0' }}>
            <div>
              <a href="/" className="jiyan-masthead-logo">ژیان</a>
              <div className="jiyan-masthead-date">دووشەممە، ٢١ی ئایار ٢٠٢٦</div>
            </div>
          </div>
        </div>
      </header>

      <Navigation />

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)', padding: '28px 20px 0' }}>

          {/* Huvud + Sidopanel */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: '1fr 300px',
              gap:                 '0 40px',
            }}
          >
            {/* ─── Artikelinnehåll ─────────────────────────────────────────── */}
            <article>

              {/* Kicker */}
              {article.kicker && (
                <div
                  style={{
                    fontSize:     '0.75rem',
                    fontWeight:   700,
                    color:        article.kickerColor || '#003580',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                  }}
                >
                  {article.kicker}
                </div>
              )}

              {/* H1 */}
              <h1
                style={{
                  fontFamily:   'var(--serif)',
                  fontSize:     '2.2rem',
                  fontWeight:   700,
                  lineHeight:   1.2,
                  color:        'var(--text)',
                  marginBottom: '14px',
                }}
              >
                {article.headline}
              </h1>

              {/* Ingress */}
              <p
                style={{
                  fontFamily:   'var(--serif)',
                  fontSize:     '1.2rem',
                  fontWeight:   400,
                  lineHeight:   1.6,
                  color:        '#3a3a3a',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '20px',
                }}
              >
                {article.standfirst}
              </p>

              {/* Byline */}
              <div
                style={{
                  display:      'flex',
                  alignItems:   'center',
                  gap:          '12px',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width:          '44px',
                    height:         '44px',
                    borderRadius:   '50%',
                    background:     article.author.avatarColor,
                    color:          'white',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    fontSize:       '0.9rem',
                    fontWeight:     700,
                    flexShrink:     0,
                  }}
                >
                  {article.author.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text)' }}>
                    {article.author.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#767676', lineHeight: 1.4 }}>
                    {article.author.bio}
                  </div>
                  <div
                    style={{
                      fontSize:   '0.68rem',
                      color:      '#767676',
                      marginTop:  '2px',
                      display:    'flex',
                      gap:        '8px',
                    }}
                  >
                    <span>{article.publishedAt}</span>
                    <span>·</span>
                    <span>{article.readingTime} خوێندن</span>
                  </div>
                </div>
              </div>

              {/* Dela-knappar (överst) */}
              <div style={{ marginBottom: '20px' }}>
                <ShareButtons headline={article.headline} slug={article.slug} />
              </div>

              {/* Hero-bild */}
              <figure style={{ margin: '0 0 24px' }}>
                <div style={{ position: 'relative', width: '100%', height: '420px' }}>
                  <Image
                    src={article.imageUrl}
                    alt={article.headline}
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {article.imageCaption && (
                  <figcaption
                    style={{
                      fontSize:   '0.72rem',
                      color:      '#767676',
                      marginTop:  '6px',
                      lineHeight: 1.5,
                      fontStyle:  'italic',
                    }}
                  >
                    {article.imageCaption}
                  </figcaption>
                )}
              </figure>

              {/* Artikelbrödtext */}
              <div
                style={{
                  fontFamily:  'var(--serif)',
                  fontSize:    '1.05rem',
                  lineHeight:  1.75,
                  color:       '#1a1a1a',
                  maxWidth:    '680px',
                }}
              >
                {article.body.map((paragraph, idx) => (
                  <p
                    key={idx}
                    style={{
                      marginBottom: '1.4em',
                      textAlign:    'justify',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Dela-knappar (nederst) */}
              <div
                style={{
                  borderTop:    '1px solid var(--border)',
                  borderBottom: '1px solid var(--border)',
                  padding:      '16px 0',
                  margin:       '28px 0',
                }}
              >
                <ShareButtons headline={article.headline} slug={article.slug} />
              </div>

              {/* Uppdaterad */}
              <div
                style={{
                  fontSize:     '0.72rem',
                  color:        '#767676',
                  marginBottom: '36px',
                }}
              >
                دوایین نوێکردنەوە: {article.updatedAt}
              </div>

              {/* Relaterade artiklar */}
              <div style={{ marginBottom: '48px' }}>
                <div
                  style={{
                    borderTop:    '3px solid #003580',
                    paddingTop:   '8px',
                    marginBottom: '16px',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize:   '0.95rem',
                      fontWeight: 700,
                      color:      '#003580',
                    }}
                  >
                    وتارەکانی پەیوەندیدار
                  </h2>
                </div>

                <div
                  style={{
                    display:             'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap:                 '16px',
                  }}
                >
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/article/${rel.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <div style={{ position: 'relative', width: '100%', height: '140px', marginBottom: '8px' }}>
                        <Image
                          src={rel.imageUrl}
                          alt={rel.headline}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize:     '0.65rem',
                          fontWeight:   700,
                          color:        '#003580',
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          marginBottom: '4px',
                        }}
                      >
                        {rel.kicker}
                      </div>
                      <h3
                        style={{
                          fontFamily:  'var(--serif)',
                          fontSize:    '0.88rem',
                          fontWeight:  700,
                          lineHeight:  1.4,
                          marginBottom: '4px',
                          color:       'var(--text)',
                        }}
                      >
                        {rel.headline}
                      </h3>
                      <div style={{ fontSize: '0.7rem', color: '#767676' }}>
                        {rel.author} · {rel.publishedAt}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* ─── Sidopanel ───────────────────────────────────────────────── */}
            <aside style={{ paddingTop: '4px' }}>

              {/* Mest lästa */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    borderTop:    '3px solid #c70000',
                    paddingTop:   '8px',
                    marginBottom: '14px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize:   '0.95rem',
                      fontWeight: 700,
                      color:      '#c70000',
                    }}
                  >
                    زیاتر خوێندراوەتەوە
                  </h3>
                </div>

                <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {mostReadArticles.map((item, idx) => (
                    <li
                      key={item.id}
                      style={{
                        display:      'flex',
                        gap:          '10px',
                        padding:      '10px 0',
                        borderBottom: idx < mostReadArticles.length - 1 ? '1px solid var(--border)' : 'none',
                        alignItems:   'flex-start',
                      }}
                    >
                      <span
                        style={{
                          fontSize:   '1.4rem',
                          fontWeight: 800,
                          color:      '#dcdcdc',
                          lineHeight: 1,
                          flexShrink: 0,
                          minWidth:   '24px',
                          fontFamily: 'var(--sans)',
                        }}
                      >
                        {idx + 1}
                      </span>
                      <Link
                        href={`/article/${item.slug}`}
                        style={{
                          fontFamily:     'var(--serif)',
                          fontSize:       '0.85rem',
                          fontWeight:     700,
                          color:          'var(--text)',
                          lineHeight:     1.4,
                          textDecoration: 'none',
                        }}
                      >
                        {item.headline}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Nyhetsbrev */}
              <div
                style={{
                  background:   '#f0f4ff',
                  border:       '1px solid #ccd9f0',
                  borderRadius: '4px',
                  padding:      '18px',
                }}
              >
                <div
                  style={{
                    fontSize:     '0.65rem',
                    fontWeight:   700,
                    color:        '#003580',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '6px',
                  }}
                >
                  نووسراوی ئەلیکترۆنی
                </div>
                <h3
                  style={{
                    fontFamily:   'var(--serif)',
                    fontSize:     '0.95rem',
                    fontWeight:   700,
                    color:        '#003580',
                    marginBottom: '8px',
                    lineHeight:   1.35,
                  }}
                >
                  هەواڵی ژیان ڕاستەوخۆ بە ئیمەیڵت
                </h3>
                <p
                  style={{
                    fontSize:     '0.78rem',
                    color:        '#555',
                    lineHeight:   1.55,
                    marginBottom: '12px',
                  }}
                >
                  بەرپرسانەترین هەواڵ و شیکاری کوردستان — هەموو بەیانی.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <input
                    type="email"
                    placeholder="ئیمەیڵت لێرەدا"
                    style={{
                      padding:      '8px 12px',
                      fontSize:     '0.82rem',
                      border:       '1px solid #aac0e0',
                      borderRadius: '3px',
                      outline:      'none',
                      fontFamily:   'var(--sans)',
                    }}
                  />
                  <button
                    style={{
                      background:   '#003580',
                      color:        'white',
                      fontSize:     '0.8rem',
                      fontWeight:   700,
                      padding:      '9px',
                      borderRadius: '3px',
                      border:       'none',
                      cursor:       'pointer',
                      fontFamily:   'var(--sans)',
                    }}
                  >
                    بەشدارببە
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
