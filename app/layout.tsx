import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import './globals.css'

// Statiska meddelanden för root-routes (utanför [locale])
// Routes inom [locale] använder sin egen layout med korrekt locale
import ckbMessages from '../messages/ckb.json'

export const metadata: Metadata = {
  title: {
    default: 'ژیان | Jiyan',
    template: '%s | ژیان',
  },
  description: 'ژیان — ژورنالیزمی سەربەخۆ بۆ کوردستان و ئەوروپا',
  keywords:    ['kurdistan', 'kurdish', 'news', 'jiyan', 'ژیان'],
}

// Rot-layout för hela applikationen
// Wrappas med NextIntlClientProvider (locale: ckb som default)
// för att stödja TopStrip och Navigation-komponenter med next-intl
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ckb" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Naskh+Arabic:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider locale="ckb" messages={ckbMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
