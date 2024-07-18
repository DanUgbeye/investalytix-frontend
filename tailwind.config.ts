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
        manrope: ["var(--font-manrope)"],
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        primary: {
          base: "#FB8B1E",
          light: "#FFAF5F",
        },
        main: {
          blue: { base: "#125BD4", light: "#33548B" },
          red: { light: "#EB4335", dark: "#EB4335" },
          green: { light: "#268740", dark: "#34A853" },

          gray: {
            50: "#F9FAFB",
            100: "#F9F9F9", // light mode table row bg
            200: "#DCDCDC", // light mode border
            300: "#CCCCCC", // dark mode text
            400: "#A3A3A3",
            500: "#707070",
            600: "#5E5E5E", //  dark mode border
            700: "#333333", // dark mode table header bg
            800: "#1D1D1D", // light mode table header bg
            900: "#191919", // dark mode table row bg
          },
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
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
