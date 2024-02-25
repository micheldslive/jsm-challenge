import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardProps } from "."

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["docsPage"],
  argTypes: {},
} satisfies Meta<CardProps>

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs = {
  title: "Joselino Alves",
  address: "Rua Espírito Santo, 2096",
  country: "São José de Ribamar Paraná - CEP: 96895",
}

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    loading: false,
    ...defaultArgs,
  },
}

export const Secondary: Story = {
  args: {
    loading: false,
    ...defaultArgs,
  },
}

export const Large: Story = {
  args: {
    loading: false,
    ...defaultArgs,
  },
}

export const Small: Story = {
  args: {
    loading: false,
    ...defaultArgs,
  },
}
