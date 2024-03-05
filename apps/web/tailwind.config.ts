import type { Config } from "tailwindcss"
import sharedConfig from "@jsm/tailwind-config"
import twBootStrapGrid from "tailwind-bootstrap-grid"

const config: Pick<Config, "content" | "presets" | "plugins"> = {
  content: ["./app/**/*.tsx", "./shared/**/*.tsx"],
  presets: [sharedConfig],
  plugins: [twBootStrapGrid()],
}

export default config
