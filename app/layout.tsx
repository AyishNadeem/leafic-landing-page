import type { Metadata } from 'next'
import { Fraunces, Inter, Press_Start_2P } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Leafic - Your plants, kept private',
  description:
    'A calm, private plant care companion. No tracking, no subscriptions, honest on-device AI. Free for all.',
  generator: 'v0.app',
  icons: {
    icon: '/leafic-logo.webp',
    apple: '/leafic-logo.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${fraunces.variable} ${inter.variable} ${pressStart.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
