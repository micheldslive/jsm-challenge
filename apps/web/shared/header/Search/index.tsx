"use client"

import { Search } from "@jsm/ui"
import { SubmitHandler, useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { useQueryParam, withDefault, StringParam } from "use-query-params"

interface SearchFormProps {
  search: string
}

export const SearchForm = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm<SearchFormProps>()
  const [search, setSearch] = useQueryParam(
    "search",
    withDefault(StringParam, ""),
  )

  const onSubmit: SubmitHandler<SearchFormProps> = ({ search }) => {
    setSearch(search ? search : null)
  }
  return (
    <form className='w-full max-w-[29rem]' onSubmit={handleSubmit(onSubmit)}>
      <Search
        placeholder={t("header.search.placeholder")}
        {...register("search", { value: search ?? "" })}
      />
    </form>
  )
}
