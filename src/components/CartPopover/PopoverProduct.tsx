import { Product } from '@/types'
import { TrashIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

type Props = {
  product: Product
  className?: string
}

export function PopoverProduct({ product, className }: Props) {
  return (
    <article className={clsx('flex items-center flex-wrap gap-4', className)}>
      <div className="w-12 h-12 grid relative rounded-lg bg-white flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="absolute object-contain w-full h-full"
        />
      </div>
      <div className="grid flex-1">
        <h3 className="line-clamp-1">{product.title}</h3>
        <div className="flex items-center gap-1">
          <span className="text-lg text-emerald-500 font-bold">$</span>
          <span className="text-lg text-emerald-500 font-bold">
            {product.price}
          </span>
        </div>
      </div>
      <button className="relative ms-auto flex-shrink-0 rounded-lg p-1 group border-2 border-neutral-700 hover:border-neutral-800 active:border-neutral-700 hover:bg-neutral-800 active:bg-neutral-700">
        <TrashIcon
          strokeWidth={2}
          className="h-6 w-6 text-neutral-700 group-hover:text-neutral-200 group-active:text-neutral-200"
        />
      </button>
    </article>
  )
}
