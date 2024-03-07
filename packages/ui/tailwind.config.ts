import type { Config } from "tailwindcss"
import sharedConfig from "@jsm/tailwind-config/tailwind.config"

const config: Pick<Config, "prefix" | "presets" | "content" | "plugins"> = {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
}

export default config
