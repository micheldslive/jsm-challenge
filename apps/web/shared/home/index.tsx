"use client"

import { Container } from "../container"
import { Aside } from "./aside"
import { Content } from "./content"

export const Home = () => {
  return (
    <Container className='pb-6 pt-4 grid grid-flow-row-dense grid-cols-12 grid-rows-1 gap-4'>
      <Aside />
      <Content />
    </Container>
  )
}
