import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/giga-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border py-14 bg-surface">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <img src={logo} alt="Gi.Ga Inteligência Comercial" className="h-12 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Conectando estratégia, operação e crescimento para empresas B2B de alta complexidade.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">Navegar</h4>
            <ul className="space-y-2">
              <li><a href="#desafios" className="hover:text-primary transition">Desafios</a></li>
              <li><a href="#por-que" className="hover:text-primary transition">Por que a Gi.Ga</a></li>
              <li><a href="#metodologia" className="hover:text-primary transition">Metodologia</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition">Soluções</a></li>
              <li><a href="#quem-somos" className="hover:text-primary transition">Quem Somos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contato@gigacomercial.com.br" className="inline-flex items-center gap-2 hover:text-primary transition">
                  <Mail className="size-3.5" /> contato@gigacomercial.com.br
                </a>
              </li>
              <li>
                <a href="https://instagram.com/gigainteligencia" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition">
                  <Instagram className="size-3.5" /> @gigainteligencia
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex justify-between flex-wrap gap-2">
        <span>© {new Date().getFullYear()} Gi.Ga Inteligência Comercial. Todos os direitos reservados.</span>
        <span>Conectando estratégia, operação e crescimento.</span>
      </div>
    </footer>
  );
}
