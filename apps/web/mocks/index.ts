export const localesOptions = [
  { value: "pt", label: "Português" },
  { value: "en", label: "English" },
] as const

export const locales = Array.from(localesOptions, (locale) => locale.value)
