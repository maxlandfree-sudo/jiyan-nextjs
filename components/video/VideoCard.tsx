// VideoCard — thumbnail + metadata

interface VideoCardProps {
  title:        string
  thumbnailUrl: string
  duration:     string
  category:     string
  date:         string
  slug:         string
}

export function VideoCard({
  title,
  thumbnailUrl,
  duration,
  category,
  date,
  slug,
}: VideoCardProps) {
  return (
    <a
      href={`/video/${slug}`}
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position:     'relative',
          width:        '100%',
          paddingBottom: '56.25%',
          overflow:     'hidden',
          background:   '#111',
          marginBottom: '10px',
        }}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          style={{
            position:  'absolute',
            top: 0, left: 0,
            width:     '100%',
            height:    '100%',
            objectFit: 'cover',
            opacity:   0.88,
            transition: 'opacity 0.15s',
          }}
        />

        {/* Play-ikon */}
        <div
          style={{
            position:        'absolute',
            top:             '50%',
            left:            '50%',
            transform:       'translate(-50%, -50%)',
            width:           40,
            height:          40,
            borderRadius:    '50%',
            background:      'rgba(255,255,255,0.9)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M6 4l14 8-14 8V4z" fill="#111" />
          </svg>
        </div>

        {/* Varaktighet */}
        <div
          style={{
            position:     'absolute',
            bottom:       '6px',
            left:         '8px',
            background:   'rgba(0,0,0,0.75)',
            color:        '#fff',
            fontSize:     '0.68rem',
            fontWeight:   700,
            padding:      '2px 6px',
            borderRadius: '2px',
          }}
        >
          {duration}
        </div>

        {/* Kategori-badge */}
        <div
          style={{
            position:     'absolute',
            top:          '8px',
            right:        '8px',
            background:   'var(--video)',
            color:        '#fff',
            fontSize:     '0.65rem',
            fontWeight:   700,
            padding:      '2px 7px',
            borderRadius: '2px',
          }}
        >
          {category}
        </div>
      </div>

      {/* Metadata */}
      <div
        style={{
          fontFamily:   'var(--serif)',
          fontSize:     '0.88rem',
          fontWeight:   700,
          lineHeight:   1.45,
          marginBottom: '5px',
          color:        'var(--text)',
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{date}</div>
    </a>
  )
}
