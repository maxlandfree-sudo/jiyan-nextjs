import { NextResponse } from 'next/server'

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://jiyan.vercel.app'

export async function GET(): Promise<NextResponse> {
  const body = [
    'User-agent: *',
    'Allow: /',
    // Sanity Studio ska inte indexeras av sökmotorer
    'Disallow: /studio',
    'Disallow: /studio/',
    '',
    `Sitemap: ${SITE_URL}/sitemap.xml`,
  ].join('\n')

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
