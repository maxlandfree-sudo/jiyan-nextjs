import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import '../globals.css'

export const metadata: Metadata = {
  title: {
    default: 'ژیان | Jiyan',
    template: '%s | ژیان',
  },
  description: 'ژیان — ژورنالیزمی سەربەخۆ بۆ کوردستان و ئەوروپا',
  keywords: ['kurdistan', 'kurdish', 'news', 'jiyan', 'ژیان'],
}

// RTL-locales
const RTL_LOCALES = ['ckb', 'fa', 'kmr'] as const

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params

  // Validera att locale är stödd
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const dir = (RTL_LOCALES as readonly string[]).includes(locale) ? 'rtl' : 'ltr'

  // Hämta meddelanden för aktuell locale
  const messages = await getMessages()

  return (
    <html lang={locale} dir={dir}>
      <head>
        {/* Förladda Google Fonts för arabiska/kurdiska typsnitt */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
