import { ArrowRight, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground reveal">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            B2B de Alta Complexidade · Outbound Estruturado
          </div>

          <h1 className="reveal mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-gradient">
            Previsibilidade e controle total do seu{" "}
            <span className="text-accent-gradient">funil de vendas B2B</span>
          </h1>

          <p className="reveal mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Mais de 30 anos de experiência comercial combinados para acelerar o crescimento
            da sua empresa com processo, inteligência de dados e execução sênior.
          </p>

          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition"
            >
              Fale com a Gente
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3.5 text-sm font-semibold hover:bg-surface transition"
            >
              Conheça Nossas Soluções
            </a>
          </div>

          <div className="reveal mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "+30", v: "Anos de experiência" },
              { k: "B2B", v: "Alta complexidade" },
              { k: "100%", v: "Foco em resultado" },
            ].map((s) => (
              <div key={s.v} className="border-l border-border pl-4">
                <div className="text-2xl font-bold text-accent">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-6 top-40 hidden lg:block">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-3xl border border-border bg-surface/40 backdrop-blur-sm p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Pipeline</span>
                <TrendingUp className="size-4 text-accent" />
              </div>
              <div className="mt-6 space-y-3">
                {[90, 70, 50, 30].map((w, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                      <span>{["Prospect", "Qualificado", "Proposta", "Fechado"][i]}</span>
                      <span>{w}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full"
                        style={{ width: `${w}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
