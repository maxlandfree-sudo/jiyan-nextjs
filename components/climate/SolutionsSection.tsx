// SolutionsSection — "چارەسەری هەیە" (Det finns lösningar)
// 3 kort om förnybar energi, solkraft, skogsplantering i Kurdistan

interface SolutionCard {
  icon:        string
  title:       string
  description: string
  tag:         string
  slug:        string
}

interface SolutionsSectionProps {
  cards: SolutionCard[]
}

export function SolutionsSection({ cards }: SolutionsSectionProps) {
  return (
    <div
      style={{
        borderTop:    '3px solid var(--climate)',
        paddingTop:   '6px',
        marginBottom: '32px',
      }}
    >
      {/* Rubrik */}
      <div
        style={{
          display:        'flex',
          alignItems:     'baseline',
          justifyContent: 'space-between',
          marginBottom:   '20px',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--serif)',
            fontSize:   '1.15rem',
            fontWeight: 700,
            color:      'var(--climate)',
          }}
        >
          چارەسەری هەیە
        </div>
        <a
          href="/climate/solutions"
          style={{ fontSize: '0.78rem', color: 'var(--climate)', fontWeight: 600 }}
        >
          هەموو چارەسەرەکان
        </a>
      </div>

      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap:                 '20px',
        }}
      >
        {cards.map((card, i) => (
          <a
            key={i}
            href={`/article/${card.slug}`}
            style={{
              display:        'flex',
              flexDirection:  'column',
              background:     'var(--off)',
              border:         '1px solid var(--border)',
              borderTop:      '3px solid var(--climate)',
              padding:        '18px',
              textDecoration: 'none',
              color:          'inherit',
              borderRadius:   '2px',
              transition:     'box-shadow 0.15s',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{card.icon}</div>
            <div
              style={{
                fontSize:    '0.7rem',
                fontWeight:  700,
                color:       'var(--climate)',
                marginBottom: '6px',
                letterSpacing: '0.04em',
              }}
            >
              {card.tag}
            </div>
            <div
              style={{
                fontFamily: 'var(--serif)',
                fontSize:   '0.95rem',
                fontWeight: 700,
                lineHeight: 1.5,
                marginBottom: '8px',
              }}
            >
              {card.title}
            </div>
            <p
              style={{
                fontSize:  '0.82rem',
                color:     '#555',
                lineHeight: 1.6,
                marginTop: 'auto',
              }}
            >
              {card.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
