"use client"

import { type ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { Tooltip } from "@jsm/ui"

interface MoreProvidersProps {
  children: ReactNode
}

export const MoreProviders = ({ children }: MoreProvidersProps) => {
  return (
    <Tooltip.Provider>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </Tooltip.Provider>
  )
}
