"use client"

import React, { ComponentProps } from "react"
import { Button, Dropdown, Tooltip } from "../.."

export interface OptionsParams {
  value: string
  label: string
  icon?: React.ReactNode
}

export interface OptionsProps {
  options: OptionsParams[]
}

export interface SwitcherProps
  extends Omit<ComponentProps<"input">, "ref" | "onChange">,
    OptionsProps {
  handleChange(value?: string): void
  label?: string
}

export const Switcher = ({
  label,
  options,
  handleChange,
  value,
}: SwitcherProps) => {
  const option = options.find((option) => option.value === value)
  return (
    <>
      <Tooltip.Root>
        <Dropdown.Root modal={false}>
          <Dropdown.Trigger asChild>
            <Tooltip.Trigger asChild>
              <Button variant='transparent' size='icon'>
                <>
                  {option?.icon ?? option?.label}
                  <span className='sr-only'>{label}</span>
                </>
              </Button>
            </Tooltip.Trigger>
          </Dropdown.Trigger>
          <Dropdown.Content align='start'>
            {options.map(({ value, label, icon }) => (
              <Dropdown.Item
                key={value}
                onClick={() => handleChange(value)}
                className='flex items-center gap-2 capitalize cursor-pointer'
              >
                {icon}
                {label}
              </Dropdown.Item>
            ))}
          </Dropdown.Content>
        </Dropdown.Root>
        {label && (
          <Tooltip.Content side={"bottom"} sideOffset={4}>
            <span>{label}</span>
          </Tooltip.Content>
        )}
      </Tooltip.Root>
    </>
  )
}

export const SwitcherStory = (props: SwitcherProps) => {
  return (
    <Tooltip.Provider>
      <Switcher {...props} />
    </Tooltip.Provider>
  )
}
