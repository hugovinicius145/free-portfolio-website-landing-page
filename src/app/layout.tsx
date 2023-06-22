import './globals.css'
import { Syne, Rubik } from 'next/font/google'

const syne = Syne({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

const rubik = Rubik({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export const metadata = {
  title: 'AARONN | Free Lp Portfolio',
  description: 'Adaptive Logo Design for Your Brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${rubik.variable}`}>
      <body>{children}</body>
    </html>
  )
}
