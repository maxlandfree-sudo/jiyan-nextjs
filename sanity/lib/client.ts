import { createClient } from 'next-sanity'

// Sanity-klient för Jiyan — används för serverside-queries
// Faller tillbaka på ett tomt projekt-ID om env saknas (undviker kastade fel vid lokal dev)
export const client = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn:     process.env.NODE_ENV === 'production',
})

// Hjälpfunktion: true om Sanity är konfigurerat
export const isSanityConfigured =
  Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) &&
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'
