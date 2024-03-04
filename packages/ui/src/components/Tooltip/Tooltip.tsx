"use client"

import * as React from "react"
import {
  Content as ContentPrimitive,
  Provider,
  Trigger,
  Root,
} from "@radix-ui/react-tooltip"
import { tv } from "tailwind-variants"

const contentTv = tv({
  base: "z-50 overflow-hidden rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
})

export const Content = React.forwardRef<
  React.ElementRef<typeof ContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <ContentPrimitive
    ref={ref}
    sideOffset={sideOffset}
    className={contentTv({ className })}
    {...props}
  />
))

export const Story = () => {
  return (
    <Provider>
      <Root>
        <Trigger>Hover here</Trigger>
        <Content side={"right"} sideOffset={4}>
          <span className='text-black'>Tooltip content text</span>
        </Content>
      </Root>
    </Provider>
  )
}
