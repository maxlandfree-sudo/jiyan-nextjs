// ReviewCard — recensionskort för TV/Radio-sektionen på kultursidan
// Speglar .review-card i culture.html
// Visar bild, typ-märke, stjärnbetyg, titel och recensent

import Image from 'next/image'
import Link from 'next/link'

export interface ReviewCardData {
  id:        string
  type:      string        // t.ex. "دراما", "داکیومێنتاری", "کۆمیدی"
  typeColor: string        // CSS-färg för typ-badge
  rating:    string        // t.ex. "★★★★★"
  title:     string
  reviewer:  string
  date:      string
  imageUrl:  string
  slug:      string
}

interface ReviewCardProps {
  card: ReviewCardData
}

export function ReviewCard({ card }: ReviewCardProps) {
  return (
    <Link
      href={`/article/${card.slug}`}
      style={{
        display:        'block',
        border:         '1px solid var(--border)',
        overflow:       'hidden',
        cursor:         'pointer',
        textDecoration: 'none',
        color:          'inherit',
      }}
    >
      {/* Kortbild */}
      <div style={{ position: 'relative', width: '100%', height: '170px' }}>
        <Image src={card.imageUrl} alt={card.title} fill style={{ objectFit: 'cover' }} />
      </div>

      {/* Kortinnehåll */}
      <div style={{ padding: '12px' }}>
        {/* Typ-badge */}
        <span
          style={{
            fontSize:      '0.68rem',
            fontWeight:    700,
            color:         'white',
            display:       'inline-block',
            padding:       '2px 7px',
            borderRadius:  '2px',
            marginBottom:  '6px',
            background:    card.typeColor,
          }}
        >
          {card.type}
        </span>

        {/* Stjärnbetyg */}
        <div style={{ color: 'var(--culture)', fontSize: '0.82rem', marginBottom: '4px', letterSpacing: '2px' }}>
          {card.rating}
        </div>

        {/* Recension titel */}
        <div
          style={{
            fontFamily:   'var(--serif)',
            fontSize:     '0.95rem',
            fontWeight:   700,
            lineHeight:   1.45,
            marginBottom: '5px',
          }}
        >
          {card.title}
        </div>

        {/* Recensent och datum */}
        <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
          {card.reviewer} · {card.date}
        </div>
      </div>
    </Link>
  )
}


interface ReviewCardGridProps {
  cards: ReviewCardData[]
}

export function ReviewCardGrid({ cards }: ReviewCardGridProps) {
  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap:                 '16px',
      }}
    >
      {cards.map((card) => (
        <ReviewCard key={card.id} card={card} />
      ))}
    </div>
  )
}
