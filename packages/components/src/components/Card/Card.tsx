import { ComponentProps, forwardRef } from "react"
import { tv } from "tailwind-variants"
import fallback from "@jsm/assets/images/avatar.png"

interface FallBackProps {
  fallback: string
}

export interface CardProps extends Omit<ComponentProps<"div">, "ref"> {
  image?: (props: FallBackProps) => React.ReactNode
  loading?: boolean
  address?: string
  country?: string
}

const cardVariants = tv({
  base: "p-10 flex flex-col gap-5 items-center transition-all duration-300",
  variants: {
    loading: {
      true: "animate-pulse",
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
  base: "w-[60%] transition-all duration-300 text-center",
  variants: {
    loading: {
      true: "w-[40%] h-5 rounded-full bg-neutral-300 text-transparent",
    },
  },
})

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, image, title, address, country, loading, ...props }, ref) => {
    return (
      <article
        className={cardVariants({ loading, className })}
        ref={ref}
        {...props}
      >
        <div className='h-20 w-20 overflow-hidden rounded-full'>
          {image && !loading ? (
            image({ fallback })
          ) : (
            <img src={fallback} alt='Avatar image' />
          )}
        </div>
        <h4 className={titleVariants({ loading })}>{title}</h4>
        <span className={addressVariants({ loading, className: "text-sm" })}>
          {address}
        </span>
        <span className={addressVariants({ loading, className: "text-xs" })}>
          {country}
        </span>
      </article>
    )
  },
)
