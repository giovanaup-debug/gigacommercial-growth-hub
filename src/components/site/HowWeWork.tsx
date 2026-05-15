import { Compass, Cog, Rocket, BarChart3 } from "lucide-react";

const cycle = [
  { icon: Compass, title: "Diagnóstico", desc: "Ciclo de viabilidade e planejamento." },
  { icon: Cog, title: "Estruturação", desc: "Implementação da estratégia e processos." },
  { icon: Rocket, title: "Execução", desc: "Desenvolvimento ativo de negócios." },
  { icon: BarChart3, title: "Otimização", desc: "Monitoramento e resultados." },
];

export function HowWeWork() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Processo</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Como <span className="text-accent-grad">atuamos</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Um ciclo contínuo de melhoria que conecta diagnóstico, execução e dados.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cycle.map((c, i) => (
            <div key={c.title} className="reveal relative rounded-2xl border border-border bg-surface p-7 hover:border-primary/40 transition">
              <div className="flex items-center justify-between">
                <div className="size-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                  <c.icon className="size-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
