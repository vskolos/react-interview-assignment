import { Product } from '@/schemas'
import { useQuery } from '@tanstack/react-query'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async ({ signal }) => {
      const response = await fetch('https://fakestoreapi.com/products', {
        signal,
      })
      if (!response.ok) throw new Error('Request error')

      try {
        const json = await response.json()
        const data = Product.array().parse(json)
        return data
      } catch {
        throw new Error('JSON parse error')
      }
    },
  })
}
