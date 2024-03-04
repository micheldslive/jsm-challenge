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

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ title, options, onChange, value, ...props }, ref) => {
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
          className='relative text-lg w-full max-w-48 z-50'
          title={title}
          onClick={(event) => {
            event.currentTarget.focus()
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          tabIndex={0}
        >
          <button
            className='flex items-center justify-between px-3 py-2 bg-white w-full rounded-lg'
            title={title}
          >
            <input
              type='hidden'
              {...props}
              value={option.value}
              ref={mergeRefs([ref, inputRef])}
            />
            <span className='text-sm min-h-5'>
              {current?.label ?? (
                <span className='text-neutral-300'>{props.placeholder}</span>
              )}
            </span>
            <ArrowIcon className={optionTV({ open })} />
          </button>

          <ul className={optionsTV({ open })}>
            {options?.map(({ label, value }, index) => {
              return (
                <li
                  key={(value ?? "option") + index}
                  className={optionTV({
                    active: value === option.value,
                    className:
                      "px-3 py-2 transition-colors duration-300 hover:bg-gray-100 text-sm cursor-pointer",
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
