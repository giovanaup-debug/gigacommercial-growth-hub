import { defineConfig } from 'vite';
import { createRequire } from 'module';
import path from 'path';

const require = createRequire(import.meta.url);
const configPackage = require('@lovable.dev/vite-tanstack-config');

export default defineConfig(() => {
  const baseConfig = typeof configPackage.tanstackViteConfig === 'function'
    ? configPackage.tanstackViteConfig()
    : (configPackage.tanstackViteConfig || {});

  return {
    ...baseConfig,
    resolve: {
      ...baseConfig.resolve,
      alias: {
        ...baseConfig.resolve?.alias,
        '@': path.resolve(__dirname, './src'),
      },
    },
    // Libera a trava de segurança para o servidor aceitar conexões vindas da Render
    server: {
      ...baseConfig.server,
      allowedHosts: ['.onrender.com', 'gigacommercial-growth-hub.onrender.com'],
    },
  };
});
