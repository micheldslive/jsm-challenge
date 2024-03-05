"use client"

import { PropsWithChildren } from "react"
import { Shared } from "~/shared"

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Shared.Header />
      {children}
      <Shared.Footer />
    </>
  )
}
