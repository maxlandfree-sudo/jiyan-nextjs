// ExhibitionBanner — bred utställningsbanner för kultursidan
// Speglar .exhibition-banner i culture.html
// Visar ett utställningsbanner med bild, overlay-text och metadata

import Image from 'next/image'
import Link from 'next/link'

interface ExhibitionBannerProps {
  tag:      string    // t.ex. "نمایشگاهی تایبەت · تێیت مۆدەرن، لۆندەن"
  title:    string
  meta:     string    // datum, tider etc.
  imageUrl: string
  href:     string
}

export function ExhibitionBanner({ tag, title, meta, imageUrl, href }: ExhibitionBannerProps) {
  return (
    <Link
      href={href}
      style={{
        display:       'block',
        position:      'relative',
        overflow:      'hidden',
        cursor:        'pointer',
        marginBottom:  '24px',
        textDecoration: 'none',
      }}
    >
      {/* Bakgrundsbild med mörkningfilter */}
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover', filter: 'brightness(0.55)' }}
        />
      </div>

      {/* Textoverlay med gradient nerifrån */}
      <div
        style={{
          position:       'absolute',
          inset:          0,
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'flex-end',
          padding:        '28px',
          background:     'linear-gradient(transparent 30%, rgba(0,0,0,0.75))',
        }}
      >
        {/* Kategorimärke i gult */}
        <div
          style={{
            fontSize:      '0.7rem',
            fontWeight:    700,
            color:         'var(--yellow)',
            letterSpacing: '0.1em',
            marginBottom:  '8px',
          }}
        >
          {tag}
        </div>

        {/* Utställningstitel */}
        <div
          style={{
            fontFamily:   'var(--serif)',
            fontSize:     '1.7rem',
            fontWeight:   700,
            color:        'white',
            lineHeight:   1.3,
            marginBottom: '8px',
          }}
        >
          {title}
        </div>

        {/* Metadata — datum och tider */}
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>
          {meta}
        </div>
      </div>
    </Link>
  )
}
