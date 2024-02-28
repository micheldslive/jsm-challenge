import { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-350": "#B0B0B0",
      },
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
    },
    animation: {
      stroke: "stroke 1s cubic-bezier(0.65, 0, 0.45, 1) 0.1s forwards",
    },
  },
}

export default config
