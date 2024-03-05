"use client"

import React, { ComponentProps, forwardRef, useRef, useState } from "react"
import { tv } from "tailwind-variants"
import { mergeRefs } from "react-merge-refs"
import { ArrowIcon } from "@jsm/assets/ui"

export interface OptionsParams {
  value?: string
  label?: string
}

export interface OptionsProps {
  options?: OptionsParams[]
}

export interface SelectProps
  extends Omit<ComponentProps<"input">, "ref" | "onChange">,
    OptionsProps {
  onChange(value?: string): void
}

const optionTV = tv({
  base: "transition-colors duration-300 relative select-none rounded px-2 py-1.5 text-sm outline-none focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 flex items-center gap-2 capitalize cursor-pointer",
  variants: {
    active: {
      true: "bg-gray-100 dark:bg-neutral-800",
    },
  },
})

const arrowTV = tv({
  base: "transition-all duration-300 fill-neutral-800 dark:fill-neutral-100",
  variants: {
    open: {
      true: "rotate-180",
    },
  },
})

const optionsTV = tv({
  base: "absolute left-0 right-0 mb-4 p-1 bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden transform transition duration-500 in-select dark:border-neutral-900 dark:bg-neutral-950 dark:text-neutral-50",
  variants: {
    open: {
      true: "translate-y-0 scale-y-100 opacity-100",
      false: "-translate-y-1/2 scale-y-0 opacity-0",
    },
  },
})

const containerTV = tv({
  base: "relative text-lg w-full max-w-48 z-50",
})

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ title, options, onChange, value, className, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false)
    const [option, setOption] = useState<OptionsParams>({})
    const inputRef = useRef<HTMLInputElement>(null)
    const current = options?.find((option) => option.value === value)

    const handleOption = (props: OptionsParams) => {
      setOption((option) => ({ ...option, ...props }))
    }

    return (
      <>
        <div
          className={containerTV({ className })}
          title={title}
          onClick={(event) => {
            event.currentTarget.focus()
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          tabIndex={0}
        >
          <button
            className='flex items-center justify-between px-3 py-2 bg-transparent w-full rounded-lg'
            title={title}
          >
            <input
              type='hidden'
              {...props}
              value={option.value}
              ref={mergeRefs([ref, inputRef])}
            />
            <span className='text-sm min-h-5 dark:text-neutral-50'>
              {current?.label ?? (
                <span className='text-neutral-300 dark:text-neutral-800'>
                  {props.placeholder}
                </span>
              )}
            </span>
            <ArrowIcon className={arrowTV({ open })} />
          </button>

          <ul className={optionsTV({ open })}>
            {options?.map(({ label, value }, index) => {
              return (
                <li
                  key={(value ?? "option") + index}
                  className={optionTV({
                    active: value === option.value,
                    className:
                      "px-3 py-2 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm cursor-pointer",
                  })}
                  onClick={(event) => {
                    event.stopPropagation()
                    handleOption({
                      label,
                      value,
                    })
                    onChange(value)
                    setOpen(false)
                  }}
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
