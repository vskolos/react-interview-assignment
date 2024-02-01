import { products } from '@/data'
import clsx from 'clsx'
import { ProductCard } from './ProductCard'

type Props = { className?: string }

export function ProductList({ className }: Props) {
  return (
    <ul
      className={clsx(
        'grid gap-4 grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]',
        className
      )}
    >
      {products.map((product) => (
        <li key={product.id} className="grid">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
