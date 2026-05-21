// SportHero — Stor match/tävlingsartikel med live-score badge
// Guardian Sport-inspirerat, RTL/soraniska kurdiska

import Image from 'next/image'
import Link from 'next/link'

export interface SportHeroData {
  id:           string
  headline:     string
  standfirst?:  string
  imageUrl:     string
  imageCaption?: string
  kicker?:      string
  isLive?:      boolean
  liveScore?:   { home: string; homeScore: number; away: string; awayScore: number }
  author?:      { name: string; initials?: string; avatarColor?: string }
  publishedAt?: string
  slug:         string
}

interface SportHeroProps {
  article: SportHeroData
}

export function SportHero({ article }: SportHeroProps) {
  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: '1fr 380px',
        gap:                 '0 24px',
        borderBottom:        '1px solid var(--border)',
        paddingBottom:       '28px',
        marginBottom:        '28px',
      }}
    >
      {/* Vänster: text */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>

        {/* Kicker + Live-badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          {article.kicker && (
            <span
              style={{
                color:      '#003580',
                fontSize:   '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {article.kicker}
            </span>
          )}
          {article.isLive && (
            <span
              style={{
                background:   '#c70000',
                color:        'white',
                fontSize:     '0.68rem',
                fontWeight:   700,
                padding:      '2px 7px',
                borderRadius: '3px',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display:      'inline-flex',
                alignItems:   'center',
                gap:          '4px',
              }}
            >
              <span
                style={{
                  width:        '6px',
                  height:       '6px',
                  borderRadius: '50%',
                  background:   'white',
                  display:      'inline-block',
                  animation:    'pulse 1.5s infinite',
                }}
              />
              پێشکەش
            </span>
          )}
        </div>

        {/* Live-score card */}
        {article.liveScore && (
          <div
            style={{
              background:   '#003580',
              color:        'white',
              borderRadius: '6px',
              padding:      '12px 16px',
              marginBottom: '14px',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
              gap:          '20px',
              fontFamily:   'var(--sans)',
              fontSize:     '1.1rem',
              fontWeight:   700,
              maxWidth:     '340px',
            }}
          >
            <span>{article.liveScore.home}</span>
            <span
              style={{
                background:   'rgba(255,255,255,0.15)',
                padding:      '4px 14px',
                borderRadius: '4px',
                fontSize:     '1.3rem',
                letterSpacing: '0.06em',
              }}
            >
              {article.liveScore.homeScore} — {article.liveScore.awayScore}
            </span>
            <span>{article.liveScore.away}</span>
          </div>
        )}

        {/* Rubrik */}
        <Link
          href={`/article/${article.slug}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <h2
            style={{
              fontFamily:  'var(--serif)',
              fontSize:    '2rem',
              fontWeight:  700,
              lineHeight:  1.25,
              marginBottom: '12px',
              color:       'var(--text)',
            }}
          >
            {article.headline}
          </h2>
        </Link>

        {/* Ingress */}
        {article.standfirst && (
          <p
            style={{
              fontFamily:  'var(--serif)',
              fontSize:    '1.05rem',
              lineHeight:  1.6,
              color:       '#3a3a3a',
              marginBottom: '14px',
            }}
          >
            {article.standfirst}
          </p>
        )}

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--muted)' }}>
          {article.author && (
            <>
              <div
                style={{
                  width:        '28px',
                  height:       '28px',
                  borderRadius: '50%',
                  background:   article.author.avatarColor || '#003580',
                  color:        'white',
                  display:      'flex',
                  alignItems:   'center',
                  justifyContent: 'center',
                  fontSize:     '0.72rem',
                  fontWeight:   700,
                  flexShrink:   0,
                }}
              >
                {article.author.initials || article.author.name.charAt(0)}
              </div>
              <span style={{ fontWeight: 600, color: '#333' }}>{article.author.name}</span>
            </>
          )}
          {article.publishedAt && (
            <>
              <span>·</span>
              <span>{article.publishedAt}</span>
            </>
          )}
        </div>
      </div>

      {/* Höger: bild */}
      <div>
        <div style={{ position: 'relative', width: '100%', height: '280px' }}>
          <Image
            src={article.imageUrl}
            alt={article.headline}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        {article.imageCaption && (
          <p
            style={{
              fontSize:    '0.72rem',
              color:       'var(--muted)',
              marginTop:   '5px',
              lineHeight:  1.45,
            }}
          >
            {article.imageCaption}
          </p>
        )}
      </div>
    </div>
  )
}
