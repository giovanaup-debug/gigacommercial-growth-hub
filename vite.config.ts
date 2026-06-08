import { defineConfig } from 'vite';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const configPackage = require('@lovable.dev/vite-tanstack-config');

export default defineConfig(() => {
  // Pega a configuração base do Lovable
  const baseConfig = typeof configPackage.tanstackViteConfig === 'function'
    ? configPackage.tanstackViteConfig()
    : (configPackage.tanstackViteConfig || {});

  // Injeta explicitamente o mapeamento do caractere '@' para a pasta 'src'
  return {
    ...baseConfig,
    resolve: {
      ...baseConfig.resolve,
      alias: {
        ...baseConfig.resolve?.alias,
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
