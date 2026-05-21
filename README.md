# Jiyan ژیان — Next.js + Sanity CMS

Jiyan är en oberoende tidskrift inspirerad av The Guardian, fokuserad på kurdistansk och europeisk journalistik. Det här projektet är en migrering från det befintliga HTML-prototypen till en produktionsklar Next.js 14 + Sanity v3 stack.

## Teknologistack

- **Framework**: Next.js 14 (App Router)
- **CMS**: Sanity v3
- **Styling**: Tailwind CSS + anpassade CSS-variabler
- **Typsnitt**: Noto Naskh Arabic (serif) + Noto Sans Arabic (sans)
- **Språk**: TypeScript
- **RTL-stöd**: Kurdish Sorani (ckb), Farsi (fa), English (en)

## Designsystem

Färgpaletten speglar Guardian-designen med kurdisk identitet:

| Token      | Värde     | Användning                        |
|------------|-----------|-----------------------------------|
| `--navy`   | `#041f4a` | Header, footer, bakgrunder        |
| `--blue`   | `#005689` | Sektionshuvud, kickers, länkar    |
| `--red`    | `#c70000` | Breaking news, Ukraina-sektion    |
| `--yellow` | `#ffbb00` | Aktiva navigationsmarkeringar     |

## Projektstruktur

```
jiyan-nextjs/
├── app/
│   ├── layout.tsx          # Root layout med RTL-stöd
│   ├── page.tsx            # Startsida (Europa-sektion)
│   └── globals.css         # CSS-variabler och globala stilar
├── components/
│   ├── layout/
│   │   ├── TopStrip.tsx    # Övre remsa
│   │   ├── Navigation.tsx  # Huvudnavigation
│   │   ├── SectionHeader.tsx
│   │   ├── BreakingBar.tsx
│   │   └── Footer.tsx
│   ├── articles/
│   │   ├── ArticleCard.tsx # Återanvändbar artikelkort (4 varianter)
│   │   ├── HeroSection.tsx
│   │   ├── CardRow.tsx
│   │   ├── OpinionStrip.tsx
│   │   └── SectionBlock.tsx
│   ├── rolling-strip/
│   │   └── RollingStrip.tsx # Guardian-stil horisontell remsa
│   ├── sidebar/
│   │   └── Sidebar.tsx     # Väder, mest sedda, nyhetsbrev
│   └── ui/
│       └── PaywallBanner.tsx
├── sanity/
│   ├── schemas/
│   │   ├── article.ts      # Flerspråkig artikel med Portable Text
│   │   ├── author.ts       # Skribent med avatar-stöd
│   │   ├── category.ts     # Kategori med underkategorier
│   │   ├── issue.ts        # Tidskriftsutgåva
│   │   └── siteSettings.ts # Globala inställningar
│   └── lib/
│       ├── client.ts       # Sanity-klient
│       ├── queries.ts      # GROQ-queries
│       └── image.ts        # Bildhjälpare
├── types/
│   └── jiyan.ts            # TypeScript-typdefinitioner
├── sanity.config.ts        # Sanity Studio-konfiguration
├── tailwind.config.ts
└── next.config.ts
```

## Komma igång

### 1. Installera beroenden

```bash
npm install
```

### 2. Konfigurera miljövariabler

```bash
cp .env.local.example .env.local
# Fyll i ditt Sanity projekt-ID och token
```

### 3. Skapa Sanity-projekt

```bash
# Skapa ett nytt projekt på sanity.io
# Eller kör: npx sanity@latest init
```

### 4. Starta utvecklingsserver

```bash
# Next.js
npm run dev

# Sanity Studio (separat terminal)
npm run sanity
```

## Internationaliseringsplan (i18n)

Projektet är byggt för tre språk:

| Kod   | Språk            | Riktning |
|-------|------------------|----------|
| `ckb` | Kurdiska sorani  | RTL      |
| `fa`  | Farsi/Persiska   | RTL      |
| `en`  | Engelska         | LTR      |

URL-strukturen med `next-intl`:
- `/` → Kurdish (standard)
- `/fa/...` → Farsi
- `/en/...` → English

## Sanity-schemas

### Artikel (`article`)
- Flerspråkiga rubriker, ingress och brödtext (ckb/fa/en)
- Portable Text för rich text
- Artikeltyp: nyhet, opinion, analys, kultur, sport, breaking
- Slug, kategorireferens, skribent, utgåva

### Skribent (`author`)
- Profilbild med cirkulär avatar
- Initialer för fallback-avatar
- Rolltyp (journalist, columnist, etc.)

### Kategori (`category`)
- Flerspråkiga titlar
- Underkategorier (t.ex. EU, Frankrike, Tyskland under Europa)
- Accentfärg och navigationsordning

## Deployment på Vercel

### Snabbstart

1. Pusha koden till GitHub
2. Gå till vercel.com → "New Project" → importera repot
3. Lägg till miljövariabler (se `.env.local.example`)
4. Klicka Deploy

### Miljövariabler i Vercel

Lägg till följande i Vercel Dashboard → Settings → Environment Variables:

| Variabel | Beskrivning |
|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Ditt Sanity-projekt-ID (hittas på sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Vanligtvis `production` |
| `SANITY_API_TOKEN` | Token med editor-rättigheter för webhook & CORS |
| `SANITY_WEBHOOK_SECRET` | Hemlighet för ISR-revalidering (slumpmässig sträng) |
| `NEXT_PUBLIC_SITE_URL` | Din produktionsdomän, t.ex. `https://jiyan.vercel.app` |

### Sanity CORS efter deployment

Lägg till din Vercel-domän som tillåten CORS-origin:

```bash
# Med skriptet (kräver SANITY_API_TOKEN och NEXT_PUBLIC_SANITY_PROJECT_ID i .env.local):
node scripts/setup-cors.mjs

# Eller manuellt på:
# https://www.sanity.io/manage → ditt projekt → API → CORS Origins
```

### ISR Webhook (automatisk revalidering)

Konfigurera en Sanity-webhook för att automatiskt uppdatera sidor vid innehållsändring:

1. Gå till sanity.io/manage → ditt projekt → API → Webhooks
2. Skapa ny webhook:
   - URL: `https://din-domän.vercel.app/api/revalidate`
   - HTTP Method: POST
   - Triggers: Create, Update, Delete
   - Secret: samma värde som `SANITY_WEBHOOK_SECRET` i Vercel

### Region

Projektet är konfigurerat för regionen `arn1` (Stockholm) för optimal latens mot europeiska och mellanösternläsare.

---

## Migrerat innehåll från index.html

Allt innehåll från den befintliga HTML-prototypen har bevarats:

- Europa-sektion med breaking news-banner
- 4 kortartiklar (klimat, migration, Polen, EU digital)
- 3 opinionsskribenter (Gabi Hinsliff, Timothy Snyder, Maria Georgiou)
- EU-politiksektion (6 artiklar, 2 kolumner)
- Ukraina-sektion med röd accentfärg (4 artiklar)
- Klimatsektion (3 artiklar, 3 kolumner)
- Rolling strip med podcast + 6 artikelkort
- Sidebar: väder (6 städer), mest sedda (6), nyhetsbrev
- Footer med 5 navigationskolumner
