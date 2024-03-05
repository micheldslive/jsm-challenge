import { tv } from "tailwind-variants"

import { ComponentProps } from "react"

type ContainerProps = ComponentProps<"section">

const containerTV = tv({
  base: "jsm:container mx-auto px-4",
})

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={containerTV({ className })} {...props}>
      {children}
    </section>
  )
}
