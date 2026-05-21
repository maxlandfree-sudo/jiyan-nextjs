// AlbumGrid — musikalbumgrid för kultursidan
// Speglar .album-grid i culture.html
// Visar skivomslag med artistnamn, albumtitel och betyg

import Image from 'next/image'
import Link from 'next/link'

export interface AlbumData {
  id:       string
  artist:   string
  title:    string
  genre:    string
  rating:   string        // t.ex. "★★★★★"
  imageUrl: string
  slug:     string
}

interface AlbumGridProps {
  albums: AlbumData[]
}

export function AlbumGrid({ albums }: AlbumGridProps) {
  return (
    <div
      style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap:                 '16px',
        marginBottom:        '20px',
      }}
    >
      {albums.map((album) => (
        <Link
          key={album.id}
          href={`/article/${album.slug}`}
          style={{ display: 'block', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
        >
          {/* Skivomslag — kvadratiskt bilddformat */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1', marginBottom: '8px' }}>
            <Image src={album.imageUrl} alt={album.title} fill style={{ objectFit: 'cover' }} />
          </div>

          {/* Stjärnbetyg */}
          <div style={{ color: 'var(--culture)', fontSize: '0.82rem', marginBottom: '2px', letterSpacing: '2px' }}>
            {album.rating}
          </div>

          {/* Artistnamn */}
          <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '2px' }}>
            {album.artist}
          </div>

          {/* Albumtitel i kursiv serif */}
          <div style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '4px', fontFamily: 'var(--serif)' }}>
            {album.title}
          </div>

          {/* Genre */}
          <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
            {album.genre}
          </div>
        </Link>
      ))}
    </div>
  )
}
