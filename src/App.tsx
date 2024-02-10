import { CartProvider } from '@/contexts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Catalog } from './pages'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Catalog />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
