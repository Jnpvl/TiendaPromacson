import type { Metadata } from 'next'
import HomeClient from './homeClient'
import brands from '../../src/app/data/brands.json'

export const metadata: Metadata = {
  title: 'Tienda Promacson – Material de Curación Profesional',
  description: 'Catálogo de vendajes, gasas, antisépticos e instrumental médico de alta calidad.',
  keywords: [
    'material de curación',
    'vendajes',
    'gasas',
    'antisépticos',
    'instrumental médico',
    'Promacson'
  ],
  authors: [{ name: 'Promacson', url: 'https://tudominio.com/nosotros' }],
  openGraph: {
    title: 'Promacson – Material de Curación Profesional',
    description: 'Catálogo de vendajes, gasas, antisépticos e instrumental médico de alta calidad.',
    url: 'https://tudominio.com',
    siteName: 'Promacson',
    images: [
      {
        url: 'https://tudominio.com/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Productos de curación Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promacson – Material de Curación Profesional',
    description: 'Catálogo de vendajes, gasas, antisépticos e instrumental médico de alta calidad.',
    images: ['https://tudominio.com/images/twitter-home.jpg']
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <HomeClient brands={brands} />
}