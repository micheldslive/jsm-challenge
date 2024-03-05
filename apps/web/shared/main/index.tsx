"use client"

import { useTranslation } from "react-i18next"
import { Container } from "../container"
import { Breadcrumbs } from "./breadcrumbs"
import { PropsWithChildren } from "react"

export interface MainProps extends PropsWithChildren {
  title: string
}

export const Main = ({ title, children }: MainProps) => {
  const { t } = useTranslation()
  return (
    <main className='min-h-screen'>
      <Container className='pt-6 pb-2'>
        <Breadcrumbs homeElement={"Home"} separator={"/"} />
        <h1 className='pt-5 pb-1 text-3xl font-bold text[#222D39]'>
          {t(title)}
        </h1>
      </Container>
      {children}
    </main>
  )
}
