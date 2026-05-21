// Jiyan ژیان — Kultursida (کولتوور)
export const dynamic = 'force-dynamic'
// Speglar culture.html med alla sektioner:
//   - Hero (film + musik + böcker + konst)
//   - Film-kortrad
//   - Musiksektion (albungrid + listartiklar)
//   - Utställningsbanner (konst)
//   - Boksektion (bokhylla + listartiklar)
//   - TV/Radio-sektion (recensionskort)
//   - Teater/Performance (two-col lista)
//   - Åsiktsstrip
// I produktion hämtas data från Sanity CMS

import { Navigation }            from '@/components/layout/Navigation'
import { TopStrip }              from '@/components/layout/TopStrip'
import { Footer }                from '@/components/layout/Footer'
import { SectionHeader }         from '@/components/layout/SectionHeader'
import { CultureHero }           from '@/components/culture/CultureHero'
import { AlbumGrid }             from '@/components/culture/AlbumGrid'
import { BookShelf }             from '@/components/culture/BookShelf'
import { ExhibitionBanner }      from '@/components/culture/ExhibitionBanner'
import { ReviewCardGrid }        from '@/components/culture/ReviewCard'
import { CultureSectionBlock }   from '@/components/culture/CultureSectionBlock'
import { CultureOpinionStrip }   from '@/components/culture/CultureOpinionStrip'
import { CultureSidebar }        from '@/components/culture/CultureSidebar'

// ── STATISKA ARTIKELDATA (från culture.html) ──────────────────────────────

const heroArticle = {
  id:          'c-hero-1',
  headline:    '«سووتانی دار»: شاهەسەرێکی کوردی کە جەشنوارەی کان بە شۆک خستەوە و گیانی ئەمسالی دا بە سینەمای نێودەوڵەتی',
  standfirst:  'کارگێڕی ئەڵمانی-کوردی بۆیان کیلیچ فیلمێکی سەرسوڕمانی دروست کرد. چیرۆکی کچێک لە باشوری کوردستان کە دەستی دادوەریی بۆ دزیی گوندەکەی دەدات — لە ناو سینەمایی جیهاندا ئاوازێکی نوێی تووشی دەبین.',
  kicker:      '★★★★★ — فیلم',
  kickerType:  'film' as const,
  imageUrl:    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=420&fit=crop',
  author:      'پیتەر برەدشا',
  publishedAt: '٣ کاتژمێر پێش',
  slug:        'sotan-i-dar-cannes-kurdish-film',
}

const heroSideArticles = [
  {
    id:          'c-hero-2',
    headline:    'شیرین: ئەلبوومی «ئەو شەوانەی باران بارا» بانگەشەی دەدات ئاستێکی نوێی موزیکی فیوژنی کوردی-جازی',
    kicker:      '★★★★☆ — ئەلبووم',
    kickerType:  'music' as const,
    imageUrl:    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=220&fit=crop',
    author:      'لارا پەلتیەر',
    publishedAt: '٥ کاتژمێر پێش',
    slug:        'shirin-album-kurdish-jazz-fusion',
  },
  {
    id:          'c-hero-3',
    headline:    '«ساتەی هاوین»ی نرمین شێخ — ڕۆمانێکی کوردی کە ئەمساڵ بوکەر پرایزی بۆ دابرا کرد',
    kicker:      'کتێب',
    kickerType:  'books' as const,
    imageUrl:    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=220&fit=crop',
    author:      'ئالاین کۆوان',
    publishedAt: 'دوێنێ',
    slug:        'sati-hawin-nrmin-shekh-booker-prize',
  },
  {
    id:          'c-hero-4',
    headline:    'نمایشگاهی «گوڵ و باروت» لە تێیت مۆدەرن: دەنگی کوردستان لە ئەوروپادا دەغژرێتەوە',
    kicker:      'هونەر',
    kickerType:  'art' as const,
    author:      'جۆناتان جۆنز',
    publishedAt: 'دوێنێ',
    slug:        'gul-u-barut-tate-modern-kurdish-art',
  },
]

// ── فیلم ─────────────────────────────────────────────────────────────────

const filmArticles = [
  {
    id:          'film-1',
    headline:    '«دواین رۆشنایی»: دراما-سیاسییەکی فەرەنسی لەسەر هەوڵی دانیشتن لە باکووری ئەفریقا',
    kicker:      '★★★★☆ — سینەما',
    kickerType:  'film' as const,
    imageUrl:    'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=300&h=200&fit=crop',
    author:      'جۆردی وایت',
    publishedAt: '٤ ڕۆژ پێش',
    slug:        'last-light-french-drama',
  },
  {
    id:          'film-2',
    headline:    '«هەزار ئاوروو»: فیلمی گەشتی زمانێکی بووتی کە خۆی لەناو ئامبیشیۆنەکەیدا گم کرد',
    kicker:      '★★★☆☆ — سینەما',
    kickerType:  'film' as const,
    imageUrl:    'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=200&fit=crop',
    author:      'کلەر فۆی',
    publishedAt: '٥ ڕۆژ پێش',
    slug:        'hezar-awroo-film-review',
  },
  {
    id:          'film-3',
    headline:    '١٠ فیلمی باشی ئەمانەی کە لە ئەیپریلی ٢٠٢٦دا دەکرێنەوە لە شاشەکانی ئەوروپا',
    kicker:      'نەخشەی فیلم',
    kickerType:  'film' as const,
    imageUrl:    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=200&fit=crop',
    author:      'تیمی فیلمی ژیان',
    publishedAt: 'هەفتەیەک پێش',
    slug:        '10-films-april-2026-europe',
  },
  {
    id:          'film-4',
    headline:    'بۆیان کیلیچ: «فیلمم دەربارەی ئیرادەی مرۆڤییەتە، نەک تەنها دەربارەی کوردەواری»',
    kicker:      'گفتووگۆ',
    kickerType:  'film' as const,
    imageUrl:    'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=200&fit=crop',
    author:      'رۆیال یونگ',
    publishedAt: 'هەفتەیەک پێش',
    slug:        'boyan-kilic-interview',
  },
]

// ── موزیک ────────────────────────────────────────────────────────────────

const albums = [
  {
    id:       'alb-1',
    artist:   'شیرین',
    title:    '«ئەو شەوانەی باران بارا»',
    genre:    'کوردی-جاز-فیوژن',
    rating:   '★★★★★',
    imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
    slug:     'shirin-album-kurdish-jazz-fusion',
  },
  {
    id:       'alb-2',
    artist:   'سامی یووسف',
    title:    '«ئازادی»',
    genre:    'ئیندی-سووفی',
    rating:   '★★★★☆',
    imageUrl: 'https://images.unsplash.com/photo-1504898770365-14faca6a7320?w=300&h=300&fit=crop',
    slug:     'sami-yusuf-azadi-album',
  },
  {
    id:       'alb-3',
    artist:   'مشاری راشد',
    title:    '«ئەلبوومی ئەمساڵ»',
    genre:    'کلاسیکی نوێ',
    rating:   '★★★★☆',
    imageUrl: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?w=300&h=300&fit=crop',
    slug:     'mishary-rashid-new-album',
  },
  {
    id:       'alb-4',
    artist:   'دیمانه',
    title:    '«ژیان و باران»',
    genre:    'پۆپ-ئەلکترۆنیک',
    rating:   '★★★☆☆',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop',
    slug:     'dimane-jiyan-u-baran',
  },
]

const musicListArticles = [
  {
    id:          'music-1',
    headline:    'جەشنوارەی موزیکی کوردستانی ئستانبوڵ ١٤٠ هەزار تاماشاچی کێشایەوە لە سێ شەودا',
    kicker:      'کۆنسێرت',
    kickerType:  'music' as const,
    imageUrl:    'https://images.unsplash.com/photo-1501612780327-45045538702b?w=200&h=136&fit=crop',
    author:      'بەریوان بارزانی',
    publishedAt: '٢ ڕۆژ پێش',
    slug:        'kurdistan-music-festival-istanbul',
  },
  {
    id:          'music-2',
    headline:    'چۆن موزیکی تراد کوردی لە پلاتفۆرمە ستریمینگییەکاندا ئامادەیی گەمەڕۆیی دروست دەکات',
    kicker:      'تێرکردنەوە',
    kickerType:  'music' as const,
    imageUrl:    'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=136&fit=crop',
    author:      'مارتا سایمۆنز',
    publishedAt: '٣ ڕۆژ پێش',
    slug:        'kurdish-trad-music-streaming-rise',
  },
]

// ── کتێبەکان ─────────────────────────────────────────────────────────────

const books = [
  {
    id:       'book-1',
    title:    '«ساتەی هاوین»',
    author:   'نرمین شێخ',
    rating:   '★★★★★',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop',
    slug:     'sati-hawin-nrmin-shekh-booker-prize',
  },
  {
    id:       'book-2',
    title:    '«قوڵی شەو»',
    author:   'کاوەی مستەفا',
    rating:   '★★★★☆',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=200&h=300&fit=crop',
    slug:     'qulli-shaw-kawe-mustafa',
  },
  {
    id:       'book-3',
    title:    '«مێژووی شارستانییەت»',
    author:   'هێروی کریمی',
    rating:   '★★★★☆',
    imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200&h=300&fit=crop',
    slug:     'history-civilization-hirowe-karimi',
  },
  {
    id:       'book-4',
    title:    '«بیرووباوەڕی شیعر»',
    author:   'زەریاو حەسەن',
    rating:   '★★★★★',
    imageUrl: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=200&h=300&fit=crop',
    slug:     'philosophy-poetry-zaryaw-hasan',
  },
  {
    id:       'book-5',
    title:    '«زستانی دواین»',
    author:   'لانا ئەحمەد',
    rating:   '★★★☆☆',
    imageUrl: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=200&h=300&fit=crop',
    slug:     'zistani-dwain-lana-ahmed',
  },
]

const booksListArticles = [
  {
    id:          'books-1',
    headline:    '«ساتەی هاوین»: ڕۆمانی پێشماوە کە شیوازی داستاننووسی کوردی یەکسەر گۆڕی',
    kicker:      'ڕیویوو',
    kickerType:  'books' as const,
    imageUrl:    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&h=136&fit=crop',
    author:      'ئالاین کۆوان',
    publishedAt: 'دوێنێ',
    slug:        'sati-hawin-review-kurdish-fiction',
  },
  {
    id:          'books-2',
    headline:    'نرمین شێخ لە پۆدکاستی کتێبی ژیاندا: «کوردی نووسینم لەگەڵ ئینگلیزی نووسینم هیچ جیاوازییەکی نییە»',
    kicker:      'پۆدکاست',
    kickerType:  'books' as const,
    imageUrl:    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=200&h=136&fit=crop',
    author:      'ئانا کلارک',
    publishedAt: '٢ ڕۆژ پێش',
    slug:        'nrmin-shekh-jiyan-book-podcast',
  },
]

// ── تەلەڤیزیۆن و ڕادیۆ ───────────────────────────────────────────────────

const tvReviewCards = [
  {
    id:        'tv-1',
    type:      'دراما',
    typeColor: '#005f4e',
    rating:    '★★★★★',
    title:     '«دیوانی نەبووز»: زنجیرەی تازەی BBC Arabic کە ژیانی شارنشینانی ئەربیل لە نیوەی سەدەی بیستدا دەگێڕێتەوە',
    reviewer:  'دیرێک ئاداموون',
    date:      'دوێنێ',
    imageUrl:  'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=280&fit=crop',
    slug:      'diwani-nabuz-bbc-arabic-review',
  },
  {
    id:        'tv-2',
    type:      'داکیومێنتاری',
    typeColor: '#6b3fa0',
    rating:    '★★★★☆',
    title:     '«کوردستانی گەورە»: داکیومێنتاری Netflix لەسەر تێکەڵەیی کولتوورییەکانی چوار باشووری کوردستان',
    reviewer:  'بریجیت چافی',
    date:      '٣ ڕۆژ پێش',
    imageUrl:  'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=280&fit=crop',
    slug:      'greater-kurdistan-netflix-doc',
  },
  {
    id:        'tv-3',
    type:      'کۆمیدی',
    typeColor: '#c05800',
    rating:    '★★★☆☆',
    title:     '«خالووی ئەمریکا»: کۆمیدی-درامای تازەی Channel 4 لەسەر کۆچ و ناکۆکی کولتووریی',
    reviewer:  'جیمی کرولی',
    date:      '٤ ڕۆژ پێش',
    imageUrl:  'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400&h=280&fit=crop',
    slug:      'uncle-america-channel4-comedy-review',
  },
]

// ── شانۆ و پەرفۆرمانس ────────────────────────────────────────────────────

const theatreArticles = [
  {
    id:          'theatre-1',
    headline:    '«نامەیەک بۆ مام کۆرد»: بەرهەمی ئامبیشیۆزی تیاتری ناسیۆناڵی کوردستان لە سەهنەی لۆندەن',
    kicker:      '★★★★★ — شانۆ',
    kickerType:  'theatre' as const,
    imageUrl:    'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=200&h=136&fit=crop',
    author:      'مایکل بیلینگتن',
    publishedAt: 'دوێنێ',
    slug:        'namayak-bo-mam-kord-london-theatre',
  },
  {
    id:          'theatre-2',
    headline:    'جەشنوارەی تیاتری ئەدینبرای ٢٠٢٦: باشوری کوردستان دەبێتە وڵاتی مێوانداری تایبەت',
    kicker:      'جەشن',
    kickerType:  'theatre' as const,
    author:      'ئینیا کوانتاڵ',
    publishedAt: '٢ ڕۆژ پێش',
    slug:        'edinburgh-festival-2026-kurdistan-guest',
  },
  {
    id:          'theatre-3',
    headline:    'کۆمپۆزیتێکی کوردی ئۆپیرایەکی یەکەمی دروست دەکات — گفتوگۆ لەگەڵ شێرکۆ کریمی',
    kicker:      'ئۆپیرا',
    kickerType:  'theatre' as const,
    imageUrl:    'https://images.unsplash.com/photo-1518834107812-67b0b7c58875?w=200&h=136&fit=crop',
    author:      'رووث لالی',
    publishedAt: '٣ ڕۆژ پێش',
    slug:        'kurdish-composer-first-opera-interview',
  },
  {
    id:          'theatre-4',
    headline:    'سیستەمی سەما لە تیاتری کلاسیکیی ئەوروپا: چۆن هونەری کوردی چاوی دوای کارزارێکی ٢٠ ساڵی کردەوە',
    kicker:      'سەمای کلاسیکی',
    kickerType:  'theatre' as const,
    author:      'ڤانیا مانووئیل',
    publishedAt: '٤ ڕۆژ پێش',
    slug:        'sama-kurdish-dance-european-theatre',
  },
]

// ── ڕای کەسی ────────────────────────────────────────────────────────────

const cultureOpinions = [
  {
    initials:    'PB',
    authorName:  'پیتەر برەدشا',
    avatarColor: '#8b0000',
    headline:    '«سینەمای کوردی دیواری کەمیاتی شکاند — کان ٢٠٢٦ تەنها دەستپێکە»',
    slug:        'kurdish-cinema-cannes-2026-opinion',
  },
  {
    initials:    'LL',
    authorName:  'لارا لاپۆینتی',
    avatarColor: '#6b3fa0',
    headline:    '«موزیکی کوردی لە ستریمینگدا ٣٨٠٪ گەورەتر بووە — ئەمرۆ نووسینم لە بێدەنگیی لاس ئەنجیلس دەژینم»',
    slug:        'kurdish-music-streaming-380-percent-opinion',
  },
  {
    initials:    'AC',
    authorName:  'ئالاین کۆوان',
    avatarColor: '#c05800',
    headline:    '«ئەگەر نرمین شێخ ئەمساڵ بوکەر نەبوو، ئەوا کۆمیتەی بوکەر نەفامیوە ئایندەی داستان بۆ کوینە»',
    slug:        'nrmin-shekh-booker-prize-opinion',
  },
]

// ── سایدبار ──────────────────────────────────────────────────────────────

const mostViewedCulture = [
  { id: 'mv-1', headline: '«سووتانی دار»: فیلمی کوردی کە جەشنوارەی کان بە شۆک خستەوە', slug: 'sotan-i-dar-cannes-kurdish-film' },
  { id: 'mv-2', headline: 'شیرین — ئەلبوومی «ئەو شەوانەی باران بارا» بانگەشەی دەدات ئاستێکی نوێ', slug: 'shirin-album-kurdish-jazz-fusion' },
  { id: 'mv-3', headline: 'نمایشگاهی «گوڵ و باروت» لە تێیت مۆدەرن: دەنگی کوردستان دەغژرێتەوە', slug: 'gul-u-barut-tate-modern-kurdish-art' },
  { id: 'mv-4', headline: '«ساتەی هاوین»ی نرمین شێخ — ڕۆمانی کوردی کە بوکەر پرایزی بۆ دابرا کرد', slug: 'sati-hawin-nrmin-shekh-booker-prize' },
  { id: 'mv-5', headline: '«نامەیەک بۆ مام کۆرد»: شانۆی ئامبیشیۆزی تیاتری ناسیۆناڵی کوردستان', slug: 'namayak-bo-mam-kord-london-theatre' },
  { id: 'mv-6', headline: 'جەشنوارەی موزیکی کوردستانی ئستانبوڵ ١٤٠ هەزار تاماشاچی کێشایەوە', slug: 'kurdistan-music-festival-istanbul' },
]

const comingItems = [
  { date: '١ ئەیپ', text: '«سووتانی دار» دێتە سینەماکانی ئەوروپا', slug: 'sotan-i-dar-cannes-kurdish-film' },
  { date: '٥ ئەیپ', text: 'کۆنسێرتی شیرین — ئاڵپ هال، لۆندەن' },
  { date: '١٢ ئەیپ', text: 'نمایشگاهی «گوڵ و باروت» کرایەوە — تێیت مۆدەرن', slug: 'gul-u-barut-tate-modern-kurdish-art' },
  { date: '١٨ ئەیپ', text: '«نامەیەک بۆ مام کۆرد» — تیاتری نیو ئەمبی، لۆندەن', slug: 'namayak-bo-mam-kord-london-theatre' },
  { date: '٢٥ ئەیپ', text: 'پۆدکاستی نرمین شێخ لە BBC Radio 4', slug: 'nrmin-shekh-jiyan-book-podcast' },
]

// ── PAGE COMPONENT ────────────────────────────────────────────────────────

export default function CulturePage() {
  return (
    <>
      {/* Topplist */}
      <TopStrip />

      {/* Header med logotyp */}
      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '12px 0 0' }}>
            <div>
              <a href="/" className="jiyan-masthead-logo">ژیان</a>
              <div className="jiyan-masthead-date" suppressHydrationWarning>
                چوارشەممە، ٢١ی ئایار ٢٠٢٦
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Huvudnavigation — "کولتوور" markeras som aktiv via pathname */}
      <Navigation />

      {/* Kultur-sektionshuvud med grön bakgrund och undernavigering */}
      <SectionHeader
        title="کولتوور"
        color="culture"
        subcategories={[
          { label: 'هەموو',          slug: 'all',      active: true },
          { label: 'فیلم',           slug: 'film' },
          { label: 'موزیک',          slug: 'music' },
          { label: 'تەلەڤیزیۆن',    slug: 'tv' },
          { label: 'کتێبەکان',       slug: 'books' },
          { label: 'هونەر',          slug: 'art' },
          { label: 'شانۆ',           slug: 'theatre' },
          { label: 'یاریەکان',       slug: 'games' },
          { label: 'پۆدکاست',        slug: 'podcast' },
        ]}
      />

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '0 32px', padding: '24px 0' }}
            className="content-grid"
          >
            {/* Huvudinnehåll */}
            <div>

              {/* ── HERO ── */}
              <CultureHero
                heroArticle={heroArticle}
                sideArticles={heroSideArticles}
              />

              {/* ── فیلم ── */}
              <CultureSectionBlock
                title="فیلم"
                category="film"
                articles={filmArticles}
                layout="card-row"
              />

              {/* ── موزیک — albumgrid + listartiklar ── */}
              <div style={{ borderTop: '3px solid #6b3fa0', paddingTop: '6px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: '#6b3fa0', marginBottom: '14px' }}>
                  موزیک
                </div>
                <AlbumGrid albums={albums} />
                {/* Musikartiklar i two-col */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {musicListArticles.map((article) => (
                    <a
                      key={article.id}
                      href={`/article/${article.slug}`}
                      style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}
                    >
                      {article.imageUrl && (
                        <div style={{ position: 'relative', width: '100px', height: '68px', flexShrink: 0, overflow: 'hidden' }}>
                          <img src={article.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}
                      <div>
                        <div style={{ color: '#6b3fa0', fontSize: '0.75rem', fontWeight: 700, marginBottom: '3px' }}>{article.kicker}</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.45 }}>{article.headline}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px' }}>
                          <span style={{ color: '#6b3fa0', fontWeight: 600 }}>{article.author}</span>
                          <span style={{ margin: '0 4px' }}>·</span>
                          <span>{article.publishedAt}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* ── نمایشگاه هونەر ── */}
              <ExhibitionBanner
                tag="نمایشگاهی تایبەت · تێیت مۆدەرن، لۆندەن"
                title="گوڵ و باروت: هونەری نوێی کوردستان لە ئەوروپادا"
                meta="هەتا ٣٠ی تیرمەه ٢٠٢٦ · چوارشەممە–یەکشەممە، ١٠ بەیانی–٦ ئێوارە · چوونە ژووردا بەخۆڕایییە"
                imageUrl="https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=1300&h=350&fit=crop"
                href="/article/gul-u-barut-tate-modern-kurdish-art"
              />

              {/* ── کتێبەکان — bokhylla + listartiklar ── */}
              <div style={{ borderTop: '3px solid #c05800', paddingTop: '6px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: '#c05800', marginBottom: '14px' }}>
                  کتێبەکان
                </div>
                <BookShelf books={books} />
                {/* Boklista two-col */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {booksListArticles.map((article) => (
                    <a
                      key={article.id}
                      href={`/article/${article.slug}`}
                      style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border)', textDecoration: 'none', color: 'inherit' }}
                    >
                      {article.imageUrl && (
                        <div style={{ position: 'relative', width: '100px', height: '68px', flexShrink: 0, overflow: 'hidden' }}>
                          <img src={article.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}
                      <div>
                        <div style={{ color: '#c05800', fontSize: '0.75rem', fontWeight: 700, marginBottom: '3px' }}>{article.kicker}</div>
                        <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.45 }}>{article.headline}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginTop: '4px' }}>
                          <span style={{ color: '#c05800', fontWeight: 600 }}>{article.author}</span>
                          <span style={{ margin: '0 4px' }}>·</span>
                          <span>{article.publishedAt}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* ── تەلەڤیزیۆن و ڕادیۆ ── */}
              <div style={{ borderTop: '3px solid #005f4e', paddingTop: '6px', marginBottom: '24px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: '#005f4e', marginBottom: '14px' }}>
                  تەلەڤیزیۆن و ڕادیۆ
                </div>
                <ReviewCardGrid cards={tvReviewCards} />
              </div>

              {/* ── شانۆ و پەرفۆرمانس ── */}
              <CultureSectionBlock
                title="شانۆ و پەرفۆرمانس"
                category="theatre"
                articles={theatreArticles}
                layout="two-col"
              />

              {/* ── ڕای کەسی ── */}
              <CultureOpinionStrip opinions={cultureOpinions} />

            </div>{/* /main-content */}

            {/* Sidopanel */}
            <aside className="jiyan-sidebar">
              <CultureSidebar
                mostViewed={mostViewedCulture}
                comingItems={comingItems}
              />
            </aside>

          </div>
        </div>
      </main>

      {/* Sidfot */}
      <Footer />
    </>
  )
}
