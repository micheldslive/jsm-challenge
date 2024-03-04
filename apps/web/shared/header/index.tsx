"use client"

import { Container } from "../container"
import { SearchForm } from "./Search"
import { Language } from "./Language"
import { JSMLogo } from "./Logo"
import { Theme } from "./Theme"

export const Header = () => {
  return (
    <header className='bg-neutral-100 dark:bg-neutral-950 sticky top-0'>
      <Container className='lg:container p-6 flex items-center justify-between'>
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
