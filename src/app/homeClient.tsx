'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
  ShoppingBag,
} from 'lucide-react'
import FacebookPopup from './components/FacebookPopup'

type Brand = {
  id: number
  name: string
  image: string
}

type Props = {
  brands: Brand[]
}

export default function HomeClient({ brands }: Props) {
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE!
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS!

  return (
    <main className="overflow-hidden">
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/medical-pattern.png"
            alt="Patrón médico"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Material de Curación{' '}
                <span className="text-blue-200">Profesional</span>
              </h1>
              <p className="text-xl opacity-90">
                En Promacson ofrecemos productos de la más alta calidad para el
                cuidado de heridas y tratamientos médicos.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/productos"
                  className="bg-white text-blue-600 hover:bg-blue-50 transition-colors font-medium px-6 py-3 rounded-lg flex items-center justify-center"
                >
                  Ver Catálogo
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link
                  href="/contacto"
                  className="bg-blue-700 hover:bg-blue-800 border border-blue-500 transition-colors font-medium px-6 py-3 rounded-lg flex items-center justify-center"
                >
                  Contactar Ahora
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/images/supplies.png"
                alt="Material de curación Promacson"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            className="fill-white w-full h-auto"
          >
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* Marcas que distribuimos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Marcas que distribuimos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-md"
              >
                <div className="relative w-full h-24 md:h-32">
                  <Image
                    src={brand.image}
                    alt={`Marca: ${brand.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Visita nuestra tienda */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Visita nuestra tienda
                </h2>
                <p className="text-blue-100 mb-6">
                  Te invitamos a conocer nuestro amplio catálogo de productos en
                  persona. Nuestro personal especializado te asesorará para
                  encontrar exactamente lo que necesitas.
                </p>
                <div className="space-y-4 text-blue-100">
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-white">Dirección</p>
                      <p>{contactAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-white">Teléfono</p>
                      <p>{contactPhone}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 transition px-6 py-3 rounded-lg font-medium"
                  >
                    <ShoppingBag size={18} className="mr-2" />
                    Cómo llegar
                  </Link>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/tienda2.jpeg"
                  alt="Interior de la tienda Promacson"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FacebookPopup />
    </main>
  )
}
