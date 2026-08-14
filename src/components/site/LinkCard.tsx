import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { LinkCardItem } from "@/data/links";

export function LinkCard({ item }: { item: LinkCardItem }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative block border-t border-border py-7 transition-colors hover:bg-foreground hover:text-background"
    >
      <div className="flex items-start justify-between gap-6 px-1 md:px-4">
        <div className="flex gap-4 md:gap-8">
          <span className="label-xs pt-2 text-accent">{item.index}</span>
          <div>
            <h3 className="font-display text-3xl uppercase leading-[0.95] tracking-tight md:text-5xl">
              {item.title}
            </h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground transition-colors group-hover:text-background/60">
              {item.description}
            </p>
          </div>
        </div>
        <ArrowUpRight
          className="mt-1 size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 md:size-8"
          strokeWidth={1.25}
        />
      </div>
    </motion.a>
  );
}
