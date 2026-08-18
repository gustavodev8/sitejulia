import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function FeaturedCard({
  index,
  title,
  description,
  href,
  image,
  alt,
}: {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 1, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.985 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          width={900}
          height={1200}
          className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <span className="label-xs absolute left-4 top-4 text-background mix-blend-difference">
          {index}
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-t border-border pt-3">
        <div>
          <h3 className="font-display text-2xl uppercase leading-none tracking-tight md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{description}</p>
        </div>
        <ArrowUpRight
          className="size-6 shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          strokeWidth={1.25}
        />
      </div>
    </motion.a>
  );
}
