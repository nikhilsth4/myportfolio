import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/*.svg",
  ],
  theme: {
    colors: {},
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "hsl(28,900%,81%)",
        secondary: "hsl(110, 100%, 88%)",
        background: "hsl(28, 100%,94%)",
        accent: "hsl(249, 100%, 86%)",
      },
    },
    variants: {
      fill: ["hover", "focus"],
    },
  },
  plugins: [],
};
export default config;
