import React, { ComponentPropsWithoutRef } from "react"
import { tv } from "tailwind-variants"
import fallback from "@jsm/assets/images/avatar.png"

interface FallBackProps {
  fallback: string
}

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  image?: (props: FallBackProps) => React.ReactNode
  loading?: boolean
  address?: string
  country?: string
}

const cardVariants = tv({
  base: "p-10 flex flex-col gap-5 items-center",
  variants: {
    loading: {
      true: "animate-skeleton",
    },
  },
})

const titleVariants = tv({
  base: "w-[80%] font-bold text-xl transition-all duration-300 text-center",
  variants: {
    loading: {
      true: "w-[60%] h-7 rounded-full bg-neutral-300 text-transparent",
    },
  },
})
const addressVariants = tv({
  base: "w-[80%] transition-all duration-300 text-center",
  variants: {
    loading: {
      true: "w-[60%] h-5 rounded-full bg-neutral-300 text-transparent",
    },
  },
})

export const Card = ({
  className,
  image,
  title,
  address,
  country,
  loading,
  children,
  ...props
}: CardProps) => {
  return (
    <div className={cardVariants({ loading, className })} {...props}>
      <div className='min-h-20 min-w-20 max-h-64 max-w-64 overflow-hidden rounded-full'>
        {image && !loading ? (
          image({ fallback: fallback.src })
        ) : (
          <img src={fallback.src} alt='Avatar image' />
        )}
      </div>
      <h4 className={titleVariants({ loading })}>{title}</h4>
      <span className={addressVariants({ loading, className: "text-sm" })}>
        {address}
      </span>
      <span className={addressVariants({ loading, className: "text-xs" })}>
        {country}
      </span>
      {children && (
        <span className={titleVariants({ loading })}>{children}</span>
      )}
    </div>
  )
}
