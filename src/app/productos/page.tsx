import type { Metadata } from 'next'
import ProductosClient from './productosClient'
import { allProducts } from '@/app/utils/products'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tiendapromacson.com'

export const metadata: Metadata = {
  title: 'Tienda Promacson – Catálogo de Productos Médicos y Curación',
  description: 'Descubre nuestra gama de productos médicos: cuidado de heridas, ortopedia, medias de compresión, sondas, dispositivos médicos y más.',
  keywords: [
    'productos médicos',
    'material de curación',
    'medias de compresión',
    'cuidado de heridas',
    'ortopedia',
    'sillas de ruedas',
    'sondas',
    'instrumental médico',
    'Tienda Promacson'
  ],
  authors: [{ name: 'Tienda Promacson', url: `${baseUrl}/nosotros` }],
  openGraph: {
    title: 'Tienda Promacson – Catálogo de Productos Médicos y de Curación',
    description: 'Explora nuestro catálogo de confianza en Tienda Promacson: productos médicos profesionales y soluciones para el cuidado de la salud.',
    url: `${baseUrl}/productos`,
    siteName: 'Tienda Promacson',
    images: [
      {
        url: `${baseUrl}/images/tienda2.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Catálogo de productos médicos de Tienda Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  alternates: {
    canonical: `${baseUrl}/productos`
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <ProductosClient products={allProducts} />
}
