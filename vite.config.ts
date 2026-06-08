import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // <--- ISSO RESOLVE A TELA EM BRANCO! Garante caminhos relativos para o CSS e JS
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // Força o Vite a jogar tudo direto na pasta dist comum
    emptyOutDir: true,
  },
});
