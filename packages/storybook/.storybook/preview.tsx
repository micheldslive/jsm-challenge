import React from "react"
import type { Parameters, StoryFn } from "@storybook/react"
import "../src/styles/tailwind.css"
import "@jsm/tailwind-config/globals.css"
import "@jsm/ui/tailwind.css"

const withRootLayout = (Story: StoryFn) => {
  return (
    <div className='flex justify-center flex-col p-4'>
      <Story />
    </div>
  )
}

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
  decorators: [withRootLayout],
}

export default preview
