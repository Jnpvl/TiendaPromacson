import type { Metadata } from 'next'
import NosotrosClient from './nosotrosClient'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tiendapromacson.com'
const fullUrl = `${baseUrl}/nosotros`

export const metadata: Metadata = {
  title: 'Tienda Promacson – Sobre Nosotros',
  description: 'Conoce la historia, misión y valores de Tienda Promacson, líder en material de curación profesional.',
  keywords: [
    'Tienda Promacson',
    'material de curación',
    'nosotros',
    'historia',
    'misión',
    'valores'
  ],
  authors: [{ name: 'Tienda Promacson', url: `${baseUrl}/nosotros` }],
  openGraph: {
    title: 'Tienda Promacson – Sobre Nosotros',
    description: 'Conoce la historia, misión y valores de Tienda Promacson, líder en material de curación profesional.',
    url: fullUrl,
    siteName: 'Tienda Promacson',
    images: [
      {
        url: `${baseUrl}/images/tienda2.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Equipo de Tienda Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  alternates: {
    canonical: fullUrl
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <NosotrosClient />
}
