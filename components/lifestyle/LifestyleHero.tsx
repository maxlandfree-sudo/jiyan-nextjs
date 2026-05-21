// LifestyleHero — Stor feature med mjuk typografi

interface LifestyleHeroProps {
  headline:   string
  standfirst: string
  imageUrl:   string
  author:     string
  date:       string
  tag:        string
  slug:       string
}

export function LifestyleHero({
  headline,
  standfirst,
  imageUrl,
  author,
  date,
  tag,
  slug,
}: LifestyleHeroProps) {
  return (
    <div
      style={{
        borderTop:    '3px solid var(--lifestyle)',
        paddingTop:   '20px',
        marginBottom: '32px',
      }}
    >
      <a
        href={`/article/${slug}`}
        style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
      >
        {/* Bildbehållare */}
        <div
          style={{
            position:     'relative',
            width:        '100%',
            height:       '440px',
            overflow:     'hidden',
            marginBottom: '18px',
          }}
        >
          <img
            src={imageUrl}
            alt={headline}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Tag overlay */}
          <div
            style={{
              position:     'absolute',
              bottom:       '16px',
              right:        '16px',
              background:   'var(--lifestyle)',
              color:        '#fff',
              fontWeight:   700,
              fontSize:     '0.75rem',
              padding:      '4px 12px',
              borderRadius: '2px',
              letterSpacing: '0.04em',
            }}
          >
            {tag}
          </div>
        </div>

        {/* Textdel */}
        <div
          style={{
            fontSize:    '0.75rem',
            fontWeight:  700,
            color:       'var(--lifestyle)',
            marginBottom: '8px',
            letterSpacing: '0.04em',
          }}
        >
          ژیانی ڕۆژانە
        </div>
        <h2
          style={{
            fontFamily:   'var(--serif)',
            fontSize:     '1.85rem',
            fontWeight:   700,
            lineHeight:   1.38,
            marginBottom: '12px',
            color:        'var(--text)',
          }}
        >
          {headline}
        </h2>
        <p
          style={{
            fontFamily:   'var(--serif)',
            fontSize:     '1.05rem',
            color:        '#444',
            lineHeight:   1.75,
            marginBottom: '12px',
          }}
        >
          {standfirst}
        </p>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
          <span style={{ color: 'var(--lifestyle)', fontWeight: 600 }}>{author}</span>
          <span>·</span>
          <span>{date}</span>
        </div>
      </a>
    </div>
  )
}
