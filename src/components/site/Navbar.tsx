import { motion } from "motion/react";
import { navItems, profile } from "@/data/links";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-[2px]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#inicio" className="font-display text-lg leading-none tracking-tight">
          {profile.initials}
        </a>
        <nav className="flex items-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label-xs text-foreground/70 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="rule-line mx-5 md:mx-10" />
    </motion.header>
  );
}
