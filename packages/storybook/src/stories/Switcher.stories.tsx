import type { Meta, StoryObj } from "@storybook/react"
import { SwitcherStory } from "@jsm/ui"
import { Laptop, Moon, Sun } from "lucide-react"

const meta = {
  title: "Components/Switcher",
  component: SwitcherStory,
} satisfies Meta<typeof SwitcherStory>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    options: [
      {
        value: "light",
        label: "Português",
        icon: <Sun size={20} />,
      },
      {
        value: "dark",
        label: "English",
        icon: <Moon size={20} />,
      },
      {
        value: "system",
        label: "English",
        icon: <Laptop size={20} />,
      },
    ],
    label: "Mudar tema",
    value: "light",
  },
}
