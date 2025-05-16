import type { Metadata } from 'next'
import ContactoClient from './contactoClient'

export const metadata: Metadata = {
  title: 'Promacson – Contacto',
  description: 'Contáctanos directamente vía teléfono o correo electrónico para cualquier consulta.',
  keywords: ['contacto', 'Promacson', 'material de curación', 'soporte'],
  authors: [{ name: 'Promacson', url: 'https://tudominio.com/nosotros' }],
  openGraph: {
    title: 'Promacson – Contacto',
    description: 'Contáctanos directamente vía teléfono o correo electrónico para cualquier consulta.',
    url: 'https://tudominio.com/contacto',
    siteName: 'Promacson',
    images: [
      {
        url: 'https://tudominio.com/images/og-contacto.jpg',
        width: 1200,
        height: 630,
        alt: 'Contacto Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Promacson – Contacto',
    description: 'Contáctanos directamente vía teléfono o correo electrónico para cualquier consulta.',
    images: ['https://tudominio.com/images/twitter-contacto.jpg']
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <ContactoClient />
}
