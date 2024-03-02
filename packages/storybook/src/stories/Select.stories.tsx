import type { Meta, StoryObj } from "@storybook/react"
import { Select, SelectProps } from "@jsm/ui"

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<SelectProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    options: [
      { label: "One", value: "one" },
      { label: "Two", value: "two" },
      { label: "Tree", value: "tree" },
      { label: "For", value: "for" },
    ],
    placeholder: "Select a option",
  },
}
