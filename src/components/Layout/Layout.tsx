import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

type Props = { children?: ReactNode }

export function Layout({ children }: Props) {
  return (
    <>
      <Header className="sticky top-0 z-10" />
      <main className="grid gap-4">{children}</main>
      <Footer className="mt-auto" />
    </>
  )
}
