import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { WhyUs } from "@/components/site/WhyUs";
import { Methodology } from "@/components/site/Methodology";
import { Solutions } from "@/components/site/Solutions";
import { HowWeWork } from "@/components/site/HowWeWork";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gi.Ga Inteligência Comercial — Conectando estratégia, operação e crescimento" },
      {
        name: "description",
        content:
          "Transformamos sua força de vendas B2B com estratégia, previsibilidade e relacionamento de alto valor. +15 anos de experiência em vendas complexas.",
      },
      { property: "og:title", content: "Gi.Ga Inteligência Comercial" },
      {
        property: "og:description",
        content: "Conectando estratégia, operação e crescimento em vendas B2B.",
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
        <WhyUs />
        <Methodology />
        <Solutions />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
