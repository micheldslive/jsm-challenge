import { Users } from "./users"
import { Filters } from "./filters"

export const Content = () => {
  return (
    <section className='lg:col-span-9 flex flex-col gap-4'>
      <Filters />
      <Users />
    </section>
  )
}
