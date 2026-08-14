import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/links";

export function CollabsSection() {
  return (
    <section id="contato" className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label-xs text-background/50">04 / Publicidade</p>
          <h2 className="mt-6 font-display text-[14vw] uppercase leading-[0.85] tracking-[-0.03em] md:text-[8vw]">
            Collabs
            <br />
            <em className="font-serif font-normal italic text-accent">&</em> publicidade
          </h2>
          <p className="mt-8 max-w-md text-sm text-background/60">
            Quer apresentar sua marca para minha comunidade?
          </p>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-3 border border-background/30 px-7 py-4 transition-colors hover:border-accent hover:bg-accent"
          >
            <span className="label-xs">Fale comigo</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
