import { Frame } from "@jsm/ui"
import { StatesForm } from "./States"

export const Aside = () => {
  return (
    <aside className='col-span-3 rlg:hidden'>
      <Frame>
        <StatesForm />
      </Frame>
    </aside>
  )
}
