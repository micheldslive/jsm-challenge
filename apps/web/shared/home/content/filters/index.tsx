import { Frame } from "@jsm/ui"
import { Showing, Order } from "./components"

export const Filters = () => {
  return (
    <Frame className='flex items-center justify-between flex-wrap gap-1 overflow-visible'>
      <Showing />
      <Order />
    </Frame>
  )
}
