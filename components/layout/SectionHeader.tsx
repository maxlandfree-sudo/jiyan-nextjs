'use client'

// SectionHeader — sektionshuvud med automatiska underkategorier och "Visa alla"-länk
// Stöder URL query param ?sub=<slug> för aktiv underkategori

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

// ─── Underkategorier per sektionsnyckel ──────────────────────────────────────

const SECTION_SUBCATEGORIES: Record<string, { label: string; slug: string }[]> = {
  culture: [
    { label: 'فیلم',          slug: 'film'       },
    { label: 'موزیک',         slug: 'music'      },
    { label: 'کتێب',          slug: 'book'       },
    { label: 'هونەر',         slug: 'art'        },
    { label: 'شانۆ',          slug: 'theatre'    },
    { label: 'تەلەڤیزیۆن',   slug: 'tv'         },
  ],
  opinion: [
    { label: 'بیرۆکەی ڕۆژ',  slug: 'thought'    },
    { label: 'تێبینی',        slug: 'commentary' },
    { label: 'پێشنیاز',      slug: 'proposal'   },
    { label: 'چیرۆک',        slug: 'story'      },
  ],
  sport: [
    { label: 'فوتبۆڵ',        slug: 'football'   },
    { label: 'بۆکس',          slug: 'boxing'     },
    { label: 'ئۆلیمپیک',     slug: 'olympics'   },
    { label: 'وەرزشی ناوخۆ', slug: 'local'      },
  ],
  climate: [
    { label: 'ئاووهەوا',      slug: 'weather'    },
    { label: 'ژینگە',         slug: 'environment'},
    { label: 'وزە',           slug: 'energy'     },
    { label: 'کشتوکاڵ',      slug: 'agriculture'},
  ],
  news: [
    { label: 'نێودەوڵەتی',   slug: 'international'},
    { label: 'ناوچەیی',      slug: 'regional'    },
    { label: 'ئابووری',      slug: 'economy'     },
    { label: 'تەکنەلۆژیا',  slug: 'tech'        },
  ],
}

// ─── Typdefiniton (bakåtkompatibel) ──────────────────────────────────────────

interface Subcategory {
  label:   string
  slug:    string
  active?: boolean
}

interface SectionHeaderProps {
  title:          string
  subcategories?: Subcategory[]
  color?:         'blue' | 'red' | 'navy' | 'culture' | 'film' | 'music' | 'books' | 'art' | 'theatre' | 'purple'
  /** Nyckel för automatiska underkategorier: 'culture' | 'opinion' | 'sport' | 'climate' | 'news' */
  section?:       keyof typeof SECTION_SUBCATEGORIES
  /** Länk för "هەموو بینە" — utelämnas om ingen visasAllaHref ges */
  showAllHref?:   string
}

// ─── SectionHeader ────────────────────────────────────────────────────────────

export function SectionHeader({
  title,
  subcategories,
  color = 'blue',
  section,
  showAllHref,
}: SectionHeaderProps) {
  const searchParams = useSearchParams()
  const activeSub   = searchParams.get('sub') ?? ''

  // Bygg underkategorilista: explicit prop > automatisk per section
  const autoSubs = section ? SECTION_SUBCATEGORIES[section] ?? [] : []
  const rawSubs  = subcategories && subcategories.length > 0 ? subcategories : autoSubs

  // Märk vilken som är aktiv baserat på ?sub=
  const resolvedSubs = rawSubs.map((s) => ({
    ...s,
    active: activeSub ? s.slug === activeSub : ('active' in s ? (s as Subcategory).active ?? false : false),
  }))

  const COLOR_MAP: Record<string, string> = {
    blue:    'var(--blue)',
    red:     'var(--red)',
    navy:    'var(--navy)',
    culture: 'var(--culture)',
    film:    'var(--film)',
    music:   'var(--music)',
    books:   'var(--books)',
    art:     'var(--art)',
    theatre: 'var(--theatre)',
    purple:  '#6b21a8',
  }
  const bgColor = COLOR_MAP[color] ?? 'var(--blue)'

  return (
    <div style={{ background: bgColor }} className="jiyan-section-header-wrap">
      <div
        style={{
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
          padding:  '0 20px',
        }}
      >
        {/* Rad 1: Sektionens titel + "هەموو بینە" */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            padding:        '10px 0 6px',
          }}
        >
          <div className="jiyan-section-title">{title}</div>

          {showAllHref && (
            <Link
              href={showAllHref}
              style={{
                color:          'rgba(255,255,255,0.85)',
                fontSize:       '0.78rem',
                fontWeight:     600,
                whiteSpace:     'nowrap',
                textDecoration: 'none',
                borderBottom:   '1px solid rgba(255,255,255,0.4)',
                paddingBottom:  '1px',
                flexShrink:     0,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'white')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)')
              }
            >
              هەموو بینە
            </Link>
          )}
        </div>

        {/* Rad 2: Underkategorier */}
        {resolvedSubs.length > 0 && (
          <nav
            aria-label="زیرکاتیگۆری"
            style={{
              display:         'flex',
              gap:             0,
              overflowX:       'auto',
              scrollbarWidth:  'none',
              paddingBottom:   '6px',
            }}
            className="jiyan-subcategory-nav"
          >
            {resolvedSubs.map((sub) => (
              <a
                key={sub.slug}
                href={`?sub=${sub.slug}`}
                style={{
                  color:           sub.active ? 'white' : 'rgba(255,255,255,0.78)',
                  fontSize:        '0.8rem',
                  padding:         '4px 12px',
                  whiteSpace:      'nowrap',
                  borderRadius:    '999px',
                  fontWeight:      sub.active ? 700 : 500,
                  background:      sub.active ? 'rgba(255,255,255,0.22)' : 'transparent',
                  textDecoration:  'none',
                  border:          sub.active ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
                  transition:      'background 0.15s, color 0.15s',
                  display:         'inline-block',
                }}
                className="jiyan-subcategory-chip"
              >
                {sub.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  )
}
