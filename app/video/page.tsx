// Jiyan ژیان — ڤیدیۆ (Videosida)
export const dynamic = 'force-dynamic'

import { Navigation }  from '@/components/layout/Navigation'
import { TopStrip }    from '@/components/layout/TopStrip'
import { Footer }      from '@/components/layout/Footer'
import { VideoPlayer } from '@/components/video/VideoPlayer'
import { VideoGrid }   from '@/components/video/VideoGrid'
import { LiveSection } from '@/components/video/LiveSection'

// ── FEATURED VIDEO ────────────────────────────────────────────────────────

const featuredVideo = {
  title:        'گفتووگۆیەکی تایبەت لەگەڵ سەرۆک وەزیران — پرسیارە ئاشکراکانی ژیان',
  duration:     '42:17',
  thumbnailUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=675&fit=crop',
  category:     'تایبەت',
}

// ── VIDEO GRID (2×3) ──────────────────────────────────────────────────────

const gridVideos = [
  {
    id:           'v1',
    title:        'ئاووهەوا لە کوردستان: هەزاران کس دەچنە دەستی زووبەکوو',
    thumbnailUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&h=340&fit=crop',
    duration:     '08:34',
    category:     'ژینگە',
    date:         '٢١ی ئایار',
    slug:         'climate-drought-kurdistan-video',
  },
  {
    id:           'v2',
    title:        'فیلمی «سووتانی دار» لە کان — گفتووگۆی کارگێڕ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=340&fit=crop',
    duration:     '14:22',
    category:     'کولتوور',
    date:         '٢٠ی ئایار',
    slug:         'sotan-i-dar-cannes-interview-video',
  },
  {
    id:           'v3',
    title:        'مانگرتنی مامۆستایان لە سلێمانی — ڕاپۆرتی تایبەت',
    thumbnailUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=340&fit=crop',
    duration:     '06:48',
    category:     'کۆمەڵایەتی',
    date:         '١٩ی ئایار',
    slug:         'teachers-strike-sulaymaniyah-video',
  },
  {
    id:           'v4',
    title:        'دیداری ئەوروپایی: گفتووگۆ لەگەڵ دیپلۆماتی کوردستانی',
    thumbnailUrl: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=600&h=340&fit=crop',
    duration:     '19:05',
    category:     'پۆلیتیکا',
    date:         '١٨ی ئایار',
    slug:         'eu-kurdistan-diplomat-interview-video',
  },
  {
    id:           'v5',
    title:        'وەرزشی کوردستان: ئیبراهیم پرلەکی بۆ بوندێزلیگا',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=340&fit=crop',
    duration:     '05:12',
    category:     'وەرزش',
    date:         '١٧ی ئایار',
    slug:         'kurdish-football-bundesliga-video',
  },
  {
    id:           'v6',
    title:        'خواردنی کوردستانی: کتێبی ڕیسپیی نوێ لە لۆندەن',
    thumbnailUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=340&fit=crop',
    duration:     '11:57',
    category:     'ژیانی ڕۆژانە',
    date:         '١٦ی ئایار',
    slug:         'kurdish-cookbook-london-launch-video',
  },
]

// ── داکیومێنتاری ──────────────────────────────────────────────────────────

const documentaries = [
  {
    id:           'doc1',
    title:        'ژیانی چیا: یەک ساڵ لەگەڵ گوندنشینانی باشوری کوردستان',
    description:  'زانینارەکانی ژیان لە چیایەکانی زاگرۆسدا مانەوە و ژیانی ڕۆژانەی خەڵکی گوند تۆمار کردووە — لەگەڵ قژی ئاووهەوا، کچوکوڕ، و بەردەوامبوون.',
    duration:     '58:30',
    thumbnailUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=500&h=320&fit=crop',
    date:         '٢١ی ئایار ٢٠٢٦',
    slug:         'mountain-life-south-kurdistan-documentary',
  },
  {
    id:           'doc2',
    title:        'دیاسپۆرای کوردی: ژیانی نێوان دوو جیهان',
    description:  'داکیومێنتارییەکی زۆر-جۆرە کە دەستپێکردوویەتی کۆچکردنی کوردان ڕادەگرێت، لەگەڵ چۆن نەوەی نوێ ئایدینتیتی خۆی لە ئەوروپادا دڵنیاکردەوەی دەخوازێت.',
    duration:     '74:00',
    thumbnailUrl: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=500&h=320&fit=crop',
    date:         '١٤ی ئایار ٢٠٢٦',
    slug:         'kurdish-diaspora-documentary',
  },
  {
    id:           'doc3',
    title:        'دووگانەی دجلە: ئاو، سیاسەت، و هۆکاری خۆراک لە ناوچەی کوردستان',
    description:  'داکیومێنتارییەکی تێرکردنەوە لەسەر قژی ئاوی دجلە لە کوردستان — لەگەڵ فیلمسازانی شارازا لەسەر ژینگەی ئاوی، کشتوکاڵ، و دیپلۆماسی.',
    duration:     '48:15',
    thumbnailUrl: 'https://images.unsplash.com/photo-1562155955-1cb2d73488d7?w=500&h=320&fit=crop',
    date:         '٧ی ئایار ٢٠٢٦',
    slug:         'tigris-documentary-water-kurdistan',
  },
]

// ── LIVE STREAMS ──────────────────────────────────────────────────────────

const liveStreams = [
  {
    id:          'live1',
    title:       'ڕووداوی ڕاستەوخۆ: دانیشتنی پەرلەمانی کوردستان — بابەتی بودجەی ئاووهەوا',
    viewers:     '١٢,٤٠٠',
    thumbnailUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&h=394&fit=crop',
  },
  {
    id:          'live2',
    title:       'کۆنفرانسی زانستی: گۆڕانی ئاووهەوا و داهاتووی کشتوکاڵ لە کوردستان',
    viewers:     '٣,٨٠٠',
    thumbnailUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=394&fit=crop',
  },
]

// ── PAGE COMPONENT ────────────────────────────────────────────────────────

export default function VideoPage() {
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

      {/* Sektionshuvud — mörkröd */}
      <div style={{ background: 'var(--video)', padding: '0 20px' }}>
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
          <div className="jiyan-section-title">ڤیدیۆ</div>
          <nav style={{ display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
            {['هەموو', 'هەواڵ', 'ژینگە', 'کولتوور', 'وەرزش', 'داکیومێنتاری', 'ڕاستەوخۆ'].map((label, i) => (
              <span
                key={i}
                style={{
                  color:        i === 0 ? '#fff' : 'rgba(255,255,255,0.8)',
                  fontSize:     '0.8rem',
                  padding:      '4px 12px',
                  borderRadius: '999px',
                  fontWeight:   600,
                  background:   i === 0 ? 'rgba(255,255,255,0.2)' : 'transparent',
                  cursor:       'pointer',
                  whiteSpace:   'nowrap',
                }}
              >
                {label}
              </span>
            ))}
          </nav>
        </div>
      </div>

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)', padding: '24px 20px' }}>

          {/* FEATURED VIDEO */}
          <div style={{ borderTop: '3px solid var(--video)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--video)', marginBottom: '14px' }}>
              ڤیدیۆی تایبەت
            </div>
            <VideoPlayer {...featuredVideo} />
            <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '4px' }}>
              <span style={{ color: 'var(--video)', fontWeight: 700 }}>{featuredVideo.category}</span>
              <span style={{ margin: '0 6px' }}>·</span>
              <span>{featuredVideo.duration}</span>
            </div>
          </div>

          {/* VIDEO GRID 2×3 */}
          <div style={{ borderTop: '3px solid var(--video)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '18px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--video)' }}>
                داوای تازە
              </div>
              <a href="/video/all" style={{ fontSize: '0.78rem', color: 'var(--video)', fontWeight: 600 }}>
                هەموو ڤیدیۆکان
              </a>
            </div>
            <VideoGrid videos={gridVideos} />
          </div>

          {/* داکیومێنتاری — horisontella kort */}
          <div style={{ borderTop: '3px solid var(--video)', paddingTop: '6px', marginBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--video)', marginBottom: '16px' }}>
              داکیومێنتاری
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {documentaries.map((doc) => (
                <a
                  key={doc.id}
                  href={`/video/${doc.slug}`}
                  style={{
                    display:        'grid',
                    gridTemplateColumns: '260px 1fr',
                    gap:            '18px',
                    textDecoration: 'none',
                    color:          'inherit',
                    alignItems:     'start',
                    padding:        '12px 0',
                    borderBottom:   '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      position:     'relative',
                      width:        '100%',
                      height:       '150px',
                      overflow:     'hidden',
                      background:   '#111',
                    }}
                  >
                    <img
                      src={doc.thumbnailUrl}
                      alt={doc.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                    />
                    <div
                      style={{
                        position:        'absolute',
                        top:             '50%',
                        left:            '50%',
                        transform:       'translate(-50%, -50%)',
                        width:           40,
                        height:          40,
                        borderRadius:    '50%',
                        background:      'rgba(255,255,255,0.88)',
                        display:         'flex',
                        alignItems:      'center',
                        justifyContent:  'center',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M6 4l14 8-14 8V4z" fill="#111" />
                      </svg>
                    </div>
                    <div
                      style={{
                        position:     'absolute',
                        bottom:       '6px',
                        left:         '8px',
                        background:   'rgba(0,0,0,0.75)',
                        color:        '#fff',
                        fontSize:     '0.68rem',
                        fontWeight:   700,
                        padding:      '2px 6px',
                        borderRadius: '2px',
                      }}
                    >
                      {doc.duration}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--video)', marginBottom: '5px' }}>
                      داکیومێنتاری
                    </div>
                    <div
                      style={{
                        fontFamily:   'var(--serif)',
                        fontSize:     '1rem',
                        fontWeight:   700,
                        lineHeight:   1.45,
                        marginBottom: '8px',
                        color:        'var(--text)',
                      }}
                    >
                      {doc.title}
                    </div>
                    <p
                      style={{
                        fontSize:    '0.83rem',
                        color:       '#555',
                        lineHeight:  1.65,
                        marginBottom: '8px',
                        display:     '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow:    'hidden',
                      } as React.CSSProperties}
                    >
                      {doc.description}
                    </p>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{doc.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* LIVE */}
          <LiveSection streams={liveStreams} />

          {/* خەبەرنامە-بانەر */}
          <div
            style={{
              background:   'var(--navy)',
              padding:      '24px 28px',
              borderRadius: '2px',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'space-between',
              gap:          '20px',
              marginBottom: '32px',
              flexWrap:     'wrap',
            }}
          >
            <div>
              <div style={{ color: 'var(--yellow)', fontWeight: 700, fontSize: '0.78rem', marginBottom: '4px', letterSpacing: '0.04em' }}>
                خەبەرنامەی ژیان
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
                هەموو کاتێک ئاگادار بە — تازەترین ڤیدیۆ و داکیومێنتاری بۆ ئیمەیڵت دێنێن
              </div>
            </div>
            <a
              href="/newsletter"
              style={{
                background:   'var(--yellow)',
                color:        'var(--navy)',
                fontWeight:   900,
                fontSize:     '0.85rem',
                padding:      '10px 20px',
                borderRadius: '2px',
                textDecoration: 'none',
                whiteSpace:   'nowrap',
                flexShrink:   0,
              }}
            >
              بەشداری بکە
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
