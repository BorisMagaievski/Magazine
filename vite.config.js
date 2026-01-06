import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

// BAM - Alterei para o nome da minha pasta do projeto
export default defineConfig({
  base: "/Magazine/",
  plugins: [],
  resolve: {
    /*something*/
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        checkout: resolve(__dirname, "./checkout.html"),
        pedidos: resolve(__dirname, "./pedidos.html"),
      },
    },
  },
});
