import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Para quais empresas a Gi.Ga é indicada?",
    a: "Para PMEs B2B de tecnologia e serviços já estabelecidas, com oferta validada, histórico de vendas e capacidade de entrega, que buscam estruturar, fortalecer ou expandir sua operação comercial.",
  },
  {
    q: "A Gi.Ga apenas estrutura a operação ou também assume as vendas?",
    a: "Além de planejar e estruturar, a Gi.Ga pode assumir a gestão da equipe comercial, a execução de vendas consultivas ou ambas as frentes.",
  },
  {
    q: "Em quais tipos de venda a Gi.Ga pode assumir a execução comercial?",
    a: "Essa atuação é especialmente aderente a PMEs que vendem para empresas de médio e grande porte ou contas Enterprise, com soluções de maior valor e negociações consultivas que exigem senioridade comercial.",
  },
  {
    q: "Como é definida a atuação da Gi.Ga?",
    a: "O trabalho começa com imersão e diagnóstico. A partir dessa leitura, as frentes são combinadas conforme o estágio, os desafios e os objetivos da empresa.",
  },
  {
    q: "A Gi.Ga trabalha com a equipe comercial existente?",
    a: "Sim. A Gi.Ga pode estruturar e desenvolver o time, assumir sua gestão ou preparar a operação para uma transição assistida.",
  },
  {
    q: "Como a Gi.Ga contribui para aumentar a previsibilidade comercial?",
    a: "Por meio de processos, CRM, indicadores e rotinas de gestão que ampliam a visibilidade sobre pipeline, conversão e previsão de vendas.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="duvidas" className="py-24 sm:py-32 bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Dúvidas frequentes</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Entenda como a <span className="text-accent-grad">Gi.Ga</span> pode atuar na sua operação comercial
          </h2>
        </div>

        <div className="mt-14 max-w-4xl divide-y divide-border rounded-3xl border border-border bg-surface">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal">
                <h3>
                  <button
                    type="button"
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 text-left px-6 py-5 sm:px-8 sm:py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-3xl"
                  >
                    <span className="text-base sm:text-lg font-semibold leading-snug">{f.q}</span>
                    <Plus
                      aria-hidden="true"
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  hidden={!isOpen}
                  className="px-6 pb-6 sm:px-8 sm:pb-7 -mt-1"
                >
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
