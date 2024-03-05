import React, { ComponentProps, forwardRef } from "react"
import { tv } from "tailwind-variants"

export interface FrameProps extends Omit<ComponentProps<"div">, "ref"> {}

const frameVariants = tv({
  base: "p-5 border border-solid border-neutral-200 rounded-md overflow-hidden",
})

export const Frame = forwardRef<HTMLDivElement, FrameProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={frameVariants({ className })} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
