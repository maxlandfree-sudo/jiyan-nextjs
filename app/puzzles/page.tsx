// Jiyan ژیان — پازڵ (Puzzle-sida)
export const dynamic = 'force-dynamic'
// Guardian-inspirerad spelsektion med lila accentfärg

import { Navigation }    from '@/components/layout/Navigation'
import { TopStrip }      from '@/components/layout/TopStrip'
import { Footer }        from '@/components/layout/Footer'
import { SectionHeader } from '@/components/layout/SectionHeader'
import { PuzzleCard }    from '@/components/puzzles/PuzzleCard'
import { PuzzleGrid }    from '@/components/puzzles/PuzzleGrid'
import { WordleGame }    from '@/components/puzzles/WordleGame'

// ── Highscore-data ────────────────────────────────────────────────────────────
const HIGHSCORES = [
  { rank: 1, name: 'شیرین ئەحمەد',   score: 4850, streak: 12 },
  { rank: 2, name: 'بەختیار کەریم',   score: 4210, streak: 8  },
  { rank: 3, name: 'سۆزدار مستەفا',  score: 3980, streak: 5  },
  { rank: 4, name: 'دیلان حەسەن',    score: 3620, streak: 7  },
  { rank: 5, name: 'ئاراس عومەر',    score: 3440, streak: 3  },
]

// ── Arkiv-data ────────────────────────────────────────────────────────────────
const ARCHIVE: { date: string; title: string; difficulty: 1 | 2 | 3 }[] = [
  { date: '٢٠ی ئایار ٢٠٢٦',  title: 'وەردڵی دوێنێ',      difficulty: 2 },
  { date: '١٩ی ئایار ٢٠٢٦',  title: 'پازڵی پیتی شەممە', difficulty: 3 },
  { date: '١٨ی ئایار ٢٠٢٦',  title: 'کوێزی کولتوور',    difficulty: 2 },
  { date: '١٧ی ئایار ٢٠٢٦',  title: 'سودۆکووی ئینگلیزی', difficulty: 3 },
  { date: '١٦ی ئایار ٢٠٢٦',  title: 'وەردڵی پێنجشەممە', difficulty: 1 },
  { date: '١٥ی ئایار ٢٠٢٦',  title: 'پازڵی جوگرافیا',   difficulty: 2 },
]

const DIFFICULTY_COLORS: Record<1 | 2 | 3, string> = {
  1: '#15803d',
  2: '#b45309',
  3: '#c70000',
}
const DIFFICULTY_LABELS: Record<1 | 2 | 3, string> = {
  1: 'ئاسان',
  2: 'ناوەند',
  3: 'سەخت',
}

export default function PuzzlesPage() {
  return (
    <>
      <TopStrip />

      <header className="jiyan-header">
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '12px 0 0' }}>
            <a href="/" className="jiyan-masthead-logo">ژیان</a>
          </div>
        </div>
      </header>

      <Navigation />

      <SectionHeader
        title="پازڵ"
        color="purple"
        subcategories={[
          { label: 'هەموو',       slug: 'all',       active: true },
          { label: 'وەردڵ',      slug: 'wordle' },
          { label: 'پازڵی پیت',  slug: 'crossword' },
          { label: 'سودۆکوو',   slug: 'sudoku' },
          { label: 'کوێز',       slug: 'quiz' },
        ]}
      />

      <main>
        <div className="jiyan-page-wrap" style={{ maxWidth: 'var(--max-width)', padding: '32px 20px' }}>

          {/* ─── Dagens spel 2×2 ─────────────────────────────────────────── */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize:      '1.1rem',
              fontWeight:    700,
              color:         'var(--navy)',
              marginBottom:  '20px',
              paddingBottom: '10px',
              borderBottom:  '2px solid #6b21a8',
              fontFamily:    'var(--serif)',
            }}>
              یاریەکانی ئەمڕۆ
            </h2>

            <PuzzleGrid>
              <PuzzleCard
                name="Crossword"
                nameKurdish="پازڵی پیت"
                description="وشەکانی وەرگیراو بدۆزەرەوە بە ئامۆژگاری ئەوانەی ئەرەبی و ئەستەری. یاریی کلاسیکی پازڵ بە زمانی کوردی."
                icon="✏️"
                accentColor="#6b21a8"
                difficulty={2}
                href="/puzzles/crossword"
              />
              <PuzzleCard
                name="Wordle"
                nameKurdish="وەردڵ"
                description="وشەی ٤ پیتی کوردی بدۆزەرەوە لە ٦ هەوڵدا. هەر ڕووژێک وشەیەکی نوێ. دروستبوون رەنگی سەوز دەخاتە پیشان."
                icon="🟩"
                accentColor="#15803d"
                difficulty={1}
                href="#wordle"
              />
              <PuzzleCard
                name="Sudoku"
                nameKurdish="سودۆکوو"
                description="ژمارەکان لە شانەکەدا بنێ بەو شێوەیەی ئاستی ١-٩ لە هەر ڕیز، ستوون و خانەی ٣×٣دا دووبارە نەبن."
                icon="🔢"
                accentColor="#1d4ed8"
                difficulty={3}
                href="/puzzles/sudoku"
              />
              <PuzzleCard
                name="Quiz"
                nameKurdish="کوێز"
                description="١٠ پرسیاری ڕۆژانە دەربارەی کولتووری کوردی، هەواڵ، تارێخ و جیهان. ئایا دەتوانی ١٠/١٠ بیگەیی؟"
                icon="❓"
                accentColor="#c2410c"
                difficulty={2}
                href="/puzzles/quiz"
              />
            </PuzzleGrid>
          </section>

          {/* ─── Wordle-demo ──────────────────────────────────────────────── */}
          <section id="wordle" style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize:      '1.1rem',
              fontWeight:    700,
              color:         'var(--navy)',
              marginBottom:  '24px',
              paddingBottom: '10px',
              borderBottom:  '2px solid #15803d',
              fontFamily:    'var(--serif)',
            }}>
              وەردڵی ئەمڕۆ
            </h2>

            <div style={{
              background:   '#f6fdf8',
              border:       '1px solid #bbf7d0',
              borderRadius: '8px',
              padding:      '32px 24px',
            }}>
              <WordleGame />
            </div>
          </section>

          {/* ─── Highscore-tabell + Arkiv — tvåkolumns ───────────────────── */}
          <div style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 '32px',
            marginBottom:        '48px',
          }}>

            {/* Highscore */}
            <section>
              <h2 style={{
                fontSize:      '1.1rem',
                fontWeight:    700,
                color:         'var(--navy)',
                marginBottom:  '16px',
                paddingBottom: '10px',
                borderBottom:  '2px solid #6b21a8',
                fontFamily:    'var(--serif)',
              }}>
                باشترین یاریکەران
              </h2>

              <div style={{
                background:   'white',
                border:       '1px solid #dcdcdc',
                borderRadius: '4px',
                overflow:     'hidden',
              }}>
                {/* Header */}
                <div style={{
                  display:             'grid',
                  gridTemplateColumns: '40px 1fr 80px 60px',
                  padding:             '10px 16px',
                  background:          '#6b21a8',
                  color:               'white',
                  fontSize:            '0.75rem',
                  fontWeight:          700,
                  gap:                 '8px',
                }}>
                  <span>#</span>
                  <span>ناو</span>
                  <span style={{ textAlign: 'center' }}>خاڵ</span>
                  <span style={{ textAlign: 'center' }}>زنجیرە</span>
                </div>

                {HIGHSCORES.map((player, i) => (
                  <div
                    key={player.rank}
                    style={{
                      display:             'grid',
                      gridTemplateColumns: '40px 1fr 80px 60px',
                      padding:             '12px 16px',
                      borderBottom:        i < HIGHSCORES.length - 1 ? '1px solid #f0f0f0' : 'none',
                      fontSize:            '0.85rem',
                      alignItems:          'center',
                      gap:                 '8px',
                      background:          player.rank === 1 ? '#faf5ff' : 'white',
                    }}
                  >
                    <span style={{
                      fontWeight: 700,
                      color:      player.rank <= 3 ? '#6b21a8' : '#767676',
                      fontSize:   player.rank <= 3 ? '1rem' : '0.85rem',
                    }}>
                      {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : player.rank}
                    </span>
                    <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{player.name}</span>
                    <span style={{ textAlign: 'center', fontWeight: 700, color: '#6b21a8' }}>
                      {player.score.toLocaleString()}
                    </span>
                    <span style={{ textAlign: 'center', color: '#15803d', fontWeight: 700 }}>
                      {player.streak} 🔥
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Arkiv */}
            <section>
              <h2 style={{
                fontSize:      '1.1rem',
                fontWeight:    700,
                color:         'var(--navy)',
                marginBottom:  '16px',
                paddingBottom: '10px',
                borderBottom:  '2px solid #6b21a8',
                fontFamily:    'var(--serif)',
              }}>
                پازڵەکانی پێشوو
              </h2>

              <div style={{
                display:             'grid',
                gridTemplateColumns: '1fr 1fr',
                gap:                 '12px',
              }}>
                {ARCHIVE.map((item, i) => (
                  <a
                    key={i}
                    href={`/puzzles/archive/${i + 1}`}
                    className="jiyan-archive-card"
                  >
                    <div style={{ fontSize: '0.72rem', color: '#767676', marginBottom: '6px' }}>
                      {item.date}
                    </div>
                    <div style={{
                      fontSize:    '0.88rem',
                      fontWeight:  600,
                      color:       'var(--navy)',
                      marginBottom: '8px',
                      fontFamily:  'var(--serif)',
                    }}>
                      {item.title}
                    </div>
                    <span style={{
                      display:      'inline-block',
                      padding:      '2px 8px',
                      borderRadius: '99px',
                      fontSize:     '0.7rem',
                      fontWeight:   700,
                      background:   DIFFICULTY_COLORS[item.difficulty],
                      color:        'white',
                    }}>
                      {DIFFICULTY_LABELS[item.difficulty]}
                    </span>
                  </a>
                ))}
              </div>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
