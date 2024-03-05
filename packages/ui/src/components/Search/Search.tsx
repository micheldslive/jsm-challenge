import React, { forwardRef } from "react"
import { tv, VariantProps } from "tailwind-variants"
import { SearchIcon } from "@jsm/assets/ui"

export interface SearchProps
  extends Omit<React.ComponentProps<"input">, "ref">,
    VariantProps<typeof containerTV> {
  buttonTitle?: string
  buttonType?: React.ComponentProps<"button">["type"]
}

const containerTV = tv({
  base: "flex py-[2px] bg-white border border-solid border-neutral-350 rounded-full overflow-hidden dark:border-neutral-360",
  variants: {
    direction: {
      default: "",
      reverse: "flex-row-reverse",
    },
  },
})

const inputTV = tv({
  base: "w-full outline-none bg-transparent dark:text-neutral-750",
  variants: {
    direction: {
      default: "pr-5",
      reverse: "pl-5",
    },
  },
})

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, buttonTitle, buttonType, direction, ...props }, ref) => {
    const searchRef = React.useRef<HTMLButtonElement>(null)

    return (
      <div className={containerTV({ className, direction })}>
        <button
          type={buttonType}
          className='flex items-center justify-center py-3 px-4 hover:scale-125 transition-transform active:scale-100'
          title={buttonTitle}
          ref={searchRef}
        >
          <SearchIcon />
        </button>
        <input
          type='text'
          className={inputTV({ direction })}
          {...props}
          ref={ref}
        />
      </div>
    )
  },
)
