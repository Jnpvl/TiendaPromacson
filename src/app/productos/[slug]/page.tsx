import { notFound } from 'next/navigation'
import { allProducts } from '@/app/utils/products'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { GaleriaProducto } from '@/app/components/GaleriaProducto'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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
  const { slug } = await params
  const decoded = decodeURIComponent(slug)

  const producto = allProducts.find(p => p.slug === decoded)
  if (!producto) return notFound()

  const relacionados = allProducts
    .filter(p => p.category === producto.category && p.slug !== producto.slug)
    .slice(0, 4)

  return (
    <main className="container mx-auto px-6 py-16 space-y-16">

      {/* Botón regresar */}
      <Link
        href="/productos"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition"
      >
        <ArrowLeft size={18} className="mr-2" />
        Volver al catálogo
      </Link>

      {/* Detalle del producto */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Galería */}
        <div className="space-y-4">
          <GaleriaProducto images={producto.images} name={producto.name} />
        </div>

        {/* Información */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{producto.name}</h1>
          <p className="text-gray-600 text-base mb-4">{producto.description}</p>
          <div className="text-sm text-gray-500 mb-6">
            <strong className="text-gray-700">Marca:</strong> {producto.brand}
          </div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Características</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {producto.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Productos relacionados */}
      {relacionados.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Productos relacionados
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relacionados.map((rel) => (
              <Link
                key={rel.id}
                href={`/productos/${rel.slug}`}
                className="group"
              >
                <div className="relative h-40 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={rel.images[0]}
                    alt={rel.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 font-medium text-gray-800 group-hover:text-blue-600">
                  {rel.name}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
