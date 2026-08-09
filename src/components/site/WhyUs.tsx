import { Award, Workflow, Rocket, Crosshair, Database, LineChart } from "lucide-react";

const items = [
  { icon: Award, title: "Expertise de Alta Performance", desc: "Senioridade aplicada a vendas complexas e à gestão comercial B2B." },
  { icon: Workflow, title: "Estratégia Conectada à Execução", desc: "Estratégia transformada em processos, gestão e ação comercial." },
  { icon: Rocket, title: "Gestão e Execução de Vendas", desc: "Assumimos a gestão da equipe, as vendas consultivas ou ambas." },
  { icon: Crosshair, title: "Foco no Core Business", desc: "Sua liderança focada no negócio, com a operação comercial em movimento." },
  { icon: Database, title: "Inteligência Orientada por Dados", desc: "Mercado, CRM e pipeline orientando decisões e prioridades." },
  { icon: LineChart, title: "Maior Previsibilidade Comercial", desc: "Mais visibilidade sobre pipeline, conversão e forecast." },
];

export function WhyUs() {
  return (
    <section id="por-que" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Diferenciais</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Por que a <span className="text-accent-grad">Gi.Ga</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Experiência executiva, método e capacidade de execução para fortalecer operações comerciais B2B.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it) => (
            <div key={it.title} className="reveal bg-surface p-8 hover:bg-secondary/60 transition group">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <it.icon className="size-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <h3 className="mt-5 text-xl font-bold leading-snug">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
