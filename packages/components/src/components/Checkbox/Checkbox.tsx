import React from "react"

import { tv } from "tailwind-variants"

export interface CheckboxProps
  extends Omit<React.ComponentProps<"input">, "ref"> {
  label?: React.ReactNode
}

const pathTV = tv({
  base: "origin-half stroke-dash",
  variants: {
    checked: {
      true: "animate-stroke",
    },
  },
})

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...props }, ref) => {
    const [checked, setChecked] = React.useState(props.defaultChecked)

    return (
      <div className='mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem]'>
        <input
          type='checkbox'
          className='hidden'
          {...props}
          ref={ref}
          onChange={(event) => setChecked(event.target.checked)}
        />
        <label
          className='flex items-center gap-1 pl-[0.15rem] hover:cursor-pointer'
          htmlFor={props.id}
        >
          <div className='flex items-center justify-center border border-neutral-700 h-[18px] w-[18px]'>
            <svg
              className='checkmark stroke-[7px] stroke-blue-600 max-w-8'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 52 37'
            >
              <path
                className={pathTV({ checked })}
                fill='none'
                d='M0,21.1L15.5,37L52,0'
              />
            </svg>
          </div>
          {props.label}
        </label>
      </div>
    )
  },
)
