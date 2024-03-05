import type { Config } from "tailwindcss"
import sharedConfig from "@jsm/tailwind-config"
import { nextui } from "@nextui-org/react"

const config: Pick<Config, "prefix" | "presets" | "content" | "plugins"> = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
  plugins: [nextui()],
}

export default config
