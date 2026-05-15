import { Zap, Repeat, Database, Crosshair } from "lucide-react";

const items = [
  { icon: Zap, title: "Eficiência enxuta", desc: "Estrutura sem gordura, foco em alavancas que movem receita." },
  { icon: Repeat, title: "Processos replicáveis", desc: "Escalabilidade real através de playbooks documentados." },
  { icon: Database, title: "Inteligência de dados", desc: "Mapeamento de nichos lucrativos e decisões orientadas por métricas." },
  { icon: Crosshair, title: "Foco total em B2B", desc: "Especialistas em vendas complexas e ciclos longos." },
];

export function WhyUs() {
  return (
    <section id="diferenciais" className="py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Por que a Gi.ga</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-gradient">
            Senioridade que se traduz em resultado.
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((it) => (
            <div
              key={it.title}
              className="reveal bg-background p-8 hover:bg-surface/60 transition group"
            >
              <it.icon className="size-6 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
