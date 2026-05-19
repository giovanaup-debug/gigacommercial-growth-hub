import { Check } from "lucide-react";

const solutions = [
  {
    tag: "01",
    title: "Estratégia Comercial",
    desc: "Estruturação de processos, planejamento de metas. Inteligência de mercado com identificação de novos nichos e perfis de clientes com maior potencial de retorno (ICP).",
    badge: "PLANEJAMENTO E PREVISIBILIDADE ESTRATÉGICA",
    bullets: ["Definição de ICP", "Playbook comercial", "Planejamento de metas"],
  },
  {
    tag: "02",
    title: "Desenvolvimento de Negócios",
    desc: "Prospecção ativa de alto nível (Outbound), qualificação e condução de negociações complexas para abertura de contas estratégicas. Criação e padronização de scripts de cada etapa.",
    badge: "METODOLOGIA REPLICÁVEL · GANHO DE TRAÇÃO",
    bullets: ["Outbound com método", "Qualificação consultiva", "Negociação executiva"],
  },
  {
    tag: "03",
    title: "Inteligência de Dados e Otimização",
    desc: "Monitoramento contínuo de KPIs e saúde do funil, gestão de CRM e otimização de resultados baseada em indicadores reais de faturamento.",
    badge: "ROI E ESCALA COMERCIAL",
    bullets: ["KPIs e dashboards", "Gestão de CRM", "Otimização contínua"],
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Soluções</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
              Nossas <span className="text-accent-grad">soluções</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Atuação integrada da estratégia à execução, com squads sêniores dedicados ao seu crescimento.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {solutions.map((s) => (
            <article
              key={s.title}
              className="reveal grid md:grid-cols-12 gap-6 rounded-3xl border border-border bg-surface p-8 lg:p-10 hover:border-primary/40 transition ring-soft"
            >
              <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-4">
                <div className="text-xs font-mono text-primary tracking-widest">{s.tag}</div>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight">{s.title}</h3>
              </div>
              <div className="md:col-span-6 text-muted-foreground leading-relaxed">
                {s.desc}
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider">
                  <Check className="size-3.5" /> {s.badge}
                </div>
              </div>
              <ul className="md:col-span-3 space-y-2.5 md:border-l md:border-border md:pl-6">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="size-4 text-primary mt-0.5 shrink-0" />
                    <span>{b}</span>
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
