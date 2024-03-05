"use client"

import { useState, type ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import NextAdapterApp from "next-query-params/app"
import { QueryParamProvider } from "use-query-params"
import { Tooltip } from "@jsm/ui"
import { JSMContextProvider } from "~/core/context"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface MoreProvidersProps {
  children: ReactNode
}

export const MoreProviders = ({ children }: MoreProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <Tooltip.Provider>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <QueryParamProvider adapter={NextAdapterApp}>
          <QueryClientProvider client={queryClient}>
            <JSMContextProvider>
              {children}
            </JSMContextProvider>
          </QueryClientProvider>
        </QueryParamProvider>
      </ThemeProvider>
    </Tooltip.Provider>
  )
}
