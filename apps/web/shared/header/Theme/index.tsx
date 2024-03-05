"use client"

import { useEffect, useState } from "react"
import { Laptop, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switcher } from "@jsm/ui"
import { useJSMStore } from "~/core/storage"
import { useTranslation } from "react-i18next"

const iconVariants: Record<string, JSX.Element> = {
  light: <Sun size={20} />,
  dark: <Moon size={20} />,
  system: <Laptop size={20} />,
}

const labelVariants: Record<string, string> = {
  light: "header.theme.light",
  dark: "header.theme.dark",
  system: "header.theme.system",
}

export const Theme = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme, themes } = useTheme()
  const { setTheme: setStoreTheme } = useJSMStore()
  const { t } = useTranslation()

  const options = [
    ...themes.map((theme) => ({
      value: theme,
      icon: iconVariants[theme],
      label: t(String(labelVariants[theme])),
    })),
  ]

  const handleChange = (value: string) => {
    setTheme(value)
    setStoreTheme(value as never)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Switcher
      handleChange={handleChange}
      value={theme}
      options={options}
      label={t("header.theme.label")}
    />
  )
}
