import { Product } from '@/schemas'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'

type CartContext = {
  products: Product[]
  add: (product: Product) => void
  remove: (productId: Product['id']) => void
  clear: () => void
}

const CartContext = createContext<CartContext | undefined>(undefined)

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined)
    throw new Error('useCart must be used within a CartProvider')
  return context
}

type Props = { children: ReactNode }

export function CartProvider({ children }: Props) {
  const [isFirstRender, setIsFirstRender] = useState(true)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (isFirstRender) return
    localStorage.setItem('cart', JSON.stringify(products))
  }, [products, isFirstRender])

  useLayoutEffect(() => {
    setIsFirstRender(false)

    const localStorageCart = localStorage.getItem('cart')
    if (!localStorageCart) return

    try {
      const cartJson = JSON.parse(localStorageCart)
      const cartProducts = Product.array().parse(cartJson)
      setProducts(cartProducts)
    } catch {
      localStorage.removeItem('cart')
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        products,
        add: (product) => setProducts((products) => products.concat(product)),
        remove: (productId) =>
          setProducts((products) =>
            products.filter((product) => product.id !== productId)
          ),
        clear: () => setProducts([]),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
