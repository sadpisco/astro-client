// @ts-check
import { defineConfig } from "astro/config";
// import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    optimizeDeps: {
      include: ["@apollo/client", "graphql"],
    },
  },
});
