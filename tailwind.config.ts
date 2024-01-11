import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {},
    extend: {
      colors: {
        primary: "hsl(28,98%,81%)",
        secondary: "hsl(110, 100%, 88%)",
        background: "hsl(56, 88%, 97%)",
        accent: "hsl(249, 100%, 86%)",
      },
    },
  },
  plugins: [],
};
export default config;
