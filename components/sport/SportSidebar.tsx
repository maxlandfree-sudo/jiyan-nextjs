// SportSidebar — Kommande matcher + mest lästa sport-artiklar
// Guardian Sport-inspirerat, RTL/soraniska kurdiska

export interface UpcomingMatch {
  id:          string
  home:        string
  away:        string
  date:        string
  time:        string
  competition: string
  venue?:      string
}

export interface MostReadSportArticle {
  id:       string
  headline: string
  slug:     string
  kicker?:  string
}

interface SportSidebarProps {
  upcomingMatches:    UpcomingMatch[]
  mostRead:           MostReadSportArticle[]
}

export function SportSidebar({ upcomingMatches, mostRead }: SportSidebarProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

      {/* Kommande matcher */}
      <div>
        <div
          style={{
            borderTop:   '3px solid #003580',
            paddingTop:  '8px',
            marginBottom: '14px',
          }}
        >
          <h3
            style={{
              fontFamily:  'var(--serif)',
              fontSize:    '0.95rem',
              fontWeight:  700,
              color:       '#003580',
            }}
          >
            یارییەکانی داهاتوو
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {upcomingMatches.map((match, idx) => (
            <div
              key={match.id}
              style={{
                padding:       '10px 0',
                borderBottom:  idx < upcomingMatches.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              {/* Competition */}
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
                {match.competition}
              </div>

              {/* Teams */}
              <div
                style={{
                  fontSize:    '0.85rem',
                  fontWeight:  700,
                  color:       'var(--text)',
                  fontFamily:  'var(--serif)',
                  lineHeight:  1.35,
                  marginBottom: '4px',
                }}
              >
                {match.home} <span style={{ color: '#767676', fontWeight: 400 }}>vs</span> {match.away}
              </div>

              {/* Date + time */}
              <div
                style={{
                  display:    'flex',
                  alignItems: 'center',
                  gap:        '6px',
                  fontSize:   '0.72rem',
                  color:      '#767676',
                }}
              >
                <span
                  style={{
                    background:   '#f0f4ff',
                    color:        '#003580',
                    padding:      '2px 7px',
                    borderRadius: '3px',
                    fontWeight:   600,
                  }}
                >
                  {match.time}
                </span>
                <span>{match.date}</span>
                {match.venue && (
                  <>
                    <span>·</span>
                    <span style={{ fontStyle: 'italic' }}>{match.venue}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mest lästa */}
      <div>
        <div
          style={{
            borderTop:   '3px solid #c70000',
            paddingTop:  '8px',
            marginBottom: '14px',
          }}
        >
          <h3
            style={{
              fontFamily:  'var(--serif)',
              fontSize:    '0.95rem',
              fontWeight:  700,
              color:       '#c70000',
            }}
          >
            زیاتر خوێندراوەتەوە
          </h3>
        </div>

        <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {mostRead.map((article, idx) => (
            <li
              key={article.id}
              style={{
                display:      'flex',
                gap:          '10px',
                padding:      '10px 0',
                borderBottom: idx < mostRead.length - 1 ? '1px solid var(--border)' : 'none',
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
              <div>
                {article.kicker && (
                  <div
                    style={{
                      fontSize:    '0.65rem',
                      fontWeight:  700,
                      color:       '#003580',
                      letterSpacing: '0.03em',
                      textTransform: 'uppercase',
                      marginBottom: '2px',
                    }}
                  >
                    {article.kicker}
                  </div>
                )}
                <a
                  href={`/article/${article.slug}`}
                  style={{
                    fontFamily:     'var(--serif)',
                    fontSize:       '0.85rem',
                    fontWeight:     700,
                    color:          'var(--text)',
                    lineHeight:     1.4,
                    textDecoration: 'none',
                    display:        'block',
                  }}
                >
                  {article.headline}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>

    </div>
  )
}
