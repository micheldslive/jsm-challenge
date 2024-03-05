"use client"

import { useRef, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { tv } from "tailwind-variants"
import { useQueryParam, withDefault, ArrayParam } from "use-query-params"
import { useJSMContext } from "~/core/context"
import { useParamsStore } from "~/core/storage"
import { Preloader } from "./Preloader"

interface StatesFormProps {
  states: string[]
}

const seeAllTV = tv({
  base: "duration-1000 transition-max-h overflow-hidden",
  variants: {
    seeAll: {
      true: "max-h-[10000px]",
      false: "max-h-52 min-h-52",
    },
  },
})

export const StatesForm = () => {
  const { t } = useTranslation()
  const { getStates } = useJSMContext()
  const { setParams } = useParamsStore()
  const [states, setStates] = useQueryParam(
    "states",
    withDefault(ArrayParam, []),
  )
  const [seeAll, setSeeAll] = useState(false)
  const { register, handleSubmit } = useForm<StatesFormProps>({
    defaultValues: { states: (states as Array<string>) ?? [] },
  })
  const { data, isLoading } = getStates({})

  const submitRef = useRef<HTMLButtonElement>(null)

  const onSubmit: SubmitHandler<StatesFormProps> = ({ states }) => {
    setStates(states ?? null)
    setParams({
      states,
    })
  }

  return (
    <form className='w-full p-3' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='font-medium text-xl pb-3'>{t("aside.states.title")}</h2>
      <div className={seeAllTV({ seeAll })}>
        <Preloader length={5} isLoading={isLoading}>
          {data?.states.map((state, index) => (
            <div
              key={state + index}
              className='py-2 flex items-center gap-3 cursor-pointer w-fit'
            >
              <input
                type='checkbox'
                id={state + index}
                value={state.toLocaleLowerCase()}
                className='cursor-pointer w-5 h-5'
                {...register("states", {
                  onChange() {
                    submitRef.current?.click()
                  },
                })}
              />
              <label htmlFor={state + index} className="cursor-pointer">{state}</label>
            </div>
          ))}
        </Preloader>
      </div>

      <button type='submit' className='hidden' ref={submitRef}></button>
      <button
        type='button'
        className='pt-2 underline'
        onClick={() => setSeeAll((seeAll) => !seeAll)}
      >
        {seeAll
          ? t("aside.states.seeAll.close")
          : t("aside.states.seeAll.open")}
      </button>
    </form>
  )
}
