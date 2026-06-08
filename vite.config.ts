import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
// Importa o pacote completo como padrão para não quebrar o CommonJS
import lovableConfigPkg from "@lovable.dev/vite-tanstack-config";

// Extrai a função de forma segura
const { getConfig } = lovableConfigPkg;

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // Garante caminhos relativos para os arquivos CSS e JS no navegador
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
