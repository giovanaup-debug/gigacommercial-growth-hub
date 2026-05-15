import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Solutions } from "@/components/site/Solutions";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Results } from "@/components/site/Results";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gi.ga | Inteligência Comercial — Vendas B2B previsíveis" },
      {
        name: "description",
        content:
          "Estruturação de funil, prospecção Outbound e inteligência de dados para vendas B2B de alta complexidade. +30 anos de experiência comercial.",
      },
      { property: "og:title", content: "Gi.ga | Inteligência Comercial" },
      {
        property: "og:description",
        content: "Previsibilidade e controle total do seu funil de vendas B2B.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <WhyUs />
        <About />
        <Results />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
