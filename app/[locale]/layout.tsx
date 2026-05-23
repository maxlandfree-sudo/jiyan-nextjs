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

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const dir = (RTL_LOCALES as readonly string[]).includes(locale) ? 'rtl' : 'ltr'
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <div lang={locale} dir={dir} style={{ minHeight: '100%' }}>
        {children}
      </div>
    </NextIntlClientProvider>
  )
}
