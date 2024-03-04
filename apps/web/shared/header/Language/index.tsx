"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import i18nConfig from "~/i18nConfig"
import { LocaleProps, useJSMStore } from "~/core/store"
import { US, BR } from "country-flag-icons/react/3x2"
import { Switcher } from "@jsm/ui"

export const Language = () => {
  const { i18n, t } = useTranslation()
  const router = useRouter()
  const { locale, setLocale } = useJSMStore()
  const currentPathname = usePathname()
  const currentLocale = i18n.language

  const options = [
    {
      value: "pt",
      label: "Português",
      icon: <BR className='max-w-5' aria-label='Brasil' />,
    },
    {
      value: "en",
      label: "English",
      icon: <US className='max-w-5' aria-label='United States' />,
    },
  ]

  const handleChange = (locale?: string) => {
    setLocale(locale as LocaleProps)

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + locale + currentPathname)
    } else {
      router.push(
        currentPathname
          ? currentPathname.replace(`/${currentLocale}`, `/${locale}`)
          : "",
      )
    }

    router.refresh()
  }

  return (
    <Switcher
      handleChange={handleChange}
      value={locale}
      options={options}
      label={t("header.locale.label")}
    />
  )
}
