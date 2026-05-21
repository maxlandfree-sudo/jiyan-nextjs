// ScoreStrip — Horisontell bar med senaste matchresultat
// Guardian Sport-inspirerat, RTL/soraniska kurdiska

export interface MatchResult {
  id:       string
  home:     string
  homeScore: number
  away:     string
  awayScore: number
  status:   'FT' | 'HT' | 'Live' | 'Upcoming'
  minute?:  number
  time?:    string // för kommande matcher
  competition?: string
}

interface ScoreStripProps {
  matches: MatchResult[]
}

function getStatusBadge(match: MatchResult) {
  if (match.status === 'Live') {
    return (
      <span
        style={{
          background:   '#c70000',
          color:        'white',
          fontSize:     '0.6rem',
          fontWeight:   700,
          padding:      '1px 5px',
          borderRadius: '2px',
          letterSpacing: '0.04em',
        }}
      >
        {match.minute ? `${match.minute}'` : 'LIVE'}
      </span>
    )
  }
  if (match.status === 'HT') {
    return (
      <span
        style={{
          background:   '#e67e00',
          color:        'white',
          fontSize:     '0.6rem',
          fontWeight:   700,
          padding:      '1px 5px',
          borderRadius: '2px',
        }}
      >
        HT
      </span>
    )
  }
  if (match.status === 'Upcoming') {
    return (
      <span
        style={{
          color:      '#767676',
          fontSize:   '0.68rem',
          fontWeight: 600,
        }}
      >
        {match.time || '—'}
      </span>
    )
  }
  // FT
  return (
    <span
      style={{
        color:      '#767676',
        fontSize:   '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.02em',
      }}
    >
      FT
    </span>
  )
}

export function ScoreStrip({ matches }: ScoreStripProps) {
  return (
    <div
      style={{
        background:   '#003580',
        borderRadius: '4px',
        padding:      '0 8px',
        marginBottom: '28px',
        overflowX:    'auto',
        scrollbarWidth: 'none',
      }}
    >
      <div
        style={{
          display:    'flex',
          alignItems: 'stretch',
          gap:        0,
          minWidth:   'max-content',
        }}
      >
        {/* Label */}
        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            padding:        '10px 16px 10px 8px',
            borderLeft:     '1px solid rgba(255,255,255,0.15)',
            color:          'rgba(255,255,255,0.75)',
            fontSize:       '0.72rem',
            fontWeight:     700,
            letterSpacing:  '0.04em',
            flexShrink:     0,
          }}
        >
          ئەنجامەکان
        </div>

        {/* Match cards */}
        {matches.map((match) => (
          <div
            key={match.id}
            style={{
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              padding:        '8px 16px',
              borderRight:    '1px solid rgba(255,255,255,0.12)',
              minWidth:       '130px',
              gap:            '3px',
              cursor:         'pointer',
            }}
          >
            {/* Competition */}
            {match.competition && (
              <span
                style={{
                  color:     'rgba(255,255,255,0.5)',
                  fontSize:  '0.58rem',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                {match.competition}
              </span>
            )}

            {/* Teams + score */}
            <div
              style={{
                display:     'flex',
                alignItems:  'center',
                gap:         '6px',
                color:       'white',
                fontSize:    '0.8rem',
                fontWeight:  700,
                fontFamily:  'var(--sans)',
                whiteSpace:  'nowrap',
              }}
            >
              <span>{match.home}</span>
              <span
                style={{
                  background:   'rgba(255,255,255,0.15)',
                  padding:      '1px 7px',
                  borderRadius: '3px',
                  fontSize:     '0.85rem',
                  letterSpacing: '0.06em',
                }}
              >
                {match.homeScore} — {match.awayScore}
              </span>
              <span>{match.away}</span>
            </div>

            {/* Status badge */}
            <div>{getStatusBadge(match)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
