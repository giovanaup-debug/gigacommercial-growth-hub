import { Check } from "lucide-react";

const groups = [
  {
    label: "Base estratégica e operacional",
    items: [
      {
        title: "Imersão e Diagnóstico",
        desc: "Análise da operação comercial, do mercado, da oferta, dos clientes, dos processos e dos dados para identificar prioridades, riscos e oportunidades de crescimento.",
        bullets: [
          "Leitura da operação comercial",
          "Análise de mercado e contexto",
          "Identificação de gargalos e oportunidades",
        ],
      },
      {
        title: "Planejamento Estratégico Comercial",
        desc: "Definição dos mercados prioritários, ICP, posicionamento comercial, estratégia de entrada no mercado, metas e direcionadores da operação.",
        bullets: ["Mercado e ICP", "Estratégia comercial", "Metas e direcionadores"],
      },
      {
        title: "Estruturação e Implementação",
        desc: "Construção e implementação de processos, funil, CRM, indicadores, playbooks e rotinas de gestão, em conjunto com as pessoas-chave do cliente.",
        bullets: ["Processos e funil", "CRM e indicadores", "Playbooks e rotinas de gestão"],
      },
    ],
  },
  {
    label: "Possibilidades de atuação continuada",
    items: [
      {
        title: "Gestão Comercial Fracionada e Evolução Contínua",
        desc: "A Gi.Ga assume a gestão da equipe comercial em um modelo flexível e não exclusivo, acompanhando pipeline, desempenho, indicadores, metas e rotinas para fortalecer a execução e a evolução da operação.",
        bullets: ["Gestão da equipe comercial", "Pipeline, indicadores e metas", "Desenvolvimento da execução"],
      },
      {
        title: "Vendas Consultivas e Expansão Comercial",
        desc: "A Gi.Ga assume a atuação comercial da empresa ou de um nicho previamente definido, conduzindo prospecção, qualificação, negociação, vendas e desenvolvimento de contas.",
        bullets: ["Prospecção qualificada", "Vendas consultivas", "Novos clientes e expansão de contas"],
      },
    ],
  },
  {
    label: "Consolidação",
    items: [
      {
        title: "Transição Assistida e Acompanhamento Estratégico",
        desc: "Transferência estruturada da operação para o time do cliente, com capacitação, documentação e acompanhamento para consolidar o modelo implementado.",
        bullets: ["Capacitação e transferência", "Documentação da operação", "Acompanhamento estratégico"],
      },
    ],
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
              Da estratégia à <span className="text-accent-grad">execução de vendas</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A Gi.Ga atua na estruturação, gestão e execução da operação comercial, combinando diferentes frentes
            conforme o estágio, os desafios e os objetivos de cada empresa.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {groups.map((g) => (
            <div key={g.label} className="reveal">
              <div className="flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-primary">{g.label}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-5 space-y-5">
                {g.items.map((s) => (
                  <article
                    key={s.title}
                    className="grid md:grid-cols-12 gap-6 rounded-3xl border border-border bg-surface p-8 lg:p-10 hover:border-primary/40 transition ring-soft"
                  >
                    <div className="md:col-span-4">
                      <h3 className="text-2xl lg:text-3xl font-bold leading-tight">{s.title}</h3>
                    </div>
                    <div className="md:col-span-5 text-muted-foreground leading-relaxed">{s.desc}</div>
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
          ))}
        </div>

        <p className="reveal mt-10 max-w-4xl text-sm text-muted-foreground leading-relaxed">
          As três primeiras frentes formam a base de estruturação da operação. A partir dela, a Gi.Ga pode assumir a
          gestão comercial, atuar diretamente em vendas consultivas, combinar as duas frentes ou seguir para a
          transição assistida — conforme a necessidade de cada empresa.
        </p>
      </div>
    </section>
  );
}
