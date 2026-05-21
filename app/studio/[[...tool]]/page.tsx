'use client'

// Inbyggd Sanity Studio — tillgänglig på /studio
// Kräver NEXT_PUBLIC_SANITY_PROJECT_ID i .env.local

import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
