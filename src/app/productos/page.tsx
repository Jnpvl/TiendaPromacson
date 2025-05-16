import type { Metadata } from 'next'
import ProductosClient from './productosClient'
import { allProducts } from '@/app/utils/products'

export const metadata: Metadata = {
  title: 'Promacson – Catálogo de Productos Médicos y de Curación',
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
    'Promacson',
    'tiendapromacson'
  ],
  authors: [{ name: 'Promacson', url: 'https://tiendapromacson.com/nosotros' }],
  openGraph: {
    title: 'Promacson – Catálogo de Productos Médicos y de Curación',
    description: 'Explora nuestro catálogo de confianza en Promacson: productos médicos profesionales y soluciones para el cuidado de la salud.',
    url: 'https://tiendapromacson.com/productos',
    siteName: 'Promacson',
    images: [
      {
        url: 'https://tiendapromacson.com/images/og-productos.jpg',
        width: 1200,
        height: 630,
        alt: 'Catálogo de productos médicos Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promacson – Catálogo de Productos Médicos',
    description: 'Conoce los productos especializados que Promacson tiene para ti: calidad, confianza y atención profesional.',
    images: ['https://tiendapromacson.com/images/twitter-productos.jpg']
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <ProductosClient products={allProducts} />
}
