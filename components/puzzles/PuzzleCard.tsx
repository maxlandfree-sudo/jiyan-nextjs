// PuzzleCard — spelkort med ikon, färg, svårighet och spelaknapp
// Hover-effekter hanteras via CSS-klasser (jiyan-puzzle-card, jiyan-puzzle-play-btn)

interface PuzzleCardProps {
  name:        string
  nameKurdish: string
  description: string
  icon:        string
  accentColor: string
  difficulty:  1 | 2 | 3
  href?:       string
}

export function PuzzleCard({
  name,
  nameKurdish,
  description,
  icon,
  accentColor,
  difficulty,
  href = '#',
}: PuzzleCardProps) {
  const stars = Array.from({ length: 3 }, (_, i) => i < difficulty)

  return (
    <div className="jiyan-puzzle-card">
      {/* Färgad toppsektion med ikon */}
      <div
        style={{
          background: accentColor,
          padding:    '28px 24px',
          display:    'flex',
          alignItems: 'center',
          gap:        '16px',
        }}
      >
        <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>{icon}</span>
        <div>
          <div style={{
            color:      'white',
            fontSize:   '1.3rem',
            fontWeight: 700,
            fontFamily: 'var(--serif)',
          }}>
            {nameKurdish}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', marginTop: '2px' }}>
            {name}
          </div>
        </div>
      </div>

      {/* Innehåll */}
      <div style={{
        padding:       '18px 20px',
        flex:          1,
        display:       'flex',
        flexDirection: 'column',
        gap:           '14px',
      }}>
        <p style={{ fontSize: '0.85rem', color: '#444', lineHeight: 1.6 }}>
          {description}
        </p>

        {/* Svårighetsgrad */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.72rem', color: '#767676', fontWeight: 600 }}>ئاستی سەختی:</span>
          <div style={{ display: 'flex', gap: '3px' }}>
            {stars.map((filled, i) => (
              <span
                key={i}
                style={{
                  color:    filled ? accentColor : '#dcdcdc',
                  fontSize: '1rem',
                  lineHeight: 1,
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Spela-knapp — hover via CSS-klass */}
        <a
          href={href}
          className="jiyan-puzzle-play-btn"
          style={{ background: accentColor, marginTop: 'auto' }}
        >
          یاری بکە
        </a>
      </div>
    </div>
  )
}
