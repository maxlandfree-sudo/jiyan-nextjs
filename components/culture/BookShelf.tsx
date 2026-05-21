// BookShelf — bokhylla-grid för kultursidan
// Speglar .book-shelf i culture.html
// Visar bokomslag med titel, författare och betyg

import Image from 'next/image'
import Link from 'next/link'

export interface BookData {
  id:       string
  title:    string
  author:   string
  rating:   string        // t.ex. "★★★★★"
  imageUrl: string
  slug:     string
}

interface BookShelfProps {
  books: BookData[]
}

export function BookShelf({ books }: BookShelfProps) {
  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap:                 '12px',
        marginBottom:        '16px',
      }}
    >
      {books.map((book) => (
        <Link
          key={book.id}
          href={`/article/${book.slug}`}
          style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
        >
          {/* Bokcover — 0.65 aspect ratio (klassiskt bokformat) */}
          <div
            style={{
              position:     'relative',
              width:        '100%',
              aspectRatio:  '0.65',
              marginBottom: '6px',
              boxShadow:    '3px 3px 8px rgba(0,0,0,0.18)',
            }}
          >
            <Image src={book.imageUrl} alt={book.title} fill style={{ objectFit: 'cover' }} />
          </div>

          {/* Boktitel */}
          <div
            style={{
              fontFamily:  'var(--serif)',
              fontSize:    '0.8rem',
              fontWeight:  700,
              lineHeight:  1.4,
              marginBottom: '2px',
            }}
          >
            {book.title}
          </div>

          {/* Författarnamn */}
          <div style={{ fontSize: '0.72rem', color: 'var(--muted)', marginBottom: '3px' }}>
            {book.author}
          </div>

          {/* Stjärnbetyg */}
          <div style={{ color: 'var(--books)', fontSize: '0.72rem', letterSpacing: '1px' }}>
            {book.rating}
          </div>
        </Link>
      ))}
    </div>
  )
}
