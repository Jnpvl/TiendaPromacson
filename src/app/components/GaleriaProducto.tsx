'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function GaleriaProducto({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0)
  const [preview, setPreview] = useState(false)

  const next = () => setIndex((prev) => (prev + 1) % images.length)
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <>
      {/* Imagen principal */}
      <div className="relative w-full h-72 md:h-96 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
        <Image
          src={images[index]}
          alt={`${name} ${index + 1}`}
          fill
          className="object-contain p-4 cursor-pointer transition-transform hover:scale-105"
          onClick={() => setPreview(true)}
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative w-20 h-20 rounded border-2 ${
                i === index ? 'border-blue-600' : 'border-transparent'
              } cursor-pointer overflow-hidden`}
              onClick={() => setIndex(i)}
            >
              <Image src={img} alt={`Miniatura ${i + 1}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      )}

      {/* Vista previa fullscreen */}
      {preview && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-lg shadow-xl overflow-hidden">
            <Image
              src={images[index]}
              alt={`${name} vista`}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setPreview(false)}
              className="absolute top-4 right-4 bg-white hover:bg-gray-100 p-2 rounded-full shadow"
              aria-label="Cerrar vista previa"
            >
              <X size={22} />
            </button>
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={next}
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
