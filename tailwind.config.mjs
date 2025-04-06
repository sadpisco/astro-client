/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  important: "#root",
  theme: {
    extend: {
      screens: {
        layout: "1280px",
      },
    },
  },
  plugins: [],
};
