import { ArrowRight } from "lucide-react";
import logo from "@/assets/giga-logo-new.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-soft opacity-70" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Inteligência Comercial · B2B
          </div>

          <h1 className="reveal mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
            Conectando <span className="text-accent-grad">estratégia</span>, operação e{" "}
            <span className="text-accent-grad">crescimento</span>.
          </h1>

          <p className="reveal mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A Gi.Ga transforma sua força de vendas através de estratégia inteligente, previsibilidade
            e relacionamento de alto valor. Mais de 30 anos de experiência somados em vendas de alta complexidade.
          </p>

          <div className="reveal mt-10 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Agendar Reunião
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold hover:bg-secondary transition"
            >
              Conheça nossas soluções
            </a>
          </div>

          <div className="reveal mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "+30", v: "Anos de experiência somados" },
              { k: "B2B", v: "Vendas de alta complexidade" },
              { k: "Foco em empresas de médio porte", v: "Atendimento especializado" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-primary/30 pl-4">
                <div className="text-2xl font-bold text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal lg:col-span-5 relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-8 rounded-full border border-primary/20" />
            <div className="absolute inset-16 rounded-full border border-primary/30" />
            <div className="absolute inset-24 rounded-full border border-primary/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={logo} alt="Gi.Ga Inteligência Comercial" className="w-2/3 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
