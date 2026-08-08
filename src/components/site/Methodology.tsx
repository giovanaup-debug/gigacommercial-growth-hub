const principles = [
  {
    letter: "C",
    title: "Cliente no centro das decisões de venda",
    desc: "A estratégia comercial parte do contexto, das necessidades e do potencial dos clientes certos para a empresa.",
  },
  {
    letter: "O",
    title: "Operação comercial integrada",
    desc: "Estratégia, processos, CRM, indicadores e rotinas de gestão funcionam de forma conectada entre as áreas.",
  },
  {
    letter: "R",
    title: "Receita consistente e previsível",
    desc: "A operação comercial ganha método, governança e visibilidade para orientar decisões e sustentar a geração de receita.",
  },
  {
    letter: "E",
    title: "Expansão comercial contínua",
    desc: "Novos negócios e desenvolvimento de contas são conduzidos com inteligência, relacionamento e disciplina comercial.",
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
            Método <span className="text-accent-grad">CORE Gi.Ga</span>
          </h2>
          <p className="mt-5 text-white/70">
            O Método CORE Gi.Ga conecta estratégia, estruturação e gestão de vendas para construir uma operação
            comercial centrada no cliente, integrada, consistente e orientada ao crescimento.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p) => (
            <div
              key={p.letter}
              className="reveal relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:border-teal-soft/40 transition"
            >
              <div className="text-3xl font-mono font-bold text-teal-soft">{p.letter}</div>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 max-w-3xl text-white/70">
          Com o Método CORE, estratégia se transforma em força de vendas: uma operação comercial estruturada para
          conquistar clientes, aumentar receita e expandir negócios.
        </p>
      </div>
    </section>
  );
}
