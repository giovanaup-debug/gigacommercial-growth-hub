import { Users, TrendingDown, Workflow, Target, Database, MonitorCog } from "lucide-react";

const challenges = [
  { icon: Users, title: "Escassez de talentos qualificados" },
  { icon: TrendingDown, title: "Falta de previsibilidade na receita" },
  { icon: Workflow, title: "Processos comerciais inexistentes" },
  { icon: Target, title: "Baixa conversão e prospecção ineficiente" },
  { icon: Database, title: "Ausência de dados para tomada de decisão" },
  { icon: MonitorCog, title: "Gestão de CRM negligenciada" },
];

export function Problem() {
  return (
    <section id="desafios" className="py-24 sm:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Cenário atual</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Desafios do <span className="text-accent-grad">mercado</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Vendas B2B exigem método. Os principais gargalos que identificamos nas operações comerciais são:
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
              <p className="text-base font-medium leading-snug pt-1.5">{c.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="reveal rounded-2xl bg-ink text-white p-8 lg:p-10 ring-soft">
            <div className="text-6xl sm:text-7xl font-bold text-accent-grad">76%</div>
            <p className="mt-4 text-white/80 leading-relaxed">
              das empresas têm dificuldade em contratar vendedores de alta performance.
            </p>
            <p className="mt-3 text-xs text-white/50 uppercase tracking-wider">Fonte: Manpower Group</p>
          </div>
          <div className="reveal rounded-2xl bg-ink text-white p-8 lg:p-10 ring-soft">
            <div className="text-6xl sm:text-7xl font-bold text-accent-grad">&lt;35%</div>
            <p className="mt-4 text-white/80 leading-relaxed">
              do tempo é gasto vendendo de fato. O resto é burocracia e falha processual.
            </p>
            <p className="mt-3 text-xs text-white/50 uppercase tracking-wider">Fonte: Gartner</p>
          </div>
        </div>
      </div>
    </section>
  );
}
