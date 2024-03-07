import type { Config } from "tailwindcss"
import sharedConfig from "@jsm/tailwind-config/tailwind.config"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./app/**/*.tsx", "./shared/**/*.tsx"],
  presets: [sharedConfig],
}

export default config
