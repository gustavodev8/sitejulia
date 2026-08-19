import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile } from "@/data/links";

const niches = ["01 / Fashion", "02 / Beauty", "03 / Lifestyle"];
const headline = ["Minha vida,", "meus looks", "e tudo que eu amo."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yWords = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-start overflow-hidden pt-24 md:justify-end"
    >
      {/* background typography */}
      <motion.div
        style={{ y: yWords }}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden"
      >
        <span className="absolute -left-4 top-[14%] font-display text-[22vw] leading-none text-foreground/[0.05] md:text-[13vw]">
          JULIA
        </span>
        <span className="absolute -right-6 top-[36%] font-display text-[18vw] leading-none text-foreground/[0.05] md:text-[10vw]">
          CREATOR
        </span>
        <span className="absolute -left-8 bottom-[16%] font-display text-[20vw] leading-none text-foreground/[0.04] md:text-[11vw]">
          LIFESTYLE
        </span>
      </motion.div>

      <motion.img
        style={{ y: yPhoto }}
        src="/images/profile.png"
        alt="Julia Moraes, criadora de conteúdo de moda e beleza"
        width={1024}
        height={1536}
        className="hero-photo pointer-events-none absolute left-0 top-24 z-[1] h-[30svh] w-full max-w-none object-cover object-[center_24%] sm:right-[-8%] sm:top-auto sm:bottom-0 sm:left-auto sm:h-[46svh] sm:w-auto sm:max-w-[72%] sm:object-contain sm:object-bottom md:right-[4%] md:top-auto md:h-[86svh] md:max-w-none"
      />

      <div className="relative z-[2] mx-auto mt-[30svh] w-full max-w-6xl bg-background px-5 pb-12 pt-7 sm:mt-0 sm:bg-transparent sm:pb-[40svh] sm:pt-10 md:px-10 md:pb-16 md:pt-0">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="label-xs flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground"
          >
            <span className="w-full text-foreground md:w-auto">{profile.name}</span>
            {niches.map((n) => (
              <span key={n} className="whitespace-nowrap">
                {n}
              </span>
            ))}
          </motion.div>

          <div className="rule-line my-5" />

          <h1 className="font-display text-[clamp(2.75rem,11vw,4.5rem)] uppercase leading-[0.94] tracking-[-0.03em] md:text-[6.4vw]">
            {headline.map((line, i) => (
              <motion.span key={line} variants={fadeUp} className="block">
                {i === 2 ? (
                  <>
                    e tudo que eu{" "}
                    <em className="font-serif font-normal italic text-accent">amo.</em>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-sm text-sm text-muted-foreground">
            {profile.role}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 1, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};
