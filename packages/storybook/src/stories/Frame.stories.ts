import type { Meta, StoryObj } from "@storybook/react"
import { Frame, FrameProps } from "@jsm/ui"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Frame",
  component: Frame,
} satisfies Meta<FrameProps>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {}

export const Secondary: Story = {}

export const Large: Story = {}

export const Small: Story = {}
