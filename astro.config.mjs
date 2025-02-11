import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        external: ['/src/assets/logos/*.png']
      }
    },
    resolve: {
      alias: {
        '@assets': '/src/assets'
      }
    }
  }
});