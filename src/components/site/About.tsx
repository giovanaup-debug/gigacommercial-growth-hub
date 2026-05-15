export function About() {
  const partners = [
    {
      name: "Giovana Urrutia",
      role: "Sócia-fundadora",
      bio: "Sênior em desenvolvimento de negócios B2B, com histórico de abertura de grandes contas e estruturação de áreas comerciais de alta performance.",
      initials: "GU",
    },
    {
      name: "Gabriela Amando",
      role: "Sócia-fundadora",
      bio: "Especialista em estratégia comercial, processos e inteligência de dados. Lidera a estruturação de funis previsíveis e escaláveis.",
      initials: "GA",
    },
  ];

  return (
    <section id="quem-somos" className="py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.2em] text-accent">Quem somos</span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-gradient">
              Duas trajetórias sêniores, um único compromisso: o seu crescimento.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A Gi.ga nasce da união de mais de <span className="text-accent font-semibold">30 anos de experiência comercial combinados</span> em vendas
              consultivas, abertura de grandes contas e estruturação de áreas comerciais em mercados de alta complexidade.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Atuamos lado a lado com fundadores e líderes que precisam transformar venda artesanal
              em um processo industrial — previsível, mensurável e replicável.
            </p>
          </div>

          <div className="space-y-4">
            {partners.map((p) => (
              <div key={p.name} className="reveal flex gap-5 rounded-2xl border border-border bg-surface/50 p-6">
                <div className="size-16 shrink-0 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center font-display font-bold text-accent text-lg">
                  {p.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="text-xs uppercase tracking-wider text-accent mt-0.5">{p.role}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
