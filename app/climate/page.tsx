// Jiyan ژیان — ئاووهەوا (Klimatsida)
export const dynamic = 'force-dynamic'
// Guardian-inspirerad layout med klimatdata, artiklar och lösningssektion

import { Navigation }       from '@/components/layout/Navigation'
import { TopStrip }         from '@/components/layout/TopStrip'
import { Footer }           from '@/components/layout/Footer'
import { ClimateHero }      from '@/components/climate/ClimateHero'
import { ClimateDataPanel } from '@/components/climate/ClimateDataPanel'
import { SolutionsSection } from '@/components/climate/SolutionsSection'

// ── HERO-ARTIKEL ──────────────────────────────────────────────────────────

const heroArticle = {
  headline:   'پلەی گەرمی زەوی لە مێژوویی بەرزترین ئاستی خۆیدایە — سەرۆکانی جیهان دەخوێنرێنەوە بۆ چارەیەکی فریا',
  standfirst:
    'وانەکانی ئەمساڵ نیشان دەدات کە گەرمبوونی گشتی زەوی لە ئاستی پێش-پیشەسازیدا ١٫٢ پلە بەرز بووەتەوە، و کوردستان یەکێکە لە ناوچەکانی ئاووهەوای ئاژاوەکارتر. پسپۆڕ دەپرسن: ئایا ئیتر هەنگاوێکی جێگیر هەیە؟',
  imageUrl:
    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=500&fit=crop',
  author:     'دامەزراوەی ئاووهەوای ژیان',
  date:       '٢١ی ئایار ٢٠٢٦',
  slug:       'global-temperature-record-kurdistan-climate-crisis',
  tempBadge:  '+2.1°C',
}

// ── داتا-پانێل ───────────────────────────────────────────────────────────

const climateStats = [
  {
    label:   'CO₂ — ئاستی دیاکسیدی کاربۆن لە هاوا',
    value:   '421',
    unit:    'ppm',
    trend:   'up' as const,
    note:    'بەرزترین ئاستی لە مێژووی تۆمارکراودا — نوێکردنەوەی ئایار ٢٠٢٦',
  },
  {
    label:   'گەرمبوونی گشتی — ئاستی ناوەرۆکی زەوی',
    value:   '+1.2',
    unit:    '°C',
    trend:   'up' as const,
    note:    'بەراورد لەگەڵ ئاستی پێش-پیشەسازی ١٨٥٠–١٩٠٠',
  },
  {
    label:   'ئەستووری یەخی ئارکتیک',
    value:   '72%',
    unit:    '',
    trend:   'down' as const,
    note:    'داهاتنەوەی یەخی ئارکتیک لە باری نەرمەوای سەرەتایدا کەمتر بووەتەوە',
  },
]

// ── ئارتیکل گرید ─────────────────────────────────────────────────────────

const climateArticles = [
  {
    id:          'cl-1',
    headline:    'زستانی بێ باران: کوردستان بۆ چوارەمین ساڵ دواجارانەی خۆشکا رووبەڕوو دەبێتەوە',
    kicker:      'زووبەکوو',
    imageUrl:    'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=260&fit=crop',
    author:      'ئازاد مستەفا',
    date:        '٢٠ی ئایار ٢٠٢٦',
    slug:        'drought-kurdistan-four-years',
  },
  {
    id:          'cl-2',
    headline:    'چیایەکانی زاگرۆس: خوڵی هەژاران ساڵ کە ئەمرۆ لە بەردەم ئاو دانەوەی داگیرکراو',
    kicker:      'هەژار خوڵ',
    imageUrl:    'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=400&h=260&fit=crop',
    author:      'شیرین کامالی',
    date:        '١٩ی ئایار ٢٠٢٦',
    slug:        'zagros-glaciers-melting-crisis',
  },
  {
    id:          'cl-3',
    headline:    'داگیرکراوانی دجلە و فورات: ئاوەڵانی تازە لە باشووری عێراق کە کچوکوڕی کوردیان دەبرێنە دەرەوە',
    kicker:      'ئاوەڵ',
    imageUrl:    'https://images.unsplash.com/photo-1562155955-1cb2d73488d7?w=400&h=260&fit=crop',
    author:      'ڕاوەز باوەر',
    date:        '١٨ی ئایار ٢٠٢٦',
    slug:        'tigris-euphrates-flooding-displacement',
  },
  {
    id:          'cl-4',
    headline:    'باڵوبوونەوەی مۆرەکانی مریشک لە باشووری کوردستان: چۆن گۆڕانی ئاووهەوا بەڵگەی سەلامەتی خۆراک دەمێنێت',
    kicker:      'ساوساوی خاک',
    imageUrl:    'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=400&h=260&fit=crop',
    author:      'ئارام ئەحمەد',
    date:        '١٦ی ئایار ٢٠٢٦',
    slug:        'sandstorms-kurdistan-food-security',
  },
]

// ── چارەسەرەکان ──────────────────────────────────────────────────────────

const solutionCards = [
  {
    icon:        '☀️',
    title:       'وزەی خۆر: کوردستان دەتوانێت تا ٢٠٣٥ ٤٠٪ی وزەی خۆی لە خۆری بگرێت',
    description: 'ئەنجامەکانی توێژینەوەی زانکۆی سلێمانی نیشان دەدات کە هەرێمی کوردستان شایستەی یەکێکە لە باشترین ناوچەکانی جیهان بۆ وزەی خۆر.',
    tag:         'وزەی خۆر',
    slug:        'solar-energy-kurdistan-2035',
  },
  {
    icon:        '💨',
    title:       'پرۆژەی بایی گەرمیان: ١٢٠ توربای باو دروست دەکرێن لە ناوچەی کووێستانی',
    description: 'هەولێری ئاووهەوا و وزەی سەوز ٢٠٠ ملیار دینار هاوکاری کرد بۆ پرۆژەیەکی باو کە ٣٠٠ هەزار خانووبەره بەرقی پاکی بۆ دابین دەکات.',
    tag:         'وزەی باو',
    slug:        'wind-energy-garmian-project',
  },
  {
    icon:        '🌲',
    title:       'دەریچەیەکی سەوز: دامەزراندنی ٥ ملیۆن دار لە کوردستان تا ٢٠٣٠',
    description: 'فەرمانبەرایەتی ژینگەی هەرێمی کوردستان ئامانجی دامەزراندنی ٥ ملیۆن دار ناوەخۆ هەیە لە چوارچێوەی پرۆگرامی دیکاربونیزەکردنی نیشتمانی.',
    tag:         'دامەزراندنی دار',
    slug:        'tree-planting-kurdistan-green-corridor',
  },
]

// ── پۆدکاست ──────────────────────────────────────────────────────────────

const podcastCards = [
  {
    id:       'pod-cl-1',
    title:    'ئاووهەوای کوردستان — بابەتی تایبەت لەگەڵ د. ئەحمەد سعید',
    episode:  'خشتەی ١٢',
    duration: '٤٨ خولەک',
  },
  {
    id:       'pod-cl-2',
    title:    'بەردەوامبوونی کشتوکاڵی کوردی لە بەردەم گۆڕانی ئاووهەوا',
    episode:  'خشتەی ١١',
    duration: '٣٩ خولەک',
  },
]

// ── PAGE COMPONENT ────────────────────────────────────────────────────────

export default function ClimatePage() {
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

      {/* Sektionshuvud — grön klimatfärg */}
      <div style={{ background: 'var(--climate)', padding: '0 20px' }}>
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
          <div className="jiyan-section-title">ئاووهەوا</div>
          <nav style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {[
              { label: 'هەموو', active: true },
              { label: 'زووبەکوو' },
              { label: 'ئاوەڵ' },
              { label: 'هەژار خوڵ' },
              { label: 'وزەی سەوز' },
              { label: 'ژینگە' },
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  color:          item.active ? '#fff' : 'rgba(255,255,255,0.8)',
                  fontSize:       '0.8rem',
                  padding:        '4px 12px',
                  borderRadius:   '999px',
                  fontWeight:     600,
                  background:     item.active ? 'rgba(255,255,255,0.25)' : 'transparent',
                  cursor:         'pointer',
                  whiteSpace:     'nowrap',
                }}
              >
                {item.label}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)', padding: '24px 20px' }}>

          {/* HERO */}
          <ClimateHero {...heroArticle} />

          {/* داتا-پانێل */}
          <ClimateDataPanel stats={climateStats} />

          {/* ئارتیکل گرید — 4 کارت */}
          <div style={{ borderTop: '3px solid var(--climate)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--climate)' }}>
                داوای تازە
              </div>
              <a href="/climate/all" style={{ fontSize: '0.78rem', color: 'var(--climate)', fontWeight: 600 }}>
                هەموو هەواڵەکان
              </a>
            </div>
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap:                 '20px',
              }}
            >
              {climateArticles.map((article) => (
                <a
                  key={article.id}
                  href={`/article/${article.slug}`}
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '180px', overflow: 'hidden', marginBottom: '10px' }}>
                    <img
                      src={article.imageUrl}
                      alt={article.headline}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--climate)', marginBottom: '5px' }}>
                    {article.kicker}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '0.92rem', fontWeight: 700, lineHeight: 1.45, marginBottom: '6px' }}>
                    {article.headline}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                    <span style={{ color: 'var(--climate)', fontWeight: 600 }}>{article.author}</span>
                    <span style={{ margin: '0 4px' }}>·</span>
                    <span>{article.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* کارتەی نەخشە */}
          <div
            style={{
              borderTop:    '3px solid var(--climate)',
              paddingTop:   '6px',
              marginBottom: '32px',
            }}
          >
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--climate)', marginBottom: '14px' }}>
              نەخشەی ئاووهەوایی کوردستان
            </div>
            <div
              style={{
                background:   '#0d1f14',
                borderRadius: '2px',
                padding:      '24px',
                height:       '320px',
                position:     'relative',
                overflow:     'hidden',
              }}
            >
              {/* SVG-kartsimulation */}
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 900 260"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: 'absolute', top: 0, left: 0 }}
              >
                {/* Bakgrundsnät */}
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <line
                    key={`h${i}`}
                    x1="0" y1={i * 52} x2="900" y2={i * 52}
                    stroke="rgba(255,255,255,0.06)" strokeWidth="1"
                  />
                ))}
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <line
                    key={`v${i}`}
                    x1={i * 112} y1="0" x2={i * 112} y2="260"
                    stroke="rgba(255,255,255,0.06)" strokeWidth="1"
                  />
                ))}

                {/* Datapunkter — klimathotspots */}
                {[
                  { cx: 200, cy: 130, r: 28, temp: '+2.4°C', label: 'هەولێر', color: '#ef4444' },
                  { cx: 380, cy: 90,  r: 22, temp: '+2.1°C', label: 'سلێمانی', color: '#f97316' },
                  { cx: 560, cy: 150, r: 35, temp: '+2.8°C', label: 'دهۆک',    color: '#dc2626' },
                  { cx: 720, cy: 110, r: 18, temp: '+1.9°C', label: 'کرکووک', color: '#eab308' },
                ].map((pt, i) => (
                  <g key={i}>
                    <circle
                      cx={pt.cx} cy={pt.cy} r={pt.r}
                      fill={pt.color} fillOpacity="0.35"
                      stroke={pt.color} strokeWidth="1.5"
                    />
                    <circle cx={pt.cx} cy={pt.cy} r="5" fill={pt.color} />
                    <text
                      x={pt.cx} y={pt.cy - pt.r - 8}
                      textAnchor="middle" fill="#fff"
                      fontSize="11" fontWeight="700"
                    >
                      {pt.temp}
                    </text>
                    <text
                      x={pt.cx} y={pt.cy + pt.r + 16}
                      textAnchor="middle" fill="rgba(255,255,255,0.7)"
                      fontSize="10"
                    >
                      {pt.label}
                    </text>
                  </g>
                ))}
              </svg>

              {/* Förklaring */}
              <div
                style={{
                  position:   'absolute',
                  bottom:     '16px',
                  right:      '16px',
                  background: 'rgba(0,0,0,0.65)',
                  padding:    '10px 14px',
                  borderRadius: '2px',
                  fontSize:   '0.72rem',
                  color:      'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ fontWeight: 700, color: '#fff', marginBottom: '4px' }}>ڕووکەش</div>
                {[
                  { color: '#dc2626', label: '+2.5°C زیاتر' },
                  { color: '#f97316', label: '+2.0 – 2.5°C' },
                  { color: '#eab308', label: '+1.5 – 2.0°C' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)' }}>
                سمولاسیۆنی داتا — نەخشەی ئەکچوەڵ لە بەرهەمدایە
              </div>
            </div>
          </div>

          {/* چارەسەرەکان */}
          <SolutionsSection cards={solutionCards} />

          {/* پۆدکاست-ستریپ */}
          <div style={{ borderTop: '3px solid var(--climate)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--climate)', marginBottom: '16px' }}>
              پۆدکاستی ئاووهەوا
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {podcastCards.map((pod) => (
                <a
                  key={pod.id}
                  href="/climate/podcast"
                  style={{
                    display:        'flex',
                    alignItems:     'center',
                    gap:            '14px',
                    background:     'var(--off)',
                    border:         '1px solid var(--border)',
                    padding:        '14px',
                    textDecoration: 'none',
                    color:          'inherit',
                    borderRadius:   '2px',
                  }}
                >
                  <div
                    style={{
                      width:           52,
                      height:          52,
                      borderRadius:    '50%',
                      background:      'var(--climate)',
                      display:         'flex',
                      alignItems:      'center',
                      justifyContent:  'center',
                      flexShrink:      0,
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 1a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"
                        fill="#fff"
                      />
                      <path
                        d="M19 10a7 7 0 0 1-14 0M12 19v4M8 23h8"
                        stroke="#fff" strokeWidth="2" strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--climate)', fontWeight: 700, marginBottom: '3px' }}>
                      {pod.episode} · {pod.duration}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '0.9rem', fontWeight: 700, lineHeight: 1.4 }}>
                      {pod.title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
