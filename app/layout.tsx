import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ICASST Schools',
  description: 'A place to learn, lead and belong.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}