import { Config } from "tailwindcss"
import ta from "tailwindcss-animate"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "neutral-350": "#B0B0B0",
        "neutral-360": "#4f4f4f",
        "neutral-750": "#3A3A3A",
        "neutral-760": "#c5c5c5",
        "blue-social": "#28B0FC",
      },
    },
    screens: {
      rsm: { max: "639px" },
      rmd: { max: "767px" },
      rlg: { max: "1023px" },
    },
    container: {
      screens: {
        jsm: "1104px",
      },
    },
    transitionProperty: {
      "max-h": "max-height",
    },
    transitionTimingFunction: {
      "in-select": "cubic-bezier(.61,-0.53,.43,1.43)",
    },
    transformOrigin: {
      half: "50% 50%",
    },
    keyframes: {
      stroke: {
        "100%": { strokeDashoffset: "0" },
      },
      skeleton: {
        "50%": {
          opacity: "0.5",
        },
      },
    },
    animation: {
      stroke: "stroke 1s cubic-bezier(0.65, 0, 0.45, 1) 0.1s forwards",
      skeleton: "skeleton 2s cubic-bezier(.4,0,.6,1) infinite",
    },
  },
  plugins: [ta],
}

export default config
