"use client"

import { ArrayParam, StringParam, useQueryParams } from "use-query-params"
import { Container } from "../container"
import { Aside } from "./aside"
import { Content } from "./content"
import { paramsStore } from "~/core/storage"
import { useEffect } from "react"

export const Home = () => {
  const [params] = useQueryParams({
    search: StringParam,
    states: ArrayParam,
    order: StringParam,
  })

  useEffect(() => {
    paramsStore.setState(params)
  }, [params])

  return (
    <Container className='pb-6 pt-4 grid grid-flow-row-dense grid-cols-12 grid-rows-1 gap-4'>
      <Aside />
      <Content />
    </Container>
  )
}
