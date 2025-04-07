/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  important: "#root",
  theme: {
    extend: {
      fontFamily: {
        main: ["Kanit", "sans-serif"],

      },
      colors: {
        light: {
          0: "#F8F8F8",
          100: "#E6F99D",
          150: "#D2FF72",
          200: "#73EC8B",
          300: "#54C392",
          400: "#15B392",
        },
        dark: {
          0: "#232D3F",
          100: "#005B41",
          200: "#008170",
          300: "#15B392",
          400: "#E6F99D",
        },
        gradients: {}
      },
      screens: {
        layout: "1280px",
      },
    },
  },
  plugins: [],
};
