import type { Metadata } from 'next'
import ContactoClient from './contactoClient'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tiendapromacson.com'

export const metadata: Metadata = {
  title: 'Tienda Promacson – Contacto',
  description: 'Contáctanos directamente vía teléfono o correo electrónico para cualquier consulta o asistencia personalizada.',
  keywords: ['contacto', 'Tienda Promacson', 'material de curación', 'soporte médico', 'ayuda clínica'],
  authors: [{ name: 'Tienda Promacson', url: `${baseUrl}/nosotros` }],
  openGraph: {
    title: 'Tienda Promacson – Contacto',
    description: 'Contáctanos directamente vía teléfono o correo electrónico para cualquier consulta o asistencia personalizada.',
    url: `${baseUrl}/contacto`,
    siteName: 'Tienda Promacson',
    images: [
      {
        url: `${baseUrl}/images/og-contacto.jpg`,
        width: 1200,
        height: 630,
        alt: 'Contacto Tienda Promacson'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  alternates: {
    canonical: `${baseUrl}/contacto`
  },
  other: {
    viewport: 'width=device-width, initial-scale=1',
    robots: 'index, follow'
  }
}

export default function Page() {
  return <ContactoClient />
}
