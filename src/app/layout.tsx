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
  title: 'Mi Empresa – Landing',
  description: 'Bienvenido a la landing de Mi Empresa. Conoce quiénes somos y descubre nuestros productos.',
  openGraph: {
    title: 'Mi Empresa – Landing',
    description: 'Bienvenido a la landing de Mi Empresa. Conoce quiénes somos y descubre nuestros productos.',
    url: 'https://tudominio.com',
    siteName: 'Mi Empresa',
    images: [
      {
        url: 'https://tudominio.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mi Empresa',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Empresa – Landing',
    description: 'Bienvenido a la landing de Mi Empresa. Conoce quiénes somos y descubre nuestros productos.',
    images: ['https://tudominio.com/images/twitter-card.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
