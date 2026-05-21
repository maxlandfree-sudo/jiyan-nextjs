// RecipeCard — Receptkort med tillagnings­tid och svårighets­grad

interface RecipeCardProps {
  title:      string
  imageUrl:   string
  cookTime:   string
  difficulty: 'ئاسان' | 'ناوەند' | 'قورس'
  author:     string
  slug:       string
}

function DifficultyDots({ level }: { level: RecipeCardProps['difficulty'] }) {
  const filled = level === 'ئاسان' ? 1 : level === 'ناوەند' ? 2 : 3
  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          style={{
            width:        8,
            height:       8,
            borderRadius: '50%',
            background:   i <= filled ? 'var(--lifestyle)' : 'var(--border)',
          }}
        />
      ))}
    </div>
  )
}

export function RecipeCard({
  title,
  imageUrl,
  cookTime,
  difficulty,
  author,
  slug,
}: RecipeCardProps) {
  return (
    <a
      href={`/article/${slug}`}
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
          position:     'relative',
          width:        '100%',
          height:       '220px',
          overflow:     'hidden',
          marginBottom: '10px',
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Tillagnings­tid badge */}
        <div
          style={{
            position:     'absolute',
            bottom:       '10px',
            right:        '10px',
            background:   'rgba(0,0,0,0.72)',
            color:        '#fff',
            fontSize:     '0.72rem',
            fontWeight:   700,
            padding:      '3px 8px',
            borderRadius: '2px',
            display:      'flex',
            alignItems:   'center',
            gap:          '4px',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2" />
            <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {cookTime}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        <DifficultyDots level={difficulty} />
        <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{difficulty}</span>
      </div>

      <div
        style={{
          fontFamily:   'var(--serif)',
          fontSize:     '0.95rem',
          fontWeight:   700,
          lineHeight:   1.45,
          marginBottom: '6px',
        }}
      >
        {title}
      </div>

      <div style={{ fontSize: '0.72rem', color: 'var(--lifestyle)', fontWeight: 600 }}>
        {author}
      </div>
    </a>
  )
}
