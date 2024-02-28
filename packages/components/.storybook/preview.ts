import type { Parameters } from "@storybook/react"
import "../src/styles/tailwind.css"
import "@jsm/tailwind-config/globals.css"

const preview: Parameters = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
