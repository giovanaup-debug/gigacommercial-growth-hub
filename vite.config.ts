import { defineConfig } from 'vite';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Carrega o pacote de configuração do Lovable
const configPackage = require('@lovable.dev/vite-tanstack-config');

// O pacote geralmente exporta a configuração como uma função ou um objeto específico.
// Usamos o defineConfig do Vite para envelopar e retornar a configuração correta.
export default defineConfig(() => {
  if (typeof configPackage.tanstackViteConfig === 'function') {
    return configPackage.tanstackViteConfig();
  }
  return configPackage.tanstackViteConfig || {};
});
