import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F1EE",
        blush: "#E8CFC8",
        rose: {
          DEFAULT: "#C97E74",
          dark: "#B87068",
        },
        brown: "#8A5A52",
        gold: "#C8A46A",
        charcoal: "#2B2B2B",
        white: "#FFFFFF",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 15px rgba(138, 90, 82, 0.08)",
        card: "0 4px 20px rgba(138, 90, 82, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
