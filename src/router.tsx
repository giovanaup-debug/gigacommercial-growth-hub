import { createRouter, createHashHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient } from '@tanstack/react-query'

// Inicializa um cliente de query limpo para não travar o carregamento dos blocos visuais
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
})

const hashHistory = createHashHistory()

export const router = createRouter({
  routeTree,
  history: hashHistory,
  context: {
    queryClient: queryClient,
  },
  // Se o roteador se perder nas rotas do arquivo gerado, ele força a renderização
  // da rota raiz (index) em vez de mostrar a tela de erro do framework.
  defaultNotFoundComponent: () => {
    // Tenta renderizar a rota principal automaticamente
    const rootRoute = routeTree.children?.find((r) => r.path === '/' || r.id === '/');
    if (rootRoute?.component) {
      const Component = rootRoute.component;
      return <Component />;
    }
    return null;
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
