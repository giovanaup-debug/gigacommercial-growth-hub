const steps = [
  {
    n: "01",
    title: "Estratégia Comercial",
    desc: "Planejamento comercial e inteligência de mercado para gerar crescimento sustentável.",
  },
  {
    n: "02",
    title: "Desenvolvimento de Negócios",
    desc: "Transformação da estratégia em ação prática, prospecção ativa e ganho de tração.",
  },
  {
    n: "03",
    title: "Inteligência de Dados e Otimização",
    desc: "Monitoramento de dados e KPIs para garantir previsibilidade e evolução contínua.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="py-24 sm:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-grid-soft" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-teal-soft font-semibold">Como pensamos</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Nossa <span className="text-accent-grad">metodologia</span>
          </h2>
          <p className="mt-5 text-white/70">
            Um framework integrado que conecta planejamento, execução e dados em um único motor de crescimento.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:border-teal-soft/40 transition"
            >
              <div className="text-sm font-mono text-teal-soft">{s.n}</div>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-teal-soft/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
