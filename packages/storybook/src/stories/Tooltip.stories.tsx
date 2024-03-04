import type { Meta, StoryObj } from "@storybook/react"
import { Tooltip } from "@jsm/ui"

const meta = {
  title: "Components/Tooltip",
  component: Tooltip.Story,
} satisfies Meta<typeof Tooltip.Story>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
