import { useState } from "react";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  company: z.string().trim().min(2, "Informe a empresa").max(120),
  message: z.string().trim().min(10, "Conte um pouco mais").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const map: Record<string, string> = {};
      result.error.issues.forEach((i) => (map[i.path[0] as string] = i.message));
      setErrors(map);
      return;
    }
    setErrors({});
    setLoading(true);
    // Build mailto fallback (no backend)
    const body = encodeURIComponent(
      `Nome: ${result.data.name}\nEmpresa: ${result.data.company}\nE-mail: ${result.data.email}\n\n${result.data.message}`
    );
    window.location.href = `mailto:contato@gigacomercial.com.br?subject=${encodeURIComponent(
      "Novo contato — site Gi.ga"
    )}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  }

  return (
    <section id="contato" className="py-24 sm:py-32 border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-accent">Vamos conversar</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold text-gradient">
            Pronto para tornar suas vendas previsíveis?
          </h2>
          <p className="mt-5 text-muted-foreground">
            Conte sobre seu desafio comercial. Respondemos em até 1 dia útil.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal mt-12 rounded-3xl border border-border bg-surface/70 backdrop-blur p-6 sm:p-10 grid sm:grid-cols-2 gap-5"
        >
          <Field name="name" label="Nome" placeholder="Seu nome" error={errors.name} />
          <Field name="company" label="Empresa" placeholder="Nome da empresa" error={errors.company} />
          <Field
            name="email"
            label="E-mail corporativo"
            placeholder="voce@empresa.com"
            type="email"
            className="sm:col-span-2"
            error={errors.email}
          />
          <div className="sm:col-span-2">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Como podemos ajudar?
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Conte sobre seu cenário comercial atual..."
              className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition resize-none"
            />
            {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
          </div>

          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              Ou escreva para{" "}
              <a className="text-accent hover:underline" href="mailto:contato@gigacomercial.com.br">
                contato@gigacomercial.com.br
              </a>
            </p>
            <button
              type="submit"
              disabled={loading || sent}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="size-4" /> Enviado
                </>
              ) : (
                <>
                  {loading ? "Enviando..." : "Enviar mensagem"}
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  className = "",
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
  error?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
