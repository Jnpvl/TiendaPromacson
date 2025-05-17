import productosHeridas from '@/app/data/cuidado-de-heridas.json'
import productosOrtopedia from '@/app/data/ortopedia.json'
//import productosProteccion from '@/app/data/proteccion-e-higiene.json'
//import productosDispositivos from '@/app/data/dispositivos-medicos.json'
//import productosSondas from '@/app/data/incontinencia-y-sondas.json'
import productosCompresion from '@/app/data/compresion-y-vascular.json'
//import productosMovilidad from '@/app/data/movilidad-ayudas.json'

export type Product = {
  id: string
  slug: string
  name: string
  category: string
  images: string[]
  description: string
  keywords: string[]
  brand: string
  features: string[]
}

// Junta todos en un array
export const allProducts: Product[] = [
  ...productosHeridas,
  ...productosOrtopedia,
 // ...productosProteccion,
 // ...productosDispositivos,
 // ...productosSondas,
  ...productosCompresion,
 // ...productosMovilidad,
]
