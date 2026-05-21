/**
 * Sanity CORS-konfiguration för Jiyan ژیان
 *
 * Kör skriptet med:
 *   node scripts/setup-cors.mjs
 *
 * Krav:
 *   - SANITY_API_TOKEN     : Token med editor- eller admin-rättigheter
 *                            (skapa på https://www.sanity.io/manage → API → Tokens)
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID : Ditt Sanity-projekt-ID
 *
 * Lägg till din egen produktionsdomän:
 *   Redigera arrayen `originsToAdd` nedan och lägg till t.ex.:
 *   { origin: 'https://jiyan.se', allowCredentials: true }
 *
 * Alternativt: lägg till manuellt på
 *   https://www.sanity.io/manage → ditt projekt → API → CORS Origins
 */

const ORIGINS_TO_ADD = [
  { origin: 'http://localhost:3000', allowCredentials: true },
  { origin: 'http://localhost:3333', allowCredentials: true },
  // Vercel-deployment — byt ut mot din faktiska domän efter deploy
  { origin: 'https://jiyan.vercel.app', allowCredentials: true },
  // Lägg till din anpassade domän här, t.ex.:
  // { origin: 'https://jiyan.se', allowCredentials: true },
]

async function setupCors() {
  const token = process.env.SANITY_API_TOKEN
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

  if (!token) {
    console.error('Fel: SANITY_API_TOKEN saknas i miljövariablerna.')
    console.error('Skapa en token på https://www.sanity.io/manage → API → Tokens')
    process.exit(1)
  }

  if (!projectId) {
    console.error('Fel: NEXT_PUBLIC_SANITY_PROJECT_ID saknas i miljövariablerna.')
    process.exit(1)
  }

  console.log(`Konfigurerar CORS för Sanity-projekt: ${projectId}`)
  console.log('---')

  // Hämta befintliga CORS-origins
  const listUrl = `https://api.sanity.io/v2021-06-07/projects/${projectId}/cors`
  const listResponse = await fetch(listUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!listResponse.ok) {
    const text = await listResponse.text()
    console.error(`Kunde inte hämta befintliga CORS-origins: ${listResponse.status} ${text}`)
    process.exit(1)
  }

  const existingOrigins = await listResponse.json()
  const existingSet = new Set(existingOrigins.map((o) => o.origin))

  console.log('Befintliga CORS-origins:')
  if (existingOrigins.length === 0) {
    console.log('  (inga)')
  } else {
    existingOrigins.forEach((o) => console.log(`  ${o.origin}`))
  }
  console.log('---')

  // Lägg till saknade origins
  let added = 0
  let skipped = 0

  for (const { origin, allowCredentials } of ORIGINS_TO_ADD) {
    if (existingSet.has(origin)) {
      console.log(`Hoppar över (finns redan): ${origin}`)
      skipped++
      continue
    }

    const addUrl = `https://api.sanity.io/v2021-06-07/projects/${projectId}/cors`
    const addResponse = await fetch(addUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ origin, allowCredentials }),
    })

    if (addResponse.ok) {
      console.log(`Lade till: ${origin}`)
      added++
    } else {
      const text = await addResponse.text()
      console.error(`Misslyckades med att lägga till ${origin}: ${addResponse.status} ${text}`)
    }
  }

  console.log('---')
  console.log(`Klart! Lade till: ${added} origin(s), hoppade över: ${skipped} (redan befintliga)`)
  console.log('')
  console.log('Verifiera på: https://www.sanity.io/manage → ditt projekt → API → CORS Origins')
}

setupCors().catch((err) => {
  console.error('Oväntat fel:', err)
  process.exit(1)
})
