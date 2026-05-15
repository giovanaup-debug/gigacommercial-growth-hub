import { BarChart3, Target, LineChart, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    icon: BarChart3,
    tag: "01",
    title: "Estratégia Comercial",
    desc: "Estruturação de processos, definição de ICP e planejamento de metas com clareza para cada fase do funil.",
    bullets: ["Definição de ICP", "Playbook comercial", "Metas e forecast"],
  },
  {
    icon: Target,
    tag: "02",
    title: "Desenvolvimento de Negócios",
    desc: "Prospecção ativa Outbound, qualificação e condução de negociações complexas com decisores sêniores.",
    bullets: ["Outbound estruturado", "Qualificação MEDDIC", "Negociação executiva"],
  },
  {
    icon: LineChart,
    tag: "03",
    title: "Inteligência de Dados",
    desc: "KPIs, CRM e otimização contínua baseada em indicadores reais. Decisões guiadas por dados, não opinião.",
    bullets: ["KPIs e dashboards", "Implantação de CRM", "Otimização contínua"],
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Soluções</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-gradient">
              Três pilares para construir um motor de vendas escalável.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Atuação integrada da estratégia à execução, com squads sêniores dedicados ao seu crescimento.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="reveal relative rounded-2xl border border-border bg-surface/50 p-8 overflow-hidden group hover:border-accent/40 transition"
            >
              <div className="absolute top-6 right-6 text-xs font-mono text-muted-foreground">
                {s.tag}
              </div>
              <div className="size-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <s.icon className="size-6 text-accent" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <ArrowUpRight className="size-3.5 text-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
