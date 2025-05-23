import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        sans: "var(--font-archivo)",
        // sans: ["Archivo", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        "red-orange": {
          // modern CSS function that blends two or more colors. 
          // 50% red, 50% orange
          100: "color-mix(in srgb, theme('colors.red.100') 50%, theme('colors.orange.100') 50%)",
          200: "color-mix(in srgb, theme('colors.red.200') 50%, theme('colors.orange.200') 50%)",
          300: "color-mix(in srgb, theme('colors.red.300') 50%, theme('colors.orange.300') 50%)",
          400: "color-mix(in srgb, theme('colors.red.400') 50%, theme('colors.orange.400') 50%)",
          500: "color-mix(in srgb, theme('colors.red.500') 50%, theme('colors.orange.500') 50%)",
          // 500: "#FF4500", // This is a direct red-orange color
        },
      },
    },
  },
  plugins: [],
};

export default config;
