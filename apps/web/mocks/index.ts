export const localesOptions = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
] as const

export const orderOptions = [
  { value: "first", label: "main.filters.order.first" },
  { value: "last", label: "main.filters.order.last" },
  { value: "date", label: "main.filters.order.date" },
] as const

export const locales = Array.from(localesOptions, (locale) => locale.value)
