'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'

interface Product {
  id: string
  slug: string
  name: string
  images: string[]
  category: string
}

type Props = {
  products: Product[]
}

export default function ProductosClient({ products }: Props) {
  const [selectedCat, setSelectedCat] = useState<string>('todas')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const allRef = useRef<HTMLDivElement>(null)

  const categories = [
    'todas',
    'Cuidado de Heridas',
    'Compresión y Vascular',
    'Ortopedia y Rehabilitación',
    'Movilidad y Ayudas Técnicas',
    'Protección e Higiene',
    'Dispositivos Médicos',
    'Incontinencia y Sondas'
  ]

  // Aplica filtro de categoría y búsqueda
  const matchSearch = (p: Product) =>
    (selectedCat === 'todas' || p.category === selectedCat) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())

  const destacados: Product[] = products.filter(matchSearch).slice(0, 4)
  const filtrados: Product[] = products.filter(matchSearch)

  return (
    <main className="container mx-auto px-6 py-16 space-y-12">

      {/* Categorías */}
      <section className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCat(cat)
              setSearchTerm('') // Limpiar búsqueda al cambiar de categoría
            }}
            className={`px-4 py-2 rounded-lg ${
              selectedCat === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat === 'todas' ? 'Todas' : cat}
          </button>
        ))}
      </section>

      {/* Buscador */}
      <section className="flex items-center gap-2 max-w-md mx-auto">
        <div className="relative w-full">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Buscar producto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </section>

      {/* Destacados */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {selectedCat === 'todas'
            ? 'Productos Destacados'
            : `Destacados en ${selectedCat}`}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {destacados.map((p: Product) => (
            <Link key={p.id} href={`/productos/${p.slug}`} className="group">
              <div className="relative h-40 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
              </div>
              <h3 className="mt-2 font-medium text-gray-800 group-hover:text-blue-600">
                {p.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Todos */}
      <section ref={allRef}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Todos los Productos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtrados.map((p: Product) => (
            <Link key={p.id} href={`/productos/${p.slug}`} className="group">
              <div className="h-32 relative rounded-md overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow">
                <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
              </div>
              <p className="mt-1 text-sm text-gray-700 group-hover:text-blue-600">
                {p.name}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Cuadro de contacto */}
      <section className="bg-blue-50 p-6 md:p-10 rounded-xl text-center shadow-md">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          ¿No encuentras lo que buscas?
        </h3>
        <p className="text-gray-600 mb-4">
          Contáctanos y con gusto te ayudamos a encontrar el producto adecuado.
        </p>
        <Link
          href="/contacto"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition"
        >
          Ir a Contacto <ArrowRight size={18} className="ml-2" />
        </Link>
      </section>
    </main>
  )
}
