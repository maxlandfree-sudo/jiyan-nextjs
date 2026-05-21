// LeagueTable — Ligatabell med P W D L Pts
// Guardian Sport-inspirerat, RTL/soraniska kurdiska

export interface LeagueTeam {
  position: number
  name:     string
  played:   number
  won:      number
  drawn:    number
  lost:     number
  gf:       number
  ga:       number
  points:   number
  form?:    ('W' | 'D' | 'L')[]
  highlight?: 'champions' | 'europe' | 'relegation'
}

interface LeagueTableProps {
  title:  string
  teams:  LeagueTeam[]
  season?: string
}

function getFormColor(result: 'W' | 'D' | 'L'): string {
  if (result === 'W') return '#0a7c45'
  if (result === 'D') return '#e67e00'
  return '#c70000'
}

function getHighlightStyle(highlight?: 'champions' | 'europe' | 'relegation') {
  if (highlight === 'champions') return { borderRight: '3px solid #003580' }
  if (highlight === 'europe')    return { borderRight: '3px solid #0084c6' }
  if (highlight === 'relegation') return { borderRight: '3px solid #c70000' }
  return {}
}

export function LeagueTable({ title, teams, season }: LeagueTableProps) {
  return (
    <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '4px', overflow: 'hidden' }}>

      {/* Header */}
      <div
        style={{
          background:  '#003580',
          padding:     '10px 16px',
          display:     'flex',
          justifyContent: 'space-between',
          alignItems:  'center',
        }}
      >
        <span style={{ color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>{title}</span>
        {season && (
          <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.72rem' }}>{season}</span>
        )}
      </div>

      {/* Kolumnrubriker */}
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: '28px 1fr 36px 36px 36px 36px 48px',
          gap:                 '0 4px',
          padding:             '6px 12px',
          background:          '#f6f6f6',
          borderBottom:        '1px solid var(--border)',
          fontSize:            '0.65rem',
          fontWeight:          700,
          color:               '#767676',
          letterSpacing:       '0.04em',
        }}
      >
        <span style={{ textAlign: 'center' }}>#</span>
        <span>تیم</span>
        <span style={{ textAlign: 'center' }}>P</span>
        <span style={{ textAlign: 'center' }}>W</span>
        <span style={{ textAlign: 'center' }}>D</span>
        <span style={{ textAlign: 'center' }}>L</span>
        <span style={{ textAlign: 'center', fontWeight: 800, color: '#003580' }}>Pts</span>
      </div>

      {/* Lag-rader */}
      {teams.map((team, idx) => (
        <div
          key={team.position}
          style={{
            display:             'grid',
            gridTemplateColumns: '28px 1fr 36px 36px 36px 36px 48px',
            gap:                 '0 4px',
            padding:             '8px 12px',
            borderBottom:        idx < teams.length - 1 ? '1px solid var(--border)' : 'none',
            alignItems:          'center',
            background:          idx % 2 === 0 ? 'white' : '#fafafa',
            ...getHighlightStyle(team.highlight),
          }}
        >
          {/* Position */}
          <span
            style={{
              textAlign:  'center',
              fontSize:   '0.75rem',
              fontWeight: 700,
              color:      team.highlight === 'champions' ? '#003580' :
                          team.highlight === 'relegation' ? '#c70000' : '#767676',
            }}
          >
            {team.position}
          </span>

          {/* Lagnamn */}
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text)' }}>
            {team.name}
          </span>

          {/* Statistik */}
          <span style={{ textAlign: 'center', fontSize: '0.78rem', color: '#555' }}>{team.played}</span>
          <span style={{ textAlign: 'center', fontSize: '0.78rem', color: '#555' }}>{team.won}</span>
          <span style={{ textAlign: 'center', fontSize: '0.78rem', color: '#555' }}>{team.drawn}</span>
          <span style={{ textAlign: 'center', fontSize: '0.78rem', color: '#555' }}>{team.lost}</span>

          {/* Poäng */}
          <span
            style={{
              textAlign:    'center',
              fontSize:     '0.85rem',
              fontWeight:   800,
              color:        '#003580',
            }}
          >
            {team.points}
          </span>
        </div>
      ))}

      {/* Legend */}
      <div
        style={{
          padding:    '8px 12px',
          background: '#f6f6f6',
          display:    'flex',
          gap:        '16px',
          flexWrap:   'wrap',
        }}
      >
        <LegendItem color="#003580" label="چاموینزلیگ" />
        <LegendItem color="#0084c6" label="ئەوروپالیگ" />
        <LegendItem color="#c70000" label="دابەزین" />
      </div>
    </div>
  )
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <div
        style={{
          width:        '3px',
          height:       '14px',
          background:   color,
          borderRadius: '2px',
          flexShrink:   0,
        }}
      />
      <span style={{ fontSize: '0.65rem', color: '#767676' }}>{label}</span>
    </div>
  )
}
