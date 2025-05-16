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
                {/* Cerrar */}
                <button
                    onClick={() => setShow(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Imagen */}
                    <div className="relative w-full h-48 md:h-full">
                        <Image
                            src="/images/descuentos.png"
                            alt="Promociones en Facebook"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Contenido */}
                    <div className="p-6 flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-blue-700 mb-2">¡Ofertas exclusivas en Facebook!</h2>
                        <p className="text-sm text-gray-600 mb-3">
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

// actualiza con tu enlace real