import type { Meta, StoryObj } from "@storybook/react"
import { Logo, LogoProps } from "./index.js"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Logo",
  component: Logo,
} satisfies Meta<LogoProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {}

export const Transparent: Story = {
  args: {
    color: "transparent",
    fill: "black",
  },
}

export const Middle: Story = {
  args: {
    size: "md",
  },
}

export const Large: Story = {
  args: {
    color: "transparent",
    fill: "black",
    size: "lg",
  },
}
