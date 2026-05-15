import { Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-14">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <div className="font-display text-2xl font-bold">
            Gi<span className="text-accent">.</span>ga
          </div>
          <div className="text-xs text-muted-foreground mt-1">Inteligência Comercial · B2B</div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Estruturamos áreas comerciais previsíveis e escaláveis para empresas B2B de alta complexidade.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Navegar</h4>
            <ul className="space-y-2">
              <li><a href="#solucoes" className="hover:text-accent transition">Soluções</a></li>
              <li><a href="#diferenciais" className="hover:text-accent transition">Diferenciais</a></li>
              <li><a href="#quem-somos" className="hover:text-accent transition">Quem somos</a></li>
              <li><a href="#resultados" className="hover:text-accent transition">Resultados</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contato@gigacomercial.com.br" className="inline-flex items-center gap-2 hover:text-accent transition">
                  <Mail className="size-3.5" /> contato@gigacomercial.com.br
                </a>
              </li>
              <li>
                <a href="https://instagram.com/gigainteligencia" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition">
                  <Instagram className="size-3.5" /> @gigainteligencia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-border/50 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Gi.ga Inteligência Comercial. Todos os direitos reservados.</span>
        <span>Feito com método.</span>
      </div>
    </footer>
  );
}
