// ClimateHero — Stor klimatartikel med temperatur-badge och URGENT-etikett

interface ClimateHeroProps {
  headline:   string
  standfirst: string
  imageUrl:   string
  author:     string
  date:       string
  slug:       string
  tempBadge:  string
}

export function ClimateHero({
  headline,
  standfirst,
  imageUrl,
  author,
  date,
  slug,
  tempBadge,
}: ClimateHeroProps) {
  return (
    <div
      style={{
        borderTop:    '3px solid var(--climate)',
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
            position:    'relative',
            width:       '100%',
            height:      '420px',
            overflow:    'hidden',
            marginBottom: '16px',
          }}
        >
          <img
            src={imageUrl}
            alt={headline}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {/* URGENT-etikett */}
          <div
            style={{
              position:    'absolute',
              top:         '16px',
              right:       '16px',
              background:  '#e65c00',
              color:       '#fff',
              fontWeight:  900,
              fontSize:    '0.7rem',
              padding:     '4px 10px',
              borderRadius: '2px',
              letterSpacing: '0.06em',
            }}
          >
            URGENT
          </div>

          {/* Temperatur-badge */}
          <div
            style={{
              position:      'absolute',
              bottom:        '16px',
              right:         '16px',
              background:    '#b91c1c',
              color:         '#fff',
              fontWeight:    900,
              fontSize:      '1.4rem',
              padding:       '8px 16px',
              borderRadius:  '4px',
              lineHeight:    1,
            }}
          >
            {tempBadge}
          </div>
        </div>

        {/* Rubrik och ingress */}
        <div
          style={{
            fontSize:    '0.75rem',
            fontWeight:  700,
            color:       'var(--climate)',
            marginBottom: '8px',
          }}
        >
          ئاووهەوا
        </div>
        <h2
          style={{
            fontFamily:  'var(--serif)',
            fontSize:    '1.7rem',
            fontWeight:  700,
            lineHeight:  1.38,
            marginBottom: '10px',
            color:       'var(--text)',
          }}
        >
          {headline}
        </h2>
        <p
          style={{
            fontFamily:  'var(--serif)',
            fontSize:    '1rem',
            color:       '#444',
            lineHeight:  1.7,
            marginBottom: '10px',
          }}
        >
          {standfirst}
        </p>
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
          <span style={{ color: 'var(--climate)', fontWeight: 600 }}>{author}</span>
          <span>·</span>
          <span>{date}</span>
        </div>
      </a>
    </div>
  )
}
