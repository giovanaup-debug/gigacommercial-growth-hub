import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { tanstackViteConfig } from "@lovable.dev/vite-tanstack-config";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // <--- ISSO CORRIGE A TELA EM BRANCO: força caminhos relativos no navegador
  plugins: [
    react(),
    ...tanstackViteConfig.plugins(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
