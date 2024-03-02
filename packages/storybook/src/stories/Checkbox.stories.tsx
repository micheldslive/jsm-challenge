import type { Meta, StoryObj } from "@storybook/react"
import { Checkbox, CheckboxProps } from "@jsm/ui"

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
} satisfies Meta<CheckboxProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: "primary",
    id: "checkboxPrimary",
    label: "Click to check",
    value: "to-check",
  },
}

export const Checked: Story = {
  args: {
    name: "primary",
    id: "checkboxChecked",
    label: "Click to check",
    value: "is-checked",
    defaultChecked: true,
  },
}
