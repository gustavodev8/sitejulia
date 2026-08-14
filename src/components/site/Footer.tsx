import { profile, socials } from "@/data/links";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 py-12 md:px-10 md:py-16">
      <div className="rule-line" />
      <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-5xl leading-none md:text-7xl">{profile.initials}</p>
          <p className="label-xs mt-3 text-muted-foreground">{profile.name}</p>
        </div>
        <div className="flex flex-col gap-2">
          {socials.slice(0, 3).map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="label-xs mt-12 text-muted-foreground">© 2026 {profile.name}</p>
    </footer>
  );
}
