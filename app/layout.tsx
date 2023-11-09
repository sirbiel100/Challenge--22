import './globals.scss'
import Credits from './credits'
import type { Metadata } from 'next'
import { Libre_Franklin } from 'next/font/google'

const libre_franklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Coming Soon Page | GC',
  description: 'Frontend mentor challenge coded by Gabriel Crispim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={libre_franklin.className}>
        {children}
        <Credits />
      </body>
    </html>
  )
}
