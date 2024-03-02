import React from "react"
import { tv } from "tailwind-variants"
import { SearchIcon } from "@jsm/assets/ui"

export interface SearchProps
  extends Omit<React.ComponentProps<"input">, "ref"> {
  buttonTitle?: string
  buttonType?: React.ComponentProps<"button">["type"]
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

export const Search = ({
  className,
  buttonTitle,
  buttonType,
  direction,
  ...props
}: SearchProps) => {
  const searchRef = React.useRef<HTMLButtonElement>(null)

  const handleKeyDown: React.ComponentProps<"input">["onKeyDown"] = (event) => {
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
        {...props}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
