"use client"

import { Search } from "@jsm/ui"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"

interface SearchFormProps {
  search: string
}

export const SearchForm = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm<SearchFormProps>()
  const onSubmit: SubmitHandler<SearchFormProps> = (data) => {
    console.log("executou")
    console.log(data)
  }
  return (
    <form className="w-full max-w-[29rem]" onSubmit={handleSubmit(onSubmit)}>
      <Search
        placeholder={t("header.search.placeholder")}
        {...register("search", { value: "" })}
      />
    </form>
  )
}
