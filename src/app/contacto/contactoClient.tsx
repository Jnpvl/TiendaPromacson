'use client'

import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'

export default function ContactoClient() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL!
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE!
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS!

  return (
    <main className="container mx-auto px-6 py-16 space-y-16">
      {/* Título */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Contáctanos</h1>
        <p className="mt-2 text-gray-600">
          Para consultas de productos o asistencia, llámanos o escríbenos directamente.
        </p>
      </section>

      {/* Correo y Teléfono */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <Mail size={40} className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Correo Electrónico</h2>
          <a
            href={`mailto:${contactEmail}`}
            className="text-blue-600 hover:underline"
          >
            {contactEmail}
          </a>
        </div>

        <div className="flex flex-col items-center">
          <Phone size={40} className="text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h2>
          <a
            href={`tel:${contactPhone}`}
            className="text-blue-600 hover:underline"
          >
            {contactPhone}
          </a>
        </div>
      </section>

      {/* Mapa */}
      <section>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Encuéntranos en el mapa
        </h2>

        <div className="w-full h-64 md:h-[450px] rounded-lg overflow-hidden shadow-md animate-fade-in">
          <iframe
            title="Ubicación de Promacson en Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.0862996157653!2d-110.9554438593863!3d29.103133462655972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85003862e28f%3A0x4e69af9c013e8113!2sPromacson%20Tienda!5e0!3m2!1ses-419!2smx!4v1747415039585!5m2!1ses-419!2smx"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="mt-4 text-center text-gray-600">
          {contactAddress}
        </p>
      </section>


    </main>
  )
}
