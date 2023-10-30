/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#0C969D",
        Alert200: "#FBD4A4",
        Alert500: "#AC6714",
        B100: "#EBEBEC",
        B200: "#B2B2B3",
        B500: "#2C2C2E",
        P200: "#9DD5D7",
        P500: "#08696D",
        T100: "#EBF0F3",
        T500: "#2A4B62",
        T600: "#1E3646",
        success: "#628A2CED",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
