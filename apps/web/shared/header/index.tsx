"use client"

import { Container } from "../container"
import { SearchForm } from "./Search"
import { Language } from "./Language"
import { JSMLogo } from "./Logo"
import { Theme } from "./Theme"

export const Header = () => {
  return (
    <header className='bg-neutral-100 dark:bg-neutral-750 sticky top-0'>
      <Container className='lg:container py-6 flex flex-col gap-4 items-center justify-between md:!flex-row md:gap-0'>
        <JSMLogo />
        <SearchForm />
        <div className='flex items-center gap-4'>
          <Theme />
          <Language />
        </div>
      </Container>
    </header>
  )
}
