"use client"

import { useRef } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useQueryParam, withDefault, ArrayParam } from "use-query-params"
import { useJSMContext } from "~/core/context"
import { useParamsStore } from "~/core/storage"

interface StatesFormProps {
  states: string[]
}

export const StatesForm = () => {
  const { t } = useTranslation()
  const { getStates } = useJSMContext()
  const { setParams } = useParamsStore()
  const [states, setStates] = useQueryParam(
    "states",
    withDefault(ArrayParam, []),
  )
  const { register, handleSubmit } = useForm<StatesFormProps>({
    defaultValues: { states: (states as Array<string>) ?? [] },
  })
  const { data } = getStates({ reload: "0" })

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

      {data?.states.map((state, index) => (
        <div
          key={state + index}
          className='py-2 flex items-center gap-3 cursor-pointer w-fit'
          onClick={() => {
            setTimeout(() => {
              submitRef.current?.click()
            }, 100)
          }}
        >
          <input
            type='checkbox'
            id={state + index}
            value={state.toLocaleLowerCase()}
            className='cursor-pointer w-5 h-5'
            {...register("states")}
          />
          <label htmlFor={state + index}>{state}</label>
        </div>
      ))}

      <button type='submit' className='hidden' ref={submitRef}></button>
    </form>
  )
}
