'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Product {
  id: string
  slug: string
  name: string
  image: string
  category: string
}

type Props = {
  products: Product[]
}

export default function ProductosClient({ products }: Props) {
  const [selectedCat, setSelectedCat] = useState<string>('todas')
  const allRef = useRef<HTMLDivElement>(null)

  const destacados: Product[] = products
    .filter(
      (p) => selectedCat === 'todas' || p.category === selectedCat
    )
    .slice(0, 4)

  const filtrados: Product[] = products.filter(
    (p) => selectedCat === 'todas' || p.category === selectedCat
  )

  const categories = ['todas', 'vendajes-y-gasas', 'antispeticos', 'instrumental', 'proteccion']

  return (
    <main className="container mx-auto px-6 py-16 space-y-12">
      <section className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-lg ${
              selectedCat === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat === 'todas' ? 'Todas' : cat.replace('-', ' ')}
          </button>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {selectedCat === 'todas'
            ? 'Productos Destacados'
            : `Destacados en ${selectedCat.replace('-', ' ')}`}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destacados.map((p: Product) => (
            <Link
              key={p.id}
              href={`/productos/${p.slug}`}
              className="group"
            >
              <div className="relative h-40 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="mt-2 font-medium text-gray-800 group-hover:text-blue-600">
                {p.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section ref={allRef}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Todos los Productos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtrados.map((p: Product) => (
            <Link
              key={p.id}
              href={`/productos/${p.slug}`}
              className="group"
            >
              <div className="h-32 relative rounded-md overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-1 text-sm text-gray-700 group-hover:text-blue-600">
                {p.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
