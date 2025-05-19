// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Tienda Promacson',
  description: 'Tu tienda de confianza para productos de calidad',
  icons: {
    icon: '/images/promacson-logo.png',
    shortcut: '/images/promacson-logo.png',
    apple: '/images/promacson-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
     <head/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
