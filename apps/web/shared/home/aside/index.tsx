import { Frame } from "@jsm/ui"
import { StatesForm } from "./states"

export const Aside = () => {
  return (
    <aside className='col-span-3 rlg:hidden'>
      <Frame>
        <StatesForm />
      </Frame>
    </aside>
  )
}
