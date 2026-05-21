// CultureOpinionStrip — åsiktsstrip för kultursidan
// Speglar .opinion-strip i culture.html med kultur-grön accentfärg
// Visar tre kolumner med skribent, avatar och rubrik

interface CultureOpinionItem {
  initials:    string
  authorName:  string
  avatarColor: string
  headline:    string
  slug:        string
}

interface CultureOpinionStripProps {
  opinions: CultureOpinionItem[]
}

export function CultureOpinionStrip({ opinions }: CultureOpinionStripProps) {
  return (
    <div
      style={{
        background:    'var(--off)',
        borderTop:     '3px solid var(--navy)',
        padding:       '16px 0 20px',
        marginBottom:  '24px',
      }}
    >
      {/* Strip-titel */}
      <div
        style={{
          fontFamily:   'var(--serif)',
          fontSize:     '1.1rem',
          fontWeight:   700,
          color:        'var(--navy)',
          marginBottom: '14px',
          padding:      '0 0',
        }}
      >
        ڕای کەسی — کولتوور
      </div>

      {/* Tre kolumner med åsikter */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {opinions.map((opinion, i) => (
          <div key={i} style={{ cursor: 'pointer' }}>
            {/* Avatar med initialer */}
            <div
              style={{
                width:           '52px',
                height:          '52px',
                borderRadius:    '50%',
                background:      opinion.avatarColor,
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
                fontWeight:      900,
                color:           'white',
                fontSize:        '1.1rem',
                marginBottom:    '8px',
              }}
            >
              {opinion.initials}
            </div>

            {/* Skribentnami */}
            <div
              style={{
                fontWeight:   700,
                fontSize:     '0.82rem',
                color:        '#005f4e',
                marginBottom: '4px',
              }}
            >
              {opinion.authorName}
            </div>

            {/* Åsiktsrubrik */}
            <p
              style={{
                fontFamily: 'var(--serif)',
                fontSize:   '0.92rem',
                lineHeight: 1.55,
              }}
            >
              {opinion.headline}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
