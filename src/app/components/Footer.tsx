'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL!
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE!
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS!
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL!

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400"></div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src="/images/promacson-logo.png"
                alt="Promacson Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-lg font-bold text-blue-600">Tienda Promacson</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Especialistas en material de curación y productos médicos de alta calidad para el cuidado profesional de pacientes.
            </p>
            <div className="flex space-x-3">
              <Link
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-blue-600 font-bold mb-3 text-sm uppercase tracking-wider">Enlaces rápidos</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Inicio', path: '/' },
                { label: 'Nosotros', path: '/nosotros' },
                { label: 'Productos', path: '/productos' },
                { label: 'Contacto', path: '/contacto' },
              ].map(({ label, path }) => (
                <Link
                  key={label}
                  href={path}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm py-1"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-blue-600 font-bold mb-3 text-sm uppercase tracking-wider">Contáctanos</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-600">
                <Phone size={16} className="text-blue-600 mr-2 flex-shrink-0" />
                <a href={`tel:${contactPhone}`} className="hover:text-blue-600 transition-colors">
                  {contactPhone}
                </a>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail size={16} className="text-blue-600 mr-2 flex-shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:text-blue-600 transition-colors">
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start text-gray-600">
                <MapPin size={16} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <span>{contactAddress}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 text-white py-3">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-center items-center text-sm">
          <p>© {currentYear} Tienda Promacson. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
