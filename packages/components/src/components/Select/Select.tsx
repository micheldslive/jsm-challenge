import { ComponentProps, forwardRef, useRef, useState } from "react"
import { tv } from "tailwind-variants"
import { mergeRefs } from "react-merge-refs"
import Arrow from "@jsm/assets/images/arrow.svg?react"

interface OptionsParams {
  value?: string
  label?: string
}

export interface OptionsProps {
  options?: Omit<OptionsParams, "open">[]
}

export interface SelectProps
  extends Omit<ComponentProps<"input">, "ref">,
    OptionsProps {}

const optionTV = tv({
  base: "transition-all duration-300",
  variants: {
    active: {
      true: "bg-gray-100",
    },
    open: {
      true: "rotate-180",
    },
  },
})

const optionsTV = tv({
  base: "absolute left-0 right-0 mb-4 bg-white divide-y rounded-lg shadow-lg overflow-hidden transform transition duration-500 in-select",
  variants: {
    open: {
      true: "translate-y-0 scale-y-100 opacity-100",
      false: "-translate-y-1/2 scale-y-0 opacity-0",
    },
  },
})

const labelTV = tv({
  base: "text-sm min-h-5",
  variants: {
    label: {
      true: "",
      false: "text-neutral-300",
    },
  },
})

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ title, options, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false)
    const [option, setOption] = useState<OptionsParams>({})
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOption = (props: OptionsParams) => {
      setOption((option) => ({ ...option, ...props }))
    }

    console.log(Boolean(option.label))

    return (
      <>
        <div className='relative text-lg w-48 z-50' title={title}>
          <button
            className='flex items-center justify-between px-3 py-2 bg-white w-full rounded-lg'
            onClick={() => setOpen((open) => !open)}
            onBlur={() => setOpen(false)}
            title={title}
          >
            <input type='hidden' {...props} ref={mergeRefs([ref, inputRef])} />
            <span className={labelTV({ label: Boolean(option.label) })}>
              {option.label ?? props.placeholder}
            </span>
            <Arrow className={optionTV({ open })} />
          </button>

          <ul className={optionsTV({ open })}>
            {options?.map(({ label, value }, index) => {
              return (
                <li
                  key={index}
                  className={optionTV({
                    active: value === option.value,
                    className:
                      "px-3 py-2 transition-colors duration-300 hover:bg-gray-100 text-sm cursor-pointer",
                  })}
                  onClick={() =>
                    handleOption({
                      label,
                      value,
                    })
                  }
                >
                  {label}
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  },
)
