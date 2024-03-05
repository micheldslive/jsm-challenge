"use client"

import { Select } from "@jsm/ui"
import { useParamsStore } from "~/core/storage"
import { useTranslation } from "react-i18next"
import { orderOptions } from "~/mocks"
import { StringParam, useQueryParam, withDefault } from "use-query-params"

export const Order = () => {
  const { t } = useTranslation()
  const { setParams } = useParamsStore()
  const [order, setOrder] = useQueryParam("order", withDefault(StringParam, ""))

  const options = [
    ...orderOptions.map(({ value, label }) => ({
      value,
      label: t(label),
    })),
  ]

  const handleChange = (order: string) => {
    setOrder(order ? order : null)
    setParams({ order })
  }

  return (
    <div className='flex items-center flex-nowrap z-10 relative'>
      <h5 className='whitespace-nowrap font-medium text-sm'>
        {t("main.filters.order.label")}
      </h5>
      <Select
        onChange={handleChange}
        value={order}
        options={options}
        className='min-w-28'
      />
    </div>
  )
}
