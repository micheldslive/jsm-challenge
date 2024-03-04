import { Config } from "next-i18n-router/dist/types"
import { locales } from "./mocks"

const i18nConfig: Config = {
  locales,
  defaultLocale: "pt",
}

export default i18nConfig
