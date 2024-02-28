import { ComponentProps, forwardRef, useRef } from "react"
import { tv } from "tailwind-variants"
import SearchIcon from "@jsm/assets/images/search.svg?react"

export interface SearchProps extends Omit<ComponentProps<"input">, "ref"> {
  buttonTitle?: string
  buttonType?: ComponentProps<"button">["type"]
  direction?: keyof typeof containerTV.variants.direction
}

const containerTV = tv({
  base: "flex py-[2px] bg-white border border-solid border-neutral-350 rounded-full overflow-hidden",
  variants: {
    direction: {
      default: "",
      reverse: "flex-row-reverse",
    },
  },
})

const inputTV = tv({
  base: "w-full",
  variants: {
    direction: {
      default: "pr-5",
      reverse: "pl-5",
    },
  },
})

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, buttonTitle, buttonType, direction, ...props }, ref) => {
    const searchRef = useRef<HTMLButtonElement>(null)

    const handleKeyDown: ComponentProps<"input">["onKeyDown"] = (event) => {
      event.key === "Enter" && searchRef.current?.click()
    }

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
          ref={ref}
          {...props}
          onKeyDown={handleKeyDown}
        />
      </div>
    )
  },
)
