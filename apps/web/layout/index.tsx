"use client"

import { PropsWithChildren } from "react"
import { Header } from "~/shared/header"
import { Footer } from "~/shared/footer"

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
