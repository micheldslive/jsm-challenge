import type { Meta, StoryObj } from "@storybook/react"
import { Search, SearchProps } from "./Search"

const meta = {
  title: "Components/Search",
  component: Search,
} satisfies Meta<SearchProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    placeholder: "Buscar aqui",
    buttonTitle: "Botão procurar",
  },
}

export const Reverse: Story = {
  args: {
    placeholder: "Buscar aqui",
    buttonTitle: "Botão procurar",
    direction: "reverse",
  },
}
