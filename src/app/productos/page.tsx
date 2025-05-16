import type { Metadata } from 'next'
import ProductosClient from './productosClient'
import productos from '../../app/data/products.json';

export const metadata: Metadata = {
  title: 'Promacson – Nuestros Productos',
  description: 'Explora nuestro amplio catálogo de material de curación profesional: vendajes, gasas, antisépticos, instrumental y más.',
  keywords: [
    'material de curación',
    'vendajes',
    'gasas',
    'antisépticos',
    'instrumental médico',
    'protección',
    'Promacson'
  ],
  authors: [{ name: 'Promacson', url: 'https://tudominio.com/nosotros' }],
  openGraph: {
    title: 'Promacson – Nuestros Productos',
    description: 'Explora nuestro amplio catálogo de material de curación profesional: vendajes, gasas, antisépticos, instrumental y más.',
    url: 'https://tudominio.com/productos',
    siteName: 'Promacson',
    images: [
      {
        url: 'https://tudominio.com/images/og-productos.jpg',
        width: 1200,
        height: 630,
        alt: 'Catálogo de productos Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promacson – Nuestros Productos',
    description: 'Explora nuestro amplio catálogo de material de curación profesional: vendajes, gasas, antisépticos, instrumental y más.',
    images: ['https://tudominio.com/images/twitter-productos.jpg']
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
    const productosData: any[] = productos
    return <ProductosClient products={productosData} />
  }