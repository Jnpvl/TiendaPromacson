'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Flag,
  CheckCircle
} from 'lucide-react'

export default function NosotrosClient() {
  return (
    <main className="container mx-auto px-6 py-16 space-y-16">
      {/* Hero */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Sobre Nosotros</h1>
        <p className="mt-4 text-lg text-gray-600">
          Más de 15 años brindando material de curación y equipos médicos con calidad, confianza y compromiso.
        </p>
      </section>

      {/* Historia */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/tienda.png"
            alt="Historia de Promacson"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Historia</h2>
          <p className="text-gray-600 leading-relaxed">
            PROMACSON fue fundada en 2008 con el compromiso de ofrecer soluciones médicas de alta calidad. En 2018 consolidamos un almacén especializado que surtía directamente a clínicas, hospitales y profesionales de la salud.  
            <br /><br />
            Al observar la creciente necesidad de la población en general por acceder a insumos médicos confiables y a buen precio, en 2020 abrimos nuestro establecimiento al público, acercando productos esenciales al cuidado de cada familia.  
            <br /><br />
            Actualmente contamos con una amplia gama de productos que incluye ortopedia básica, medias de compresión, parches avanzados para heridas, y más. Nuestro compromiso sigue siendo mejorar la calidad de vida de nuestros clientes a través de atención personalizada y productos confiables.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center text-center">
          <Flag size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
          <p className="text-gray-600">
            Proveer material de curación y equipos médicos confiables que mejoren la atención y bienestar de las personas, tanto en el entorno clínico como en el hogar.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Users size={48} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Nuestra Visión</h3>
          <p className="text-gray-600">
            Ser reconocidos como el proveedor líder en soluciones médicas accesibles, innovando continuamente para satisfacer las necesidades de profesionales y familias.
          </p>
        </div>
      </section>

      {/* Valores */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Nuestros Valores</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <CheckCircle size={32} className="text-blue-600" />, 
              title: 'Calidad', 
              desc: 'Productos certificados con los más altos estándares.'
            },
            {
              icon: <CheckCircle size={32} className="text-blue-600" />, 
              title: 'Confianza', 
              desc: 'Compromiso total con nuestros clientes y su salud.'
            },
            {
              icon: <CheckCircle size={32} className="text-blue-600" />, 
              title: 'Innovación', 
              desc: 'Buscamos constantemente nuevas soluciones médicas.'
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {item.icon}
              <h4 className="mt-4 font-semibold text-gray-800">{item.title}</h4>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-12 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para conocernos?</h2>
        <p className="mb-6">
          Visita nuestra tienda o contáctanos para más información sobre nuestros productos.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contacto" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
            Contáctanos
          </Link>
          <Link href="/" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600">
            Inicio
          </Link>
        </div>
      </section>
    </main>
  )
}
