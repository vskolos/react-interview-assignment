import {
  BuildingStorefrontIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { CartPopover } from '..'

type Props = { className?: string }

export function Header({ className }: Props) {
  return (
    <header
      className={clsx(
        'rounded-xl bg-white p-4 flex justify-between items-center gap-4 shadow-card',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <BuildingStorefrontIcon className="h-9 w-9 text-neutral-600" />
        <span className="text-2xl">Fake Store</span>
      </div>
      <button className="relative rounded-lg p-1 group border-2 border-neutral-700 hover:border-neutral-800 active:border-neutral-700 hover:bg-neutral-800 active:bg-neutral-700">
        <ShoppingCartIcon
          strokeWidth={2}
          className="h-6 w-6 text-neutral-700 group-hover:text-neutral-200 group-active:text-neutral-200"
        />

        {/* Индикатор количества товаров в корзине */}
        <span className="absolute top-0 end-0 translate-x-1/2 -translate-y-1/2 text-xs font-medium min-w-5 py-0.5 px-1 rounded-full bg-emerald-500 text-white">
          1
        </span>
      </button>

      {/* Поповер с товарами корзины */}
      <CartPopover className="absolute top-full mt-4 end-0 z-10 max-h-[calc(100vh-6.25rem)] overflow-y-auto" />
    </header>
  )
}
