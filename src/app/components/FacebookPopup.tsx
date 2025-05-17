'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FacebookPopup() {
    const [show, setShow] = useState(false)
    const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL!

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000)
        return () => clearTimeout(timer)
    }, [])

    if (!show) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg relative overflow-hidden animate-popup">
                {/* Cerrar (posición fija dentro del contenedor) */}
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-2 right-2 bg-black/80 text-white p-1 rounded-full z-20 hover:bg-black"
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>

                {/* Contenido en columna en mobile, en fila en desktop */}
                <div className="flex flex-col md:flex-row">

                    {/* Imagen */}
                    <div className="relative w-full h-48 md:h-auto md:w-1/2">
                        <Image
                            src="/images/descuentos.png"
                            alt="Promociones en Facebook"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Texto */}
                    <div className="p-6 flex flex-col justify-center md:w-1/2">
                        <h2 className="text-xl font-bold text-blue-700 mb-2">¡Ofertas exclusivas en Facebook!</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            Síguenos y descubre descuentos especiales, lanzamientos de nuevos productos y sorteos mensuales para nuestros seguidores.
                        </p>
                        <Link
                            href={facebookUrl}
                            target="_blank"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
                        >
                            Visitar Facebook
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
