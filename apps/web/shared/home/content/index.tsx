import { Frame } from "@jsm/ui"
import { Users } from "./users"

export const Content = () => {
  return (
    <section className='lg:col-span-9 flex flex-col gap-4'>
      <Frame></Frame>
      <Users />
    </section>
  )
}
