import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { getConfig } from "@lovable.dev/vite-tanstack-config";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // <--- ISSO CORRIGE A TELA BRANCO: força caminhos relativos para o CSS e JS no navegador
  ...getConfig(),
  plugins: [
    react(),
    ...getConfig().plugins,
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
