// وەرزش — Sport-sidan för Jiyan ژیان
export const dynamic = 'force-dynamic'
// Guardian Sport-inspirerat, RTL/soraniska kurdiska
// Statiska data — ersätts med Sanity-queries i produktion

import { Navigation } from '@/components/layout/Navigation'
import { TopStrip } from '@/components/layout/TopStrip'
import { Footer } from '@/components/layout/Footer'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { SportHero } from '@/components/sport/SportHero'
import { ScoreStrip } from '@/components/sport/ScoreStrip'
import { LeagueTable } from '@/components/sport/LeagueTable'
import { SportSidebar } from '@/components/sport/SportSidebar'
import type { SportHeroData } from '@/components/sport/SportHero'
import type { MatchResult } from '@/components/sport/ScoreStrip'
import type { LeagueTeam } from '@/components/sport/LeagueTable'
import type { UpcomingMatch, MostReadSportArticle } from '@/components/sport/SportSidebar'
import Image from 'next/image'
import Link from 'next/link'

// ─── Sport hero ───────────────────────────────────────────────────────────────
const sportHero: SportHeroData = {
  id:          'sh1',
  headline:    'تیمی نیشتمانیی کوردستان یارییەکەی داریی ئاسیا دەبەزێنێت و بەرەو نیو-فاینال دەچێت',
  standfirst:  'بە گۆڵێکی تاریخی لە دەقیقەی ٩٣ئەم، تیمی کوردستان تواناکەی خۆی نیشان دا و ئێرانی دەرخست لە پاڵەوانیی کاپی ئاسیا. ئەمە یەکەمجار وایە کوردستان بە ئەمەندی دەگات.',
  imageUrl:    'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=520&fit=crop',
  imageCaption: 'شادی بازیکەرانی کوردستان لەدوای گۆڵی تاریخی — وێنە: رووداوی وەرزش',
  kicker:      'تۆپی پێ — ئاسیا',
  isLive:      false,
  liveScore:   { home: 'کوردستان', homeScore: 2, away: 'ئێران', awayScore: 1 },
  author:      { name: 'شیار عەبدوڵڵا', initials: 'شع', avatarColor: '#003580' },
  publishedAt: '٢١ی ئایار ٢٠٢٦',
  slug:        'kurdistan-national-team-asia-cup-semifinal',
}

// ─── Score strip ─────────────────────────────────────────────────────────────
const matchResults: MatchResult[] = [
  { id: 'r1', home: 'ئەرسەنەل',    homeScore: 3, away: 'چێلسی',     awayScore: 1, status: 'FT',  competition: 'PL' },
  { id: 'r2', home: 'ریاڵ مەدرید', homeScore: 2, away: 'بارسەلۆنا', awayScore: 2, status: 'FT',  competition: 'UCL' },
  { id: 'r3', home: 'باییەرن',      homeScore: 1, away: 'دۆرتموند',  awayScore: 0, status: 'HT',  competition: 'BUN' },
  { id: 'r4', home: 'مانچستەر',    homeScore: 0, away: 'لیڤەرپوول', awayScore: 2, status: 'Live', minute: 67, competition: 'PL' },
]

// ─── Sport-artiklar ───────────────────────────────────────────────────────────
const sportArticles = [
  {
    id:       'sa1',
    headline: 'ئۆسکار هیجۆ یەکێکی تر لە یارانی ملی کوردستانی داواکرد',
    kicker:   'تۆپی پێ',
    imageUrl: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=400&h=260&fit=crop',
    slug:     'oscar-higo-new-kurdistan-national-player',
    publishedAt: '٢١ی ئایار',
    color:    '#003580',
  },
  {
    id:       'sa2',
    headline: 'محەمەد ئیبراهیم: مووختای کوردی کە بۆکسی جیهانی دەلەرزێنێت',
    kicker:   'بۆکس',
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=260&fit=crop',
    slug:     'muhammad-ibrahim-kurdish-boxing-champion',
    publishedAt: '٢٠ی ئایار',
    color:    '#c70000',
  },
  {
    id:       'sa3',
    headline: 'پاریس ٢٠٢٦: کوردستان لە المپیاددا بە ئالایەکی تەنها',
    kicker:   'المپیاد',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=260&fit=crop',
    slug:     'paris-2026-kurdistan-olympic-flag',
    publishedAt: '١٩ی ئایار',
    color:    '#003580',
  },
  {
    id:       'sa4',
    headline: 'لیگی نەو لە هەولێر: پرۆژەی مەیدانی ٦٠ هەزار کەس',
    kicker:   'وەرزشگا',
    imageUrl: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=260&fit=crop',
    slug:     'erbil-new-stadium-60000-capacity',
    publishedAt: '١٨ی ئایار',
    color:    '#0a7c45',
  },
  {
    id:       'sa5',
    headline: 'تێنیس: هاژەی هاوکاری ئەوروپا تەواوکرد — ئاستی ٢٠٠ WTA',
    kicker:   'تێنیس',
    imageUrl: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=260&fit=crop',
    slug:     'hazha-tennis-wta-200-ranking',
    publishedAt: '١٧ی ئایار',
    color:    '#003580',
  },
  {
    id:       'sa6',
    headline: 'شنام ئەحمەد: ئاژەڵەی کوردی کە لە ماراتۆنی لەندەن سێیەم بوو',
    kicker:   'ئەربیل',
    imageUrl: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=400&h=260&fit=crop',
    slug:     'shnam-ahmad-london-marathon-third-place',
    publishedAt: '١٦ی ئایار',
    color:    '#c70000',
  },
  {
    id:       'sa7',
    headline: 'F1 ئەنکەتتا: کوردستان سووچی یەکەمی بەهەڵسووری بکات؟',
    kicker:   'F1',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=260&fit=crop',
    slug:     'f1-circuit-kurdistan-proposal',
    publishedAt: '١٥ی ئایار',
    color:    '#003580',
  },
  {
    id:       'sa8',
    headline: 'دووچەرخەسواری کوه: تیمی کوردستان شامپیۆنی تورکیا بوو',
    kicker:   'دووچەرخەسواری',
    imageUrl: 'https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?w=400&h=260&fit=crop',
    slug:     'kurdistan-cycling-team-turkey-champion',
    publishedAt: '١٤ی ئایار',
    color:    '#0a7c45',
  },
]

// ─── League table ─────────────────────────────────────────────────────────────
const leagueTeams: LeagueTeam[] = [
  { position: 1, name: 'هاوکاری هەولێر',   played: 30, won: 21, drawn: 6,  lost: 3,  gf: 68, ga: 24, points: 69, highlight: 'champions' },
  { position: 2, name: 'نیشتیمانی سلێمانی', played: 30, won: 18, drawn: 7,  lost: 5,  gf: 59, ga: 31, points: 61, highlight: 'europe' },
  { position: 3, name: 'دوهۆک FC',          played: 30, won: 16, drawn: 8,  lost: 6,  gf: 52, ga: 38, points: 56, highlight: 'europe' },
  { position: 4, name: 'زاخۆی کوردستان',   played: 30, won: 13, drawn: 9,  lost: 8,  gf: 44, ga: 37, points: 48 },
  { position: 5, name: 'کەرکووک یەکگرتوو',  played: 30, won: 5,  drawn: 7,  lost: 18, gf: 22, ga: 58, points: 22, highlight: 'relegation' },
]

// ─── Video cards ──────────────────────────────────────────────────────────────
const videoItems = [
  {
    id:       'v1',
    title:    'گۆڵەکەی تاریخی: ڤیدیۆی تەواوی دەقیقەی ٩٣',
    duration: '2:14',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=230&fit=crop',
    slug:     'video-kurdistan-goal-93-minute',
  },
  {
    id:       'v2',
    title:    'چاودێری بۆکس: ئەبراهیم ئامادەی ڕاوەستانی جیهانی دەبێت',
    duration: '4:38',
    imageUrl: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=400&h=230&fit=crop',
    slug:     'video-boxing-ibrahim-world-bout',
  },
  {
    id:       'v3',
    title:    'بەشداری کوردستان لە المپیاد: ئەڵبووم',
    duration: '6:02',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=230&fit=crop',
    slug:     'video-kurdistan-olympics-album',
  },
]

// ─── Sidebar data ─────────────────────────────────────────────────────────────
const upcomingMatches: UpcomingMatch[] = [
  { id: 'um1', home: 'کوردستان',         away: 'قەتەر',       date: '٢٤ی ئایار',   time: '١٩:٠٠', competition: 'کاپی ئاسیا' },
  { id: 'um2', home: 'هاوکاری هەولێر',  away: 'زاخۆ',         date: '٢٢ی ئایار',   time: '١٦:٣٠', competition: 'لیگی کوردستان', venue: 'هەولێر' },
  { id: 'um3', home: 'ئەرسەنەل',         away: 'مانچستەر',    date: '٢٥ی ئایار',   time: '١٥:٠٠', competition: 'PL' },
  { id: 'um4', home: 'ریاڵ مەدرید',     away: 'ئاتلێتیکۆ',   date: '٢٦ی ئایار',   time: '٢٠:٤٥', competition: 'UCL Final' },
]

const mostReadSport: MostReadSportArticle[] = [
  { id: 'mr1', headline: 'تیمی نیشتمانیی کوردستان بەرەو نیو-فاینال', kicker: 'تۆپی پێ',       slug: 'kurdistan-national-team-asia-cup-semifinal' },
  { id: 'mr2', headline: 'محەمەد ئیبراهیم: مووختای کوردی', kicker: 'بۆکس',               slug: 'muhammad-ibrahim-kurdish-boxing-champion' },
  { id: 'mr3', headline: 'هاوکاری هەولێر قوتابخانەی بازارگانی دەکات', kicker: 'لیگی کوردستان', slug: 'hawkari-erbil-commercial-deal' },
  { id: 'mr4', headline: 'شنام ئەحمەد سێیەم لە ماراتۆنی لەندەن', kicker: 'ئەربیل',          slug: 'shnam-ahmad-london-marathon-third-place' },
  { id: 'mr5', headline: 'F1 لە کوردستان: وەڵامی رووی', kicker: 'F1',                       slug: 'f1-circuit-kurdistan-proposal' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SportPage() {
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

      {/* Sektionsheader — sport */}
      <SectionHeader
        title="وەرزش"
        color="navy"
        subcategories={[
          { label: 'تۆپی پێ',       slug: 'football',  active: true },
          { label: 'کریکێت',        slug: 'cricket' },
          { label: 'تێنیس',         slug: 'tennis' },
          { label: 'بۆکس',          slug: 'boxing' },
          { label: 'دووچەرخەسواری', slug: 'cycling' },
          { label: 'F1',            slug: 'f1' },
          { label: 'المپیاد',       slug: 'olympics' },
        ]}
      />

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)', padding: '24px 20px 0' }}>

          {/* Score strip */}
          <ScoreStrip matches={matchResults} />

          {/* Sport hero */}
          <SportHero article={sportHero} />

          {/* Huvud + Sidopanel */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: '1fr 300px',
              gap:                 '0 32px',
            }}
          >
            {/* Vänster */}
            <div>
              {/* Artikel-grid — 4 kolumner */}
              <div style={{ marginBottom: '36px' }}>
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
                    هەواڵی وەرزش
                  </h2>
                </div>

                <div
                  style={{
                    display:             'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap:                 '16px',
                  }}
                >
                  {sportArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/article/${article.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <div style={{ position: 'relative', width: '100%', height: '130px', marginBottom: '8px' }}>
                        <Image
                          src={article.imageUrl}
                          alt={article.headline}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div
                        style={{
                          fontSize:     '0.65rem',
                          fontWeight:   700,
                          color:        article.color,
                          letterSpacing: '0.04em',
                          textTransform: 'uppercase',
                          marginBottom: '4px',
                        }}
                      >
                        {article.kicker}
                      </div>
                      <h3
                        style={{
                          fontFamily:  'var(--serif)',
                          fontSize:    '0.85rem',
                          fontWeight:  700,
                          lineHeight:  1.4,
                          marginBottom: '4px',
                          color:       'var(--text)',
                        }}
                      >
                        {article.headline}
                      </h3>
                      <div style={{ fontSize: '0.7rem', color: '#767676' }}>{article.publishedAt}</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Ligatabell */}
              <div style={{ marginBottom: '36px' }}>
                <LeagueTable
                  title="لیگی کوردستانی عێراق"
                  season="٢٠٢٥/٢٦"
                  teams={leagueTeams}
                />
              </div>

              {/* Video-sektion */}
              <div style={{ marginBottom: '36px' }}>
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
                    ڤیدیۆ
                  </h2>
                </div>

                <div
                  style={{
                    display:             'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap:                 '16px',
                  }}
                >
                  {videoItems.map((video) => (
                    <Link
                      key={video.id}
                      href={`/video/${video.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      {/* Thumbnail med play-overlay */}
                      <div
                        style={{
                          position:     'relative',
                          width:        '100%',
                          height:       '155px',
                          marginBottom: '8px',
                          overflow:     'hidden',
                        }}
                      >
                        <Image
                          src={video.imageUrl}
                          alt={video.title}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                        {/* Dark overlay */}
                        <div
                          style={{
                            position:   'absolute',
                            inset:      0,
                            background: 'rgba(0,0,0,0.35)',
                          }}
                        />
                        {/* Play icon */}
                        <div
                          style={{
                            position:       'absolute',
                            top:            '50%',
                            left:           '50%',
                            transform:      'translate(-50%, -50%)',
                            width:          '44px',
                            height:         '44px',
                            borderRadius:   '50%',
                            background:     'rgba(255,255,255,0.9)',
                            display:        'flex',
                            alignItems:     'center',
                            justifyContent: 'center',
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5 3L13 8L5 13V3Z" fill="#003580" />
                          </svg>
                        </div>
                        {/* Duration badge */}
                        <div
                          style={{
                            position:    'absolute',
                            bottom:      '6px',
                            right:       '6px',
                            background:  'rgba(0,0,0,0.75)',
                            color:       'white',
                            fontSize:    '0.68rem',
                            fontWeight:  700,
                            padding:     '1px 6px',
                            borderRadius: '2px',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {video.duration}
                        </div>
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--serif)',
                          fontSize:   '0.88rem',
                          fontWeight: 700,
                          lineHeight: 1.4,
                          color:      'var(--text)',
                        }}
                      >
                        {video.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Höger: Sport Sidebar */}
            <div style={{ paddingTop: '8px' }}>
              <SportSidebar
                upcomingMatches={upcomingMatches}
                mostRead={mostReadSport}
              />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
