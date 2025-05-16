'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL!
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE!

console.log(contactEmail)
  return (
    <>
      {/* Top contact bar */}
      <div className="hidden md:block w-full bg-blue-800 text-white">
        <div className="container mx-auto px-6 py-1 flex items-center justify-end text-sm">
          <div className="flex items-center space-x-4">
            <a href={`tel:${contactPhone}`} className="flex items-center hover:text-blue-200">
              <Phone size={14} className="mr-1" />
              <span>Llámanos</span>
            </a>
            <a href={`mailto:${contactEmail}`} className="flex items-center hover:text-blue-200">
              <Mail size={14} className="mr-1" />
              <span>{contactEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/promacson-logo.png"
              alt="Promacson Logo"
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-600">Tienda Promacson</span>
              <span className="text-xs text-gray-500">Material de Curación</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8 font-medium">
            {[
              { label: 'Inicio', href: '/' },
              { label: 'Nosotros', href: '/nosotros' },
              { label: 'Productos', href: '/productos' },
              { label: 'Contacto', href: '/contacto' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col space-y-4 p-6">
              {['Inicio', 'Nosotros', 'Productos', 'Contacto'].map(label => (
                <li key={label}>
                  <Link
                    href={label === 'Inicio' ? '/' : `/${label.toLowerCase()}`}
                    className="block text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-200 p-6 space-y-3 text-sm">
              <a href={`tel:${contactPhone}`} className="flex items-center text-gray-600 hover:text-blue-600">
                <Phone size={16} className="mr-2" />
                <span>{contactPhone}</span>
              </a>
              <a href={`mailto:${contactEmail}`} className="flex items-center text-gray-600 hover:text-blue-600">
                <Mail size={16} className="mr-2" />
                <span>{contactEmail}</span>
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
