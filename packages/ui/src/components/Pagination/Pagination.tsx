"use client"

import React from "react"
import {
  Pagination as PaginationPrimitive,
  PaginationProps as PaginationPrimitiveProps,
  PaginationItemType,
  PaginationItemRenderProps,
} from "@nextui-org/react"
import { ArrowIcon } from "@jsm/assets/ui"
import { tv } from "tailwind-variants"

const buttonItemsTV = tv({
  base: "min-w-8 !w-8 !h-8",
  variants: {
    isActive: {
      true: "text-bold",
    },
  },
})

const buttonUnderlineTV = tv({
  base: "absolute bottom-0 block h-1 bg-neutral-400 transition-all duration-300 left-0 w-0 group-hover:w-full",
  variants: {
    isActive: {
      true: "w-full",
    },
  },
})

const buttonsControlsTV = tv({
  base: "!bg-neutral-750 min-w-8 !w-8 !h-8 mx-2 transition-all duration-300 disabled:opacity-20 disabled:cursor-not-allowed",
})

interface PaginationProps
  extends Pick<
    PaginationPrimitiveProps,
    "total" | "initialPage" | "onChange"
  > {}

export const Pagination = (props: PaginationProps) => {
  const renderItem = ({
    key,
    total,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
    activePage,
  }: PaginationItemRenderProps) => {
    if (PaginationItemType.PREV === value) {
      return (
        <button
          key={key}
          className={buttonsControlsTV({ className })}
          disabled={activePage === 1}
          onClick={onPrevious}
        >
          <ArrowIcon className='rotate-90 fill-neutral-200' />
        </button>
      )
    }
    if (PaginationItemType.NEXT === value) {
      return (
        <button
          key={key}
          className={buttonsControlsTV({ className })}
          disabled={activePage === total}
          onClick={onNext}
        >
          <ArrowIcon className='-rotate-90 fill-neutral-200' />
        </button>
      )
    }
    if (PaginationItemType.DOTS === value) {
      return (
        <button key={key} className={className}>
          ...
        </button>
      )
    }

    return (
      <div className='relative w-fit group' key={key}>
        <button
          className={buttonItemsTV({ isActive })}
          onClick={() => setPage(value)}
        >
          {value}
        </button>
        <span className={buttonUnderlineTV({ isActive })} />
      </div>
    )
  }

  return (
    <PaginationPrimitive
      disableCursorAnimation
      showControls
      className='gap-2'
      radius='full'
      renderItem={renderItem}
      variant='light'
      {...props}
    />
  )
}
