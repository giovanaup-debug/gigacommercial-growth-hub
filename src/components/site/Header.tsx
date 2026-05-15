export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight">
            Gi<span className="text-accent">.</span>ga
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground border-l border-border pl-2">
            Inteligência Comercial
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#solucoes" className="hover:text-foreground transition">Soluções</a>
          <a href="#diferenciais" className="hover:text-foreground transition">Diferenciais</a>
          <a href="#quem-somos" className="hover:text-foreground transition">Quem Somos</a>
          <a href="#resultados" className="hover:text-foreground transition">Resultados</a>
        </nav>
        <a
          href="#contato"
          className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
        >
          Fale com a Gente
        </a>
      </div>
    </header>
  );
}
