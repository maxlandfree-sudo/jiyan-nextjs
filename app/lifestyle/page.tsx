// Jiyan ژیان — ژیانی ڕۆژانە (Livsstilssida)
export const dynamic = 'force-dynamic'
// Guardian Life & Style-inspirerad layout

import { Navigation }     from '@/components/layout/Navigation'
import { TopStrip }       from '@/components/layout/TopStrip'
import { Footer }         from '@/components/layout/Footer'
import { LifestyleHero }  from '@/components/lifestyle/LifestyleHero'
import { CategoryTabs }   from '@/components/lifestyle/CategoryTabs'
import { RecipeCard }     from '@/components/lifestyle/RecipeCard'
import { QuizWidget }     from '@/components/lifestyle/QuizWidget'

// ── HERO ──────────────────────────────────────────────────────────────────

const heroArticle = {
  headline:   'بۆچی ژنانی کوردستان ئیمرۆ پێشەنگی شۆڕشێکی ئاسوودەی یان دەکەن — و ئایا دنیا تەماشا دەکات؟',
  standfirst:
    'نووسەری ژیان ئێوارێک لەگەڵ پێنج ژنی کوردی دەنووسێت کە ڕووی ئیقتیادییان گۆڕاوە، خانووبەرەی ئازادیان ساز کردووە، و ئیمرۆ ئەمریکا، ئەوروپا، و ئەرب هاوهێڵ بکردن. ئایا ژیانی ڕۆژانەی کوردی ئیمرۆ چییە؟',
  imageUrl:   'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=500&fit=crop',
  author:     'ناستێرن مجید',
  date:       '٢١ی ئایار ٢٠٢٦',
  tag:        'تایبەت',
  slug:       'kurdish-women-lifestyle-revolution-2026',
}

// ── کاتیگۆری ─────────────────────────────────────────────────────────────

const categories = [
  { label: 'خواردن',    icon: '🍽️', slug: 'food' },
  { label: 'تەندروستی', icon: '🧘', slug: 'health' },
  { label: 'مۆد',       icon: '👗', slug: 'fashion' },
  { label: 'گەشت',      icon: '✈️', slug: 'travel' },
  { label: 'ژن',        icon: '♀️', slug: 'women' },
]

// ── ڕیسپی ─────────────────────────────────────────────────────────────────

const recipes = [
  {
    title:      'دۆلمەی دەشتی کوردی — ڕیسپیی دایکم',
    imageUrl:   'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop',
    cookTime:   '١ کاتژمێر ٤٠ خولەک',
    difficulty: 'ناوەند' as const,
    author:     'شانیا ئەحمەد',
    slug:       'dolma-traditional-kurdish-recipe',
  },
  {
    title:      'کاپووچینۆی کوردی لەگەڵ ہیل و دارچین',
    imageUrl:   'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=260&fit=crop',
    cookTime:   '١٥ خولەک',
    difficulty: 'ئاسان' as const,
    author:     'ئاوات کریمی',
    slug:       'kurdish-cardamom-cappuccino',
  },
  {
    title:      'ئاشی قوزی باشوور — تاوەی هاوینی کوردستانی ئیراقی',
    imageUrl:   'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=260&fit=crop',
    cookTime:   '٢ کاتژمێر ٣٠ خولەک',
    difficulty: 'قورس' as const,
    author:     'رووناک حسن',
    slug:       'ash-ghoozi-iraqi-kurdish-lamb-dish',
  },
]

// ── تەندروستی ────────────────────────────────────────────────────────────

const healthArticles = [
  {
    id:       'h1',
    headline: 'ئایا یۆگای سۆفیا واقع‌بینانەیە؟ زانایانی کوردستان وەڵام دەدەنەوە',
    tag:      'یۆگا',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=200&h=130&fit=crop',
    author:   'د. ئازیز کریمی',
    date:     '٢٠ی ئایار',
    slug:     'yoga-kurdistan-health-study',
  },
  {
    id:       'h2',
    headline: 'تندروستی ذهنی: ١٠ کارتێکی کوردی که نەختانە ئارامیت دەدات',
    tag:      'تەندروستی ذهنی',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=130&fit=crop',
    author:   'پیشتیوان حسینی',
    date:     '١٩ی ئایار',
    slug:     'mental-health-kurdish-practices',
  },
  {
    id:       'h3',
    headline: 'چارەسەری تراد کوردی: ئایا شیوازەکانی ڕووبەرووبوون لەگەڵ دەردی بیستی دواین سەدەی ئالوگۆڕ کرد؟',
    tag:      'دەرمانی گەشی',
    imageUrl: 'https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=200&h=130&fit=crop',
    author:   'شوکریە حبیب',
    date:     '١٧ی ئایار',
    slug:     'kurdish-traditional-medicine-revival',
  },
  {
    id:       'h4',
    headline: 'ڕووکاری خەو: چەند خولەک وشتن لەسەر تۆ کارتێکی بۆ کەم کردنەوەی ستریس',
    tag:      'خەو و ئارامیت',
    author:   'د. لانا سەعدی',
    date:     '١٦ی ئایار',
    slug:     'sleep-hygiene-stress-reduction-kurdish',
  },
]

// ── گەشت ─────────────────────────────────────────────────────────────────

const travelFeature = {
  headline:    '١٠ شوێنی کوردستان که پێویستە یەک جار بچیتەوە',
  standfirst:  'لە قەڵای شارەزووری سلێمانی تا دڵی چیایەکانی ئەمەدییەی دهۆک — تیمی گەشتی ژیان لیستێکی بەرکردنی دەکات.',
  imageUrl:    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&h=380&fit=crop',
  author:      'ڕاوێژکاری گەشتی ژیان',
  date:        '١٨ی ئایار ٢٠٢٦',
  slug:        '10-places-kurdistan-must-visit',
}

// ── مۆد ──────────────────────────────────────────────────────────────────

const fashionImages = [
  {
    id:       'f1',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=400&fit=crop',
    alt:      'مۆدی کوردی-ئەوروپی',
    label:    'کۆلێکشنی هاوین ٢٠٢٦',
  },
  {
    id:       'f2',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
    alt:      'جلی کوردی نوێ',
    label:    'دیزاینی ناخۆشی',
  },
  {
    id:       'f3',
    imageUrl: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop',
    alt:      'فاشنی ئێران-کوردستان',
    label:    'ئاراستەی شیکی',
  },
  {
    id:       'f4',
    imageUrl: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
    alt:      'فاشنی گیانەوەر',
    label:    'نوێترین ترێند',
  },
]

// ── PAGE COMPONENT ────────────────────────────────────────────────────────

export default function LifestylePage() {
  return (
    <>
      <TopStrip />

      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '12px 0 0' }}>
            <div>
              <a href="/" className="jiyan-masthead-logo">ژیان</a>
              <div className="jiyan-masthead-date" suppressHydrationWarning>
                پێنجشەممە، ٢١ی ئایار ٢٠٢٦
              </div>
            </div>
          </div>
        </div>
      </header>

      <Navigation />

      {/* Sektionshuvud — terrakotta */}
      <div style={{ background: 'var(--lifestyle)', padding: '0 20px' }}>
        <div
          style={{
            maxWidth:       'var(--max-width)',
            margin:         '0 auto',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            padding:        '12px 0',
          }}
        >
          <div className="jiyan-section-title">ژیانی ڕۆژانە</div>
          <nav style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {categories.map((cat, i) => (
              <a
                key={i}
                href={`/lifestyle?cat=${cat.slug}`}
                style={{
                  color:        'rgba(255,255,255,0.85)',
                  fontSize:     '0.8rem',
                  padding:      '4px 12px',
                  whiteSpace:   'nowrap',
                  fontWeight:   600,
                  textDecoration: 'none',
                }}
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)', padding: '24px 20px' }}>

          {/* HERO */}
          <LifestyleHero {...heroArticle} />

          {/* کاتیگۆری ئایکۆن رادیف */}
          <CategoryTabs categories={categories} />

          {/* خواردن — 3 ڕیسپی کارت */}
          <div style={{ borderTop: '3px solid var(--lifestyle)', paddingTop: '6px', marginBottom: '32px', marginTop: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--lifestyle)' }}>
                خواردن
              </div>
              <a href="/lifestyle/food" style={{ fontSize: '0.78rem', color: 'var(--lifestyle)', fontWeight: 600 }}>
                هەموو ڕیسپیەکان
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {recipes.map((r, i) => <RecipeCard key={i} {...r} />)}
            </div>
          </div>

          {/* تەندروستی */}
          <div style={{ borderTop: '3px solid var(--lifestyle)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--lifestyle)' }}>
                تەندروستی
              </div>
              <a href="/lifestyle/health" style={{ fontSize: '0.78rem', color: 'var(--lifestyle)', fontWeight: 600 }}>
                زیاتر
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {healthArticles.map((art) => (
                <a
                  key={art.id}
                  href={`/article/${art.slug}`}
                  style={{ display: 'flex', gap: '12px', textDecoration: 'none', color: 'inherit', padding: '12px 0', borderBottom: '1px solid var(--border)' }}
                >
                  {art.imageUrl && (
                    <div style={{ position: 'relative', width: '120px', height: '80px', flexShrink: 0, overflow: 'hidden' }}>
                      <img src={art.imageUrl} alt={art.headline} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--lifestyle)', marginBottom: '4px' }}>{art.tag}</div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.45, marginBottom: '5px' }}>{art.headline}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--lifestyle)', fontWeight: 600 }}>{art.author}</span>
                      <span style={{ margin: '0 4px' }}>·</span>
                      <span>{art.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* گەشت — Bred feature */}
          <div style={{ borderTop: '3px solid var(--lifestyle)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--lifestyle)', marginBottom: '14px' }}>
              گەشت
            </div>
            <a
              href={`/article/${travelFeature.slug}`}
              style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '340px', overflow: 'hidden', marginBottom: '14px' }}>
                <img
                  src={travelFeature.imageUrl}
                  alt={travelFeature.headline}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div
                  style={{
                    position:  'absolute',
                    bottom:    0,
                    left:      0,
                    right:     0,
                    padding:   '60px 20px 20px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize:   '1.55rem',
                      fontWeight: 700,
                      color:      '#fff',
                      lineHeight: 1.35,
                    }}
                  >
                    {travelFeature.headline}
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '0.95rem', color: '#444', lineHeight: 1.7, marginBottom: '8px' }}>
                {travelFeature.standfirst}
              </p>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                <span style={{ color: 'var(--lifestyle)', fontWeight: 600 }}>{travelFeature.author}</span>
                <span>·</span>
                <span>{travelFeature.date}</span>
              </div>
            </a>
          </div>

          {/* مۆد — 4 کارت کوادرات */}
          <div style={{ borderTop: '3px solid var(--lifestyle)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--lifestyle)' }}>
                مۆد
              </div>
              <a href="/lifestyle/fashion" style={{ fontSize: '0.78rem', color: 'var(--lifestyle)', fontWeight: 600 }}>
                زیاتر
              </a>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
              {fashionImages.map((img) => (
                <a
                  key={img.id}
                  href="/lifestyle/fashion"
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden', marginBottom: '8px' }}>
                    <img
                      src={img.imageUrl}
                      alt={img.alt}
                      style={{
                        position: 'absolute', top: 0, left: 0,
                        width: '100%', height: '100%', objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--lifestyle)', lineHeight: 1.4 }}>
                    {img.label}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* کوئیز ویجێت */}
          <QuizWidget />

        </div>
      </main>

      <Footer />
    </>
  )
}
