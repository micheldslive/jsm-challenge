"use client"

import { useState, type ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import NextAdapterApp from "next-query-params/app"
import { QueryParamProvider } from "use-query-params"
import { Tooltip } from "@jsm/ui"
import { JSMContextProvider } from "~/core/context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useJSMStore } from "../core/storage"

interface MoreProvidersProps {
  children: ReactNode
}

export const MoreProviders = ({ children }: MoreProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())
  const { theme } = useJSMStore()
  return (
    <Tooltip.Provider>
      <ThemeProvider
        attribute='class'
        disableTransitionOnChange
        defaultTheme={theme}
      >
        <QueryParamProvider adapter={NextAdapterApp}>
          <QueryClientProvider client={queryClient}>
            <JSMContextProvider>{children}</JSMContextProvider>
          </QueryClientProvider>
        </QueryParamProvider>
      </ThemeProvider>
    </Tooltip.Provider>
  )
}
