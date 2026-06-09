import { createApp } from 'vinxi';
import { configureTanStackStartFromFile } from '@lovable.dev/vite-tanstack-config';

export default createApp({
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/',
    },
    {
      name: 'client',
      type: 'spa',
      handler: './src/entry-client.tsx',
      target: 'browser',
      plugins: () => [],
    }
  ],
});
