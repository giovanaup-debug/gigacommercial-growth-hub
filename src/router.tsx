import { createRouter, createHashHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

// Força o roteador a trabalhar com caminhos baseados em # (Hash),
// eliminando completamente o problema de tela em branco em servidores estáticos.
const hashHistory = createHashHistory()

export const router = createRouter({
  routeTree,
  history: hashHistory,
  context: {
    queryClient: undefined, // Mapeado como opcional para evitar qualquer quebra de inicialização
  },
})

// Registra a tipagem do roteador para garantir o funcionamento do TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
