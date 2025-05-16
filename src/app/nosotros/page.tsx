import type { Metadata } from 'next'
import NosotrosClient from './nosotrosClient'

export const metadata: Metadata = {
  title: 'Promacson – Sobre Nosotros',
  description: 'Conoce la historia, misión y valores de Promacson, líder en material de curación profesional.',
  keywords: [
    'Promacson',
    'material de curación',
    'nosotros',
    'historia',
    'misión',
    'valores'
  ],
  authors: [{ name: 'Promacson', url: 'https://tudominio.com/nosotros' }],
  openGraph: {
    title: 'Promacson – Sobre Nosotros',
    description: 'Conoce la historia, misión y valores de Promacson, líder en material de curación profesional.',
    url: 'https://tudominio.com/nosotros',
    siteName: 'Promacson',
    images: [
      {
        url: 'https://tudominio.com/images/og-nosotros.jpg',
        width: 1200,
        height: 630,
        alt: 'Equipo de Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promacson – Sobre Nosotros',
    description: 'Conoce la historia, misión y valores de Promacson, líder en material de curación profesional.',
    images: ['https://tudominio.com/images/twitter-nosotros.jpg']
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <NosotrosClient />
}