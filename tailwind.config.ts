import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgBlack: "var(--bgBlack)",
      },
      screens: {
        xs: "380px",
        sm: "420px",
        md: "768px",
        ml: "1024px",
        lg: "1280px",
        xl: "1440px",
        "2xl": "1920px",
      },
    },
  },
  plugins: [],
}
export default config
