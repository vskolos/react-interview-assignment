import { Layout, ProductList } from '@/components'

export function Catalog() {
  return (
    <Layout>
      <section className="grid gap-5">
        <h1 className="text-3xl font-bold">Products</h1>
        <ProductList />
      </section>
    </Layout>
  )
}
