// @ts-check
import image from '@astrojs/image';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), vue(), image()],
  vite: {
    optimizeDeps: {
      include: ["@apollo/client", "graphql"],
    },
  },
});
