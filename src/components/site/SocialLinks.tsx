import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/links";

export function SocialLinks() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-10 md:py-24">
      <p className="label-xs text-muted-foreground">Social</p>
      <div className="mt-6 grid grid-cols-2 gap-x-6 md:grid-cols-4">
        {socials.map((s, i) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-center justify-between border-t border-border py-4"
          >
            <span className="label-xs transition-colors group-hover:text-accent">{s.label}</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
}
