import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/revalidate
 *
 * Webhook-endpoint som Sanity anropar vid innehållsändring (ISR-revalidering).
 *
 * Konfigurera i Sanity:
 *   https://www.sanity.io/manage → ditt projekt → API → Webhooks
 *   URL:    https://din-domän.vercel.app/api/revalidate
 *   Trigger: on create, update, delete
 *   Secret: samma värde som SANITY_WEBHOOK_SECRET i Vercel-miljövariablerna
 *
 * Vercel skickar hemligheten som HTTP-header: x-sanity-webhook-secret
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  // Verifiera webhook-hemligheten
  const secret = request.headers.get('x-sanity-webhook-secret')
  const expectedSecret = process.env.SANITY_WEBHOOK_SECRET

  if (!expectedSecret) {
    console.warn('SANITY_WEBHOOK_SECRET är inte satt — revalidering nekad')
    return NextResponse.json(
      { error: 'Webhook-hemlighet inte konfigurerad' },
      { status: 500 }
    )
  }

  if (secret !== expectedSecret) {
    return NextResponse.json(
      { error: 'Ogiltig webhook-hemlighet' },
      { status: 401 }
    )
  }

  try {
    // Revalidera alla routes som kan påverkas av innehållsändring
    revalidatePath('/', 'page')
    revalidatePath('/[locale]', 'layout')
    revalidatePath('/[locale]/[section]', 'page')
    revalidatePath('/[locale]/article/[slug]', 'page')

    console.log(`[revalidate] Revalidering utförd: ${new Date().toISOString()}`)

    return NextResponse.json(
      { revalidated: true, now: Date.now() },
      { status: 200 }
    )
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Okänt fel'
    console.error('[revalidate] Misslyckades:', message)
    return NextResponse.json(
      { error: 'Revalidering misslyckades', details: message },
      { status: 500 }
    )
  }
}
