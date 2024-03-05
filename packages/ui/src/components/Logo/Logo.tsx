import React, { ComponentProps, forwardRef } from "react"
import { tv } from "tailwind-variants"
import { JSMLogo } from "@jsm/assets/ui"

export interface LogoProps extends Omit<ComponentProps<"svg">, "ref"> {
  color?: keyof typeof logoVariants.variants.color
  size?: keyof typeof logoVariants.variants.size
}

const logoVariants = tv({
  base: "transition-all duration-300",
  variants: {
    color: {
      primary: "main-color",
      transparent: "",
    },
    size:
      {
        sm: "max-w-[140px]",
        md: "max-w-44",
        lg: "max-w-56",
      } || undefined,
  },
  defaultVariants: {
    color: "primary",
    size: "sm",
  },
})

export const Logo = forwardRef<SVGSVGElement, LogoProps>(
  ({ className, color, size, ...props }, ref) => {
    return (
      <JSMLogo
        stopColor={props.fill}
        className={logoVariants({ className, color, size })}
        ref={ref}
        {...props}
      />
    )
  },
)
