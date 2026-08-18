import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, profile } from "@/data/links";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
        <a
          href="#inicio"
          onClick={() => setMenuOpen(false)}
          className="font-display text-lg leading-none tracking-tight"
        >
          {profile.initials}
        </a>
        <nav className="hidden items-center gap-4 md:flex md:gap-8">
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
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="grid size-10 place-items-center text-foreground md:hidden"
        >
          {menuOpen ? <X size={21} strokeWidth={1.5} /> : <Menu size={21} strokeWidth={1.5} />}
        </button>
      </div>
      <div className="rule-line mx-5 md:mx-10" />
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-5 pb-5 pt-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.25 }}
                  className="flex items-center justify-between border-b border-border py-4 text-sm uppercase tracking-[0.18em] last:border-0"
                >
                  {item.label}
                  <span className="text-accent">↗</span>
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
