// ClimateDataPanel — 3 statistikkort med trend-pilar
// Mörk bakgrund #1a2e1a

interface StatCard {
  label:    string
  value:    string
  unit?:    string
  trend:    'up' | 'down' | 'neutral'
  note:     string
}

interface ClimateDataPanelProps {
  stats: StatCard[]
}

function TrendArrow({ trend }: { trend: 'up' | 'down' | 'neutral' }) {
  if (trend === 'up') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'inline-block' }}>
        <path d="M10 4 L16 12 L4 12 Z" fill="#ef4444" />
      </svg>
    )
  }
  if (trend === 'down') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'inline-block' }}>
        <path d="M10 16 L16 8 L4 8 Z" fill="#ef4444" />
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'inline-block' }}>
      <rect x="3" y="9" width="14" height="2" fill="#facc15" />
    </svg>
  )
}

export function ClimateDataPanel({ stats }: ClimateDataPanelProps) {
  return (
    <div
      style={{
        background:   '#1a2e1a',
        padding:      '24px 20px',
        marginBottom: '32px',
        borderRadius: '2px',
      }}
    >
      <div
        style={{
          fontSize:     '0.72rem',
          fontWeight:   700,
          color:        'rgba(255,255,255,0.55)',
          letterSpacing: '0.06em',
          marginBottom: '16px',
          textTransform: 'uppercase',
        }}
      >
        داتای ئاووهەوای جیهانی
      </div>

      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '16px',
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              background:   'rgba(255,255,255,0.07)',
              border:       '1px solid rgba(255,255,255,0.12)',
              borderRadius: '2px',
              padding:      '16px',
            }}
          >
            <div
              style={{
                fontSize:    '0.75rem',
                color:       'rgba(255,255,255,0.65)',
                marginBottom: '8px',
                lineHeight:  1.4,
              }}
            >
              {stat.label}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span
                style={{
                  fontFamily: 'var(--sans)',
                  fontSize:   '2rem',
                  fontWeight: 900,
                  color:      '#fff',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              {stat.unit && (
                <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                  {stat.unit}
                </span>
              )}
              <TrendArrow trend={stat.trend} />
            </div>

            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              {stat.note}
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', marginTop: '12px' }}>
        سەرچاوە: NOAA / NASA / NSIDC — نوێکردنەوەی ئایار ٢٠٢٦
      </div>
    </div>
  )
}
