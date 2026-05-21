// Jiyan ژیان — Dynamisk kategori-sida
// Catch-all för kategorier utan egna sidor
// Redirectar till 404 om kategorin är okänd

import { notFound }      from 'next/navigation'
import { Navigation }    from '@/components/layout/Navigation'
import { TopStrip }      from '@/components/layout/TopStrip'
import { Footer }        from '@/components/layout/Footer'
import { SectionHeader } from '@/components/layout/SectionHeader'
import Link              from 'next/link'
import Image             from 'next/image'

// Kända kategorier med metadata
const KNOWN_CATEGORIES: Record<string, {
  titleKurdish: string
  color:        'blue' | 'red' | 'navy' | 'culture' | 'purple'
  subcategories: { label: string; slug: string }[]
}> = {
  europe:      { titleKurdish: 'ئەوروپا',      color: 'blue',    subcategories: [{ label: 'هەموو', slug: 'all' }, { label: 'یەکێتی ئەوروپا', slug: 'eu' }] },
  world:       { titleKurdish: 'جیهان',         color: 'navy',    subcategories: [{ label: 'هەموو', slug: 'all' }, { label: 'ئاسیا', slug: 'asia' }] },
  uk:          { titleKurdish: 'بریتانیا',      color: 'blue',    subcategories: [{ label: 'هەموو', slug: 'all' }] },
  us:          { titleKurdish: 'ئەمریکا',       color: 'navy',    subcategories: [{ label: 'هەموو', slug: 'all' }] },
  science:     { titleKurdish: 'زانست',         color: 'blue',    subcategories: [{ label: 'هەموو', slug: 'all' }] },
  tech:        { titleKurdish: 'تێکنۆلۆجیا',   color: 'blue',    subcategories: [{ label: 'هەموو', slug: 'all' }] },
  environment: { titleKurdish: 'ژینگە',         color: 'culture', subcategories: [{ label: 'هەموو', slug: 'all' }] },
  business:    { titleKurdish: 'بازرگانی',      color: 'navy',    subcategories: [{ label: 'هەموو', slug: 'all' }] },
  health:      { titleKurdish: 'تەندروستی',    color: 'blue',    subcategories: [{ label: 'هەموو', slug: 'all' }] },
  education:   { titleKurdish: 'خوێندن',        color: 'blue',    subcategories: [{ label: 'هەموو', slug: 'all' }] },
}

// Statiska placeholder-artiklar (4 kolumner × 2 rader = 8 kort)
function generateArticles(category: string) {
  return Array.from({ length: 8 }, (_, i) => ({
    id:          `${category}-${i + 1}`,
    headline:    getPlaceholderHeadline(category, i),
    kicker:      getCategoryKurdish(category),
    imageUrl:    getPlaceholderImage(i),
    author:      getPlaceholderAuthor(i),
    publishedAt: getPlaceholderTime(i),
    slug:        `${category}-article-${i + 1}`,
  }))
}

function getCategoryKurdish(cat: string): string {
  return KNOWN_CATEGORIES[cat]?.titleKurdish ?? cat
}

function getPlaceholderHeadline(cat: string, i: number): string {
  const headlines: Record<string, string[]> = {
    world:   [
      'دیپلۆماسی نێودەوڵەتی لە قۆناغێکی نوێدا',
      'ئەنجوومەنی ئەمنییەتی نەتەوەیەکگرتووەکان کۆدەبێتەوە',
      'ڕێکەوتنی ئاشتییانە لە بازنەی دیپلۆماتییەکاندا',
      'هەڵبژاردنی گرنگ لە دوو کۆمار بەیەکەوە',
      'سفیری نوێ بۆ ئەنقەرە ئامادە دەبێت',
      'ئیتتیفاقی نوێی ئابووری دامەزرا',
      'گفتوگۆی ئاگربەست دووبارە دەستی پێدەکات',
      'کۆمیسیۆنی نووسینی دەستووری بنەڕەت',
    ],
    science: [
      'دۆزینەوەی نوێ لە بەشی فیزیکی کوانتوم',
      'توێژینەوەی گەورە لەسەر دوایین گۆڕانکاریی ژینگە',
      'زانستمەندان ئامۆژگاری دەدەن دەربارەی تووند بوونەوەی گەرما',
      'تەلیسکۆپی فەزایی چیرۆکی نوێی ئاشکرا کرد',
      'دواچووی زیمنێوی لوتکەکان بەدواتر گۆڕا',
      'توێژینەوەی بیۆلۆجییەکان لە قۆناغی دووەمدا',
      'ئایا دەتوانین ڕووناکی مەریخ بخوێنینەوە؟',
      'خەمڵاندنی یەرزەلەرزەکانی داهاتوو',
    ],
    tech:    [
      'هۆشی دەستکرد تکنۆلۆجیای نوێی پێشنیار دەکات',
      'شیرکەتی گووگڵ ئامرازی AI نوێی ئاشکرا کرد',
      'مۆبایل و ئینتەرنێت لە ژیانی ڕۆژانەدا',
      'خەوەرنامەی داواکاریی زیرەکی دەستکرا',
      'ئامانجی هاردوێر بۆ ئەنجامدانی کاری پرسیارەکان',
      'تۆری 6G: ئایا ئامادەی داهاتووین؟',
      'ئایا کریپتۆ ئابووری ئاستە دەگاتە؟',
      'ئامرازە دیجیتاڵییەکان لە وانەخوێندندا',
    ],
  }
  const list = headlines[cat] ?? [
    `هەواڵی بەناوبانگ لە بوار — ${i + 1}`,
    `تازەترین گەشەپێدان لە بوار`,
    `شیکاری پشکنینی نوێ`,
    `گفتوگۆیەکی تایبەت لەگەڵ پسپۆری بوار`,
    `ڕاپۆرتی تایبەت بۆ خوێنەران`,
    `ئامارەکانی گرنگ بۆ ئەمسال`,
    `دەرئەنجامی توێژینەوەی دووپاتکراو`,
    `پێشبینییەکانی پسپۆرانی بوار`,
  ]
  return list[i] ?? `هەواڵی ${cat} — ${i + 1}`
}

function getPlaceholderImage(i: number): string {
  const images = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=240&fit=crop',
    'https://images.unsplash.com/photo-1608170825938-a8ea0305e4a8?w=400&h=240&fit=crop',
    'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=240&fit=crop',
    'https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=400&h=240&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=240&fit=crop',
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=400&h=240&fit=crop',
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=240&fit=crop',
    'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&h=240&fit=crop',
  ]
  return images[i % images.length]
}

function getPlaceholderAuthor(i: number): string {
  const authors = [
    'ژیان ئەحمەد', 'بەختیار کەریم', 'شیرین مستەفا', 'ئاراس عومەر',
    'دیلان حەسەن', 'سۆزدار ئیلیاس', 'هاوژین سەلیم', 'رووناک نادر',
  ]
  return authors[i % authors.length]
}

function getPlaceholderTime(i: number): string {
  const times = [
    '١ کاتژمێر پێش', '٣ کاتژمێر پێش', '٥ کاتژمێر پێش', '٨ کاتژمێر پێش',
    'دوێنێ', '٢ ڕۆژ پێش', '٣ ڕۆژ پێش', 'هەفتەیەک پێش',
  ]
  return times[i % times.length]
}

interface CategoryPageProps {
  params: { locale: string; category: string }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category, locale } = params
  const meta = KNOWN_CATEGORIES[category]

  // Kategorin finns inte — visa 404
  if (!meta) {
    notFound()
  }

  const articles = generateArticles(category)

  return (
    <>
      <TopStrip />

      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ padding: '12px 0 0' }}>
            <Link href={`/${locale}`} className="jiyan-masthead-logo">ژیان</Link>
          </div>
        </div>
      </header>

      <Navigation />

      <SectionHeader
        title={meta.titleKurdish}
        color={meta.color}
        subcategories={meta.subcategories.map((s, i) => ({ ...s, active: i === 0 }))}
      />

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)', padding: '32px 20px' }}>

          {/* 4-kolumns artikelgrid */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap:                 '24px',
            }}
          >
            {articles.map((article) => (
              <article key={article.id} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Bild */}
                <div style={{
                  position:     'relative',
                  width:        '100%',
                  aspectRatio:  '5/3',
                  marginBottom: '12px',
                  overflow:     'hidden',
                  borderRadius: '2px',
                }}>
                  <Image
                    src={article.imageUrl}
                    alt={article.headline}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>

                {/* Kicker */}
                <div style={{
                  fontSize:      '0.72rem',
                  fontWeight:    700,
                  color:         'var(--blue)',
                  marginBottom:  '6px',
                  textTransform: 'uppercase',
                }}>
                  {article.kicker}
                </div>

                {/* Rubrik */}
                <h2 style={{ flex: 1 }}>
                  <Link
                    href={`/${locale}/article/${article.slug}`}
                    className="jiyan-category-article-link"
                  >
                    {article.headline}
                  </Link>
                </h2>

                {/* Metadata */}
                <div style={{
                  marginTop: '10px',
                  fontSize:  '0.75rem',
                  color:     '#767676',
                  display:   'flex',
                  justifyContent: 'space-between',
                }}>
                  <span>{article.author}</span>
                  <span>{article.publishedAt}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Ladda mer */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              style={{
                background:   'transparent',
                border:       '2px solid var(--navy)',
                color:        'var(--navy)',
                padding:      '12px 36px',
                fontSize:     '0.88rem',
                fontWeight:   700,
                borderRadius: '3px',
                cursor:       'pointer',
                fontFamily:   'var(--sans)',
              }}
            >
              زیاتر بخوێنەرەوە
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}

// Generera statiska params för kända lokaler och kategorier
export function generateStaticParams() {
  const locales    = ['ckb', 'en', 'fa', 'kmr']
  const categories = Object.keys(KNOWN_CATEGORIES)
  return locales.flatMap(locale =>
    categories.map(category => ({ locale, category }))
  )
}
