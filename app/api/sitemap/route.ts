import { NextResponse } from 'next/server'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://jiyan.vercel.app'

const LOCALES = ['ckb', 'en', 'fa', 'kmr'] as const

const SECTIONS = [
  'culture',
  'opinion',
  'sport',
  'climate',
  'lifestyle',
  'video',
  'newsletter',
  'puzzles',
] as const

function buildStaticUrls(): string[] {
  const urls: string[] = [
    // Startsida
    SITE_URL + '/',
    // Lokalspråks-startsidor
    ...LOCALES.map((locale) => `${SITE_URL}/${locale}`),
    // Sektionssidor per locale
    ...LOCALES.flatMap((locale) =>
      SECTIONS.map((section) => `${SITE_URL}/${locale}/${section}`)
    ),
  ]
  return urls
}

function toUrlEntry(loc: string, lastmod?: string, changefreq?: string, priority?: string): string {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : '',
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : '',
    priority ? `    <priority>${priority}</priority>` : '',
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n')
}

export async function GET(): Promise<NextResponse> {
  const today = new Date().toISOString().split('T')[0]
  const staticUrls = buildStaticUrls()

  const urlEntries = staticUrls.map((url, index) => {
    // Startsidan och locale-startsidor får högre prioritet
    const isHome = url === SITE_URL + '/' || LOCALES.some((l) => url === `${SITE_URL}/${l}`)
    const priority = index === 0 ? '1.0' : isHome ? '0.9' : '0.7'
    const changefreq = isHome ? 'daily' : 'weekly'
    return toUrlEntry(url, today, changefreq, priority)
  })

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join('\n')}
</urlset>`

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
