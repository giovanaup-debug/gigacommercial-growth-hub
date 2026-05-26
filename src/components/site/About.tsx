import team from "@/assets/giga-team.jpg";
import giovana from "@/assets/giovana.jpg";
import gabriela from "@/assets/gabriela.jpg";

const partners = [
  {
    name: "Giovana Urrutia",
    photo: giovana,
    bullets: [
      "+15 anos consolidando operações de alta performance em tecnologia e serviços.",
      "Expertise em vendas consultivas e gestão de contas B2B focadas em aumento de receita.",
      "Especialista em estruturação de processos e execução disciplinada voltada ao fechamento.",
      "Mestra em Psicologia com foco em comportamento organizacional, otimizando negociações corporativas.",
    ],
  },
  {
    name: "Gabriela Amando",
    photo: gabriela,
    bullets: [
      "+15 anos de experiência com vendas B2B de contas Enterprise.",
      "Top Performer Global, com histórico sólido na abertura de mercado e grandes contas.",
      "Especialista em negociações complexas e desenvolvimento estratégico de relacionamento.",
      "Formada em Administração com MBA em Logística e Supply Chain Management pela FGV.",
    ],
  },
];

export function About() {
  return (
    <section id="quem-somos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal relative">
            <img
              src={team}
              alt="Giovana Urrutia e Gabriela Amando, sócias da Gi.Ga"
              className="w-full rounded-3xl ring-soft border border-teal-soft/60"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-primary text-primary-foreground rounded-2xl p-5 ring-soft">
              <div className="text-3xl font-bold">+15</div>
              <div className="text-xs uppercase tracking-wider opacity-80 mt-1">&nbsp; &nbsp; &nbsp;ANOS</div>
            </div>
          </div>
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Quem somos</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
              <span className="text-accent-grad">+15 anos</span> de experiência em vendas consultivas.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Unimos estratégia e execução para construir relacionamentos consultivos e
              crescimento sustentável. Atuamos lado a lado com fundadores e líderes que precisam
              transformar venda artesanal em um processo industrial — previsível, mensurável e replicável.
            </p>
            <div className="mt-8 flex gap-4">
              <div className="font-display font-bold text-lg">GIOVANA URRUTIA</div>
              <div className="text-muted-foreground">·</div>
              <div className="font-display font-bold text-lg">GABRIELA AMANDO</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {partners.map((p) => (
            <article
              key={p.name}
              className="reveal rounded-3xl border border-border bg-surface p-6 sm:p-8 ring-soft"
            >
              <div className="flex items-center gap-5">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="size-20 sm:size-24 rounded-2xl object-cover border border-border"
                />
                <div>
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <div className="text-sm text-primary mt-1">Sócia-fundadora</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="text-primary mt-0.5">→</span>
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
