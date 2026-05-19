import { useState } from "react";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Mail, Instagram } from "lucide-react";

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
    const body = encodeURIComponent(
      `Nome: ${result.data.name}\nEmpresa: ${result.data.company}\nE-mail: ${result.data.email}\n\n${result.data.message}`
    );
    window.location.href = `mailto:contato@gigacomercial.com.br?subject=${encodeURIComponent(
      "Agendar Reunião — site Gi.Ga"
    )}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  }

  return (
    <section id="contato" className="py-24 sm:py-32 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-grid-soft" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 reveal">
          <span className="text-xs uppercase tracking-[0.2em] text-teal-soft font-semibold">Vamos conversar</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold leading-tight">
            Vamos construir juntos o futuro do seu <span className="text-accent-grad">negócio</span>?
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed">
            Agende sua Reunião e descubra os gargalos da sua expansão.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a href="mailto:contato@gigacomercial.com.br" className="flex items-center gap-3 text-white/90 hover:text-teal-soft transition">
              <Mail className="size-4" /> contato@gigacomercial.com.br
            </a>
            <a href="https://instagram.com/gigainteligencia" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/90 hover:text-teal-soft transition">
              <Instagram className="size-4" /> @gigainteligencia
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-10 grid sm:grid-cols-2 gap-5"
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
            <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">
              Como podemos ajudar?
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Conte sobre seu cenário comercial atual..."
              className="mt-2 w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-soft/40 focus:border-teal-soft transition resize-none"
            />
            {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
          </div>
          <div className="sm:col-span-2 flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading || sent}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-soft text-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition disabled:opacity-60"
            >
              {sent ? (
                <><CheckCircle2 className="size-4" /> Enviado</>
              ) : (
                <>{loading ? "Enviando..." : "Enviar mensagem"}<ArrowRight className="size-4 group-hover:translate-x-0.5 transition" /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  name, label, placeholder, type = "text", className = "", error,
}: { name: string; label: string; placeholder: string; type?: string; className?: string; error?: string }) {
  return (
    <div className={className}>
      <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/40 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-soft/40 focus:border-teal-soft transition"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
