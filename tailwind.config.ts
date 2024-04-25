import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontSize: {
        xxs: "0.6rem",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        mulish: ["var(--font-mulish)"],
      },
      colors: {
        primary: {
          base: "#FB8B1E",
          light: "#ffaf5f",
        },
        main: {
          blue: { base: "#125BD4", light: "#33548B" },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      containers: {
        xxs: "16rem",
        xxxs: "12rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;

export default config;
