import logo from "@/assets/giga-logo-new.png";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Gi.Ga Inteligência Comercial" className="h-9 w-auto bg-slate-50" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#desafios" className="hover:text-foreground transition">Desafios</a>
          <a href="#por-que" className="hover:text-foreground transition">Por que a Gi.Ga</a>
          <a href="#metodologia" className="hover:text-foreground transition">Metodologia</a>
          <a href="#solucoes" className="hover:text-foreground transition">Soluções</a>
          <a href="#quem-somos" className="hover:text-foreground transition">Quem Somos</a>
        </nav>
        <a
          href="#contato"
          className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
        >
          Agendar Diagnóstico
        </a>
      </div>
    </header>
  );
}
