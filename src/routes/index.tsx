import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LinkCard } from "@/components/site/LinkCard";
import { FeaturedCard } from "@/components/site/FeaturedCard";
import { SocialLinks } from "@/components/site/SocialLinks";
import { CollabsSection } from "@/components/site/CollabsSection";
import { Footer } from "@/components/site/Footer";
import { linkCards, profile } from "@/data/links";

const title = "Julia Moraes — Fashion, Beauty & Lifestyle";
const description =
  "Links oficiais de Julia Moraes: Instagram, TikTok, YouTube, favoritos, looks, cupons e contato para collabs e publicidade.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <section id="links" className="mx-auto w-full max-w-6xl px-5 pt-20 md:px-10 md:pt-32">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-[11vw] uppercase leading-[0.85] tracking-[-0.03em] md:text-[5.5vw]">
            Links
          </h2>
          <p className="label-xs pb-2 text-muted-foreground">Selecionados por mim</p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <FeaturedCard
            index="01"
            title="Instagram"
            description="Acompanhe meu dia a dia"
            href={linkCards[0]!.href}
            image="/images/look-01.jpg"
            alt="Look editorial de rua em tons neutros"
          />
          <FeaturedCard
            index="02"
            title="Meus favoritos"
            description="Looks, beleza e produtos que estou usando."
            href={linkCards[1]!.href}
            image="/images/look-02.jpg"
            alt="Produtos de beleza e acessórios dourados sobre tecido bege"
          />
        </div>

        <div className="mt-16">
          {linkCards.slice(2).map((item) => (
            <LinkCard key={item.index} item={item} />
          ))}
          <div className="rule-line" />
        </div>
      </section>

      <section id="sobre" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="label-xs text-muted-foreground md:col-span-3">03 / Sobre</p>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-2xl leading-[1.3] md:col-span-9 md:text-4xl"
          >
            Sou {profile.name}. Traduzo moda, beleza e rotina em conteúdo{" "}
            <span className="text-accent">honesto</span> — do look do dia às marcas que realmente
            fazem parte da minha vida.
          </motion.p>
        </div>
      </section>

      <SocialLinks />
      <CollabsSection />
      <Footer />
    </main>
  );
}
