// src/app/productos/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { allProducts } from '@/app/utils/products'
import type { Metadata } from 'next'
import Image from 'next/image'

/**
 * Ahora params es Promise<{ slug: string }>
 */
type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // await params para obtener el slug
  const { slug } = await params
  const decoded = decodeURIComponent(slug)

  const producto = allProducts.find(p => p.slug === decoded)
  if (!producto) {
    return {
      title: 'Producto no encontrado – Promacson',
      description: 'Este producto no se encuentra en nuestro catálogo.',
    }
  }

  return {
    title: `Promacson – ${producto.name}`,
    description: producto.description,
    keywords: producto.keywords,
    openGraph: {
      title: producto.name,
      description: producto.description,
      images: [
        {
          url: producto.images[0],
          width: 1200,
          height: 630,
          alt: producto.name,
        },
      ],
    },
  }
}

export default async function Page({ params }: Props) {
  // aquí también hay que await params
  const { slug } = await params
  const decoded = decodeURIComponent(slug)

  const producto = allProducts.find(p => p.slug === decoded)
  if (!producto) return notFound()

  return (
    <main className="container mx-auto px-6 py-16 space-y-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Galería de imágenes */}
        <div className="space-y-4">
          {producto.images.map((img, i) => (
            <div key={i} className="relative w-full h-64 rounded overflow-hidden shadow">
              <Image
                src={img}
                alt={`${producto.name} ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Información */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{producto.name}</h1>
          <p className="text-gray-600 mb-4">{producto.description}</p>
          <p className="text-sm text-gray-500 mb-4">Marca: {producto.brand}</p>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Características</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {producto.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}
