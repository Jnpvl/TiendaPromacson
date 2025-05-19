import type { Metadata } from 'next'
import HomeClient from './homeClient'
import brands from '../../src/app/data/brands.json'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tiendapromacson.com'

export const metadata: Metadata = {
  title: 'Tienda Promacson – Material de Curación Profesional',
  description: 'Catálogo de vendajes, gasas, antisépticos e instrumental médico de alta calidad.',
  keywords: [
    'material de curación',
    'vendajes',
    'gasas',
    'antisépticos',
    'instrumental médico',
    'Tienda Promacson'
  ],
  authors: [{ name: 'Tienda Promacson', url: `${baseUrl}/nosotros` }],
  openGraph: {
    title: 'Tienda Promacson – Material de Curación Profesional',
    description: 'Catálogo de vendajes, gasas, antisépticos e instrumental médico de alta calidad.',
    url: baseUrl,
    siteName: 'Tienda Promacson',
    images: [
      {
        url: `${baseUrl}/images/tienda2.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Productos de curación Tienda Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  alternates: {
    canonical: baseUrl
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <HomeClient brands={brands} />
}
