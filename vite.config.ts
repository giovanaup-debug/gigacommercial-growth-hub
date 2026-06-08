import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Importa o pacote usando a estrutura segura de CommonJS aceita pelo Node
const pkg = require('@lovable.dev/vite-tanstack-config');

// Exporta a configuração padrão exatamente como o framework espera
export default pkg.tanstackViteConfig;
