import { Layout } from '@/components'
import { Catalog } from '@/pages'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Catalog />
    </Layout>
  </React.StrictMode>
)
