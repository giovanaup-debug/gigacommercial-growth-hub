import { AlertTriangle, GitBranch, Target } from "lucide-react";

const items = [
  {
    icon: AlertTriangle,
    title: "Resultados imprevisíveis",
    desc: "Receita oscilante e dependência de poucos clientes que comprometem o crescimento sustentável.",
  },
  {
    icon: GitBranch,
    title: "Processo comercial frágil",
    desc: "Vendas dependentes de pessoas, sem processo replicável, métricas claras nem playbook.",
  },
  {
    icon: Target,
    title: "Dificuldade em abrir grandes contas",
    desc: "Falta de prospecção ativa estruturada para acessar decisores em vendas complexas B2B.",
  },
];

export function Problem() {
  return (
    <section className="py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">O problema</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-gradient">
            Vender para grandes empresas não pode depender da sorte.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="reveal group rounded-2xl border border-border bg-surface/50 p-8 hover:border-accent/40 transition"
            >
              <div className="size-11 rounded-xl bg-background border border-border flex items-center justify-center group-hover:border-accent/40 transition">
                <it.icon className="size-5 text-accent" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
