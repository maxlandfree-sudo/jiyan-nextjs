// ColumnistCard — Kolumnistkort med cirkulärt foto och bio
// RTL-anpassat för soraniska kurdiska

import Image from 'next/image'
import Link from 'next/link'

export interface ColumnistData {
  id: string
  name: string
  bio: string
  avatarUrl?: string
  avatarColor?: string
  initials?: string
  latestArticle: {
    headline: string
    slug: string
  }
  slug: string
}

interface ColumnistCardProps {
  columnist: ColumnistData
}

export function ColumnistCard({ columnist }: ColumnistCardProps) {
  const initials = columnist.initials || columnist.name.slice(0, 2)
  const bgColor = columnist.avatarColor || '#1a3a5c'

  return (
    <div className="columnist-card">
      {/* Cirkulärt porträtt */}
      <Link href={`/opinion/columnist/${columnist.slug}`} className="columnist-avatar-link">
        <div className="columnist-avatar" style={{ background: columnist.avatarUrl ? 'transparent' : bgColor }}>
          {columnist.avatarUrl ? (
            <Image
              src={columnist.avatarUrl}
              alt={columnist.name}
              fill
              style={{ objectFit: 'cover', borderRadius: '50%' }}
            />
          ) : (
            <span className="columnist-initials">{initials}</span>
          )}
        </div>
      </Link>

      {/* Namn */}
      <Link href={`/opinion/columnist/${columnist.slug}`} className="columnist-name-link">
        <div className="columnist-name">{columnist.name}</div>
      </Link>

      {/* Bio */}
      <p className="columnist-bio">{columnist.bio}</p>

      {/* Senaste artikel */}
      <Link href={`/article/${columnist.latestArticle.slug}`} className="columnist-latest-link">
        <p className="columnist-latest-headline">{columnist.latestArticle.headline}</p>
      </Link>
    </div>
  )
}
