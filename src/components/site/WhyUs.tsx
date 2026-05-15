import { Gauge, Award, Rocket, Database, Crosshair, LineChart } from "lucide-react";

const items = [
  { icon: Gauge, title: "Eficiência Operacional", desc: "Redução imediata de custos fixos e otimização de recursos através de uma estrutura enxuta." },
  { icon: Award, title: "Expertise de Alta Performance", desc: "Acesso imediato a especialistas com histórico comprovado em vendas complexas e negociações." },
  { icon: Rocket, title: "Escalabilidade Acelerada", desc: "Implementação de processos replicáveis que permitem aumentar o volume sem perder qualidade." },
  { icon: Database, title: "Inteligência de Dados", desc: "Transformação de informações em oportunidades, identificando nichos lucrativos e assertivos." },
  { icon: Crosshair, title: "Foco no Core Business", desc: "Sua empresa foca na excelência da entrega enquanto nós garantimos a tração comercial." },
  { icon: LineChart, title: "Processos Previsíveis", desc: "Saia da dependência da sorte. Tenha controle total sobre seu funil de vendas e metas." },
];

export function WhyUs() {
  return (
    <section id="por-que" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Diferenciais</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Por que a <span className="text-accent-grad">Gi.Ga</span> | Inteligência Comercial?
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((it) => (
            <div key={it.title} className="reveal bg-surface p-8 hover:bg-secondary/60 transition group">
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                <it.icon className="size-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
