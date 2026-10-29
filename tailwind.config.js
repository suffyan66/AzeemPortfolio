import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(199, 89%, 48%)",
          light: "hsl(199, 89%, 60%)",
          dark: "hsl(199, 89%, 38%)",
        },
        surface: {
          dark: "#0B1120",
          "dark-alt": "#111C33",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};