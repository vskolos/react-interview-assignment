import { useProducts } from '@/hooks'
import clsx from 'clsx'
import { ProductCard } from './ProductCard'

type Props = { className?: string }

export function ProductList({ className }: Props) {
  const products = useProducts()

  if (products.isPending) return <span>Product list is loading...</span>

  if (products.isError)
    return (
      <span className="text-red-500">
        There was an error loading product list
      </span>
    )

  return (
    <ul
      className={clsx(
        'grid gap-4 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]',
        className
      )}
    >
      {products.data.map((product) => (
        <li key={product.id} className="grid">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
