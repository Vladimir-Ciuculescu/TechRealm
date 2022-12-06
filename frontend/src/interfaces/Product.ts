import { Image } from './Image'

export interface Product {
  id: number
  name: string
  defaultImage?: Image
  images?: any[]
  description?: string
  brand: string
  category: string
  price: number
  countInStock: number
  rating: number
  numberOfReviews: number
}
