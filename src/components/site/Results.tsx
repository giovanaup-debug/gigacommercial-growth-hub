const stats = [
  { k: "+15", v: "Anos de experiência" },
  { k: "+50", v: "Clientes B2B atendidos" },
  { k: "+100", v: "Projetos comerciais entregues" },
  { k: "8x", v: "Crescimento médio do pipeline" },
];

const testimonials = [
  {
    quote:
      "A Gi.ga estruturou nosso funil de Outbound e em 4 meses conseguimos previsibilidade que nunca tivemos. Saímos do achismo para a gestão por indicadores.",
    author: "Diretor Comercial",
    company: "SaaS B2B Enterprise",
  },
  {
    quote:
      "Senioridade rara. Elas entendem vendas complexas de verdade — abriram contas estratégicas que estavam paradas há anos no nosso pipeline.",
    author: "CEO",
    company: "Indústria de Tecnologia",
  },
];

export function Results() {
  return (
    <section id="resultados" className="py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Resultados</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-gradient">
            Números que sustentam a confiança dos nossos clientes.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.v} className="reveal rounded-2xl border border-border bg-surface/50 p-6">
              <div className="text-4xl sm:text-5xl font-bold text-accent-gradient">{s.k}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="reveal rounded-2xl border border-border bg-surface/50 p-8"
            >
              <blockquote className="text-lg leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
