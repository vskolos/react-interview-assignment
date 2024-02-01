import { Product } from '@/types'
import {
  CheckIcon,
  ShoppingBagIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'

type Props = {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: Props) {
  return (
    <article
      className={clsx(
        'flex flex-col gap-4 bg-white rounded-xl p-4 shadow-card',
        className
      )}
    >
      <div className="aspect-square grid relative rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="absolute object-contain w-full h-full"
        />
      </div>
      <span className="h-px w-2/3 self-center bg-neutral-200" />
      <div className="flex flex-grow flex-col gap-4">
        <h3 className="text-xl font-medium line-clamp-2 mb-auto">
          {product.title}
        </h3>
        <div className="grid gap-3">
          <div className="flex items-center flex-wrap justify-between gap-4">
            <div className="flex items-center gap-1">
              <span className="text-3xl text-emerald-500 font-bold">$</span>
              <span className="text-3xl text-emerald-500 font-bold">
                {product.price}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon strokeWidth={2} className="w-6 h-6 text-amber-500" />
              <span className="text-2xl text-amber-500 font-bold">
                {product.rating.rate}
              </span>
            </div>
          </div>

          {/* Товар добавлен в корзину */}
          <div className="flex items-center gap-2">
            <div className="flex flex-grow items-center justify-center gap-2 border-2 border-emerald-500 rounded-lg py-1.5 px-4">
              <CheckIcon strokeWidth={2} className="h-6 w-6 text-emerald-500" />
              <span className="text-emerald-500 font-medium">Added</span>
            </div>
            <button className="flex group items-center justify-center gap-2 rounded-lg p-1.5 border-2 border-neutral-900 hover:border-neutral-800 hover:bg-neutral-800 active:border-neutral-700 active:bg-neutral-700">
              <TrashIcon
                strokeWidth={2}
                className="h-6 w-6 text-neutral-700 group-hover:text-neutral-200 group-active:text-neutral-200"
              />
            </button>
          </div>

          {/* Товар не добавлен в корзину */}
          <button className="flex items-center justify-center gap-2 rounded-lg py-2 px-4 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700">
            <ShoppingBagIcon
              strokeWidth={2}
              className="h-6 w-6 text-neutral-200"
            />
            <span className="text-neutral-200 font-medium">Add to cart</span>
          </button>
        </div>
      </div>
    </article>
  )
}
