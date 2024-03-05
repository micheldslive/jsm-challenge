import { Card as CardUI, Frame } from "@jsm/ui"
import { ComponentPropsWithoutRef } from "react"

export const Card = (props: ComponentPropsWithoutRef<typeof CardUI>) => {
  return (
    <article className='flex flex-col h-full'>
      <Frame className="h-full">
        <CardUI {...props} />
      </Frame>
    </article>
  )
}
