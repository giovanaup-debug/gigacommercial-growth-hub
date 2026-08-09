import { Users, TrendingDown, Target, Workflow, Database, Timer } from "lucide-react";

const challenges = [
  {
    icon: Users,
    title: "Vendas concentradas nos sócios",
    desc: "O pipeline perde força quando a liderança deixa de vender.",
  },
  {
    icon: TrendingDown,
    title: "Pipeline irregular e baixa previsibilidade",
    desc: "Oportunidades oscilam e reduzem a segurança para projetar vendas e receita.",
  },
  {
    icon: Target,
    title: "Falta de clareza sobre o cliente certo",
    desc: "Esforço comercial disperso em mercados e clientes de baixo potencial.",
  },
  {
    icon: Workflow,
    title: "Processos sem governança",
    desc: "Cada vendedor atua de uma forma, sem critérios claros de avanço.",
  },
  {
    icon: Database,
    title: "CRM subutilizado",
    desc: "Há registros, mas faltam dados confiáveis para gerir vendas.",
  },
  {
    icon: Timer,
    title: "Ciclos longos e propostas paradas",
    desc: "Tempo e energia presos em oportunidades que não avançam.",
  },
];

export function Problem() {
  return (
    <section id="desafios" className="py-24 sm:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Cenário atual</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Quando o crescimento depende mais de <span className="text-accent-grad">esforço</span> do que de método
          </h2>
          <p className="mt-5 text-muted-foreground">
            Alguns sinais revelam quando a operação comercial ainda não sustenta os objetivos do negócio.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((c) => (
            <div
              key={c.title}
              className="reveal flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 transition"
            >
              <div className="size-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <c.icon className="size-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 rounded-2xl bg-ink text-white p-8 lg:p-10 ring-soft">
          <p className="text-xl sm:text-2xl font-semibold leading-snug">
            Quando esses sinais se repetem, o problema raramente é esforço. É método.
          </p>
        </div>
      </div>
    </section>
  );
}
