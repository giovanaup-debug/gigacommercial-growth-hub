import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const router = createRouter({
  routeTree,
  basepath: '/', // <--- ISSO DIZ AO ROTEADOR PARA INICIALIZAR CORRETAMENTE NA RAIZ DO SITE ESTÁTICO
  context: {
    queryClient,
  },
})
