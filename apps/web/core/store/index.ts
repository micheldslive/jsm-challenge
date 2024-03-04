/* eslint-disable no-unused-vars */
import { createStore, useStore } from "zustand"
import { persist } from "zustand/middleware"
import { locales } from "~/mocks"

export type ThemeProps = "light" | "dark" | "system"
export type LocaleProps = (typeof locales)[number]

interface States {
  theme: ThemeProps
  locale: LocaleProps
}

interface Actions {
  setTheme(theme: ThemeProps): void
  setLocale(locale: LocaleProps): void
}

const createJSMStore = createStore<States & Actions>()(
  persist(
    (set) => ({
      theme: "light",
      locale: "pt",
      setTheme: (theme) => {
        set(() => ({ theme }))
      },
      setLocale: (locale) => {
        set(() => ({ locale }))
      },
    }),
    {
      name: "jsm-store",
    },
  ),
)

export const useJSMStore = () => useStore(createJSMStore)
