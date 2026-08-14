export const profile = {
  name: "Julia Moraes",
  initials: "JM",
  role: "Criadora de conteúdo • Fashion • Beauty • Lifestyle",
  whatsapp: "https://wa.me/5511999999999",
  email: "contato@juliamoraes.com",
};

export type LinkCardItem = {
  index: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

export const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "Pinterest", href: "https://pinterest.com/" },
];

export const linkCards: LinkCardItem[] = [
  {
    index: "01",
    title: "Instagram",
    description: "Acompanhe meu dia a dia",
    href: "https://instagram.com/",
    featured: true,
  },
  {
    index: "02",
    title: "Meus favoritos",
    description: "Looks, beleza e produtos que estou usando.",
    href: "https://instagram.com/",
    featured: true,
  },
  {
    index: "03",
    title: "Shop my look",
    description: "Encontre as peças que aparecem nos meus conteúdos.",
    href: "https://instagram.com/",
  },
  {
    index: "04",
    title: "TikTok",
    description: "Vídeos, trends e bastidores.",
    href: "https://tiktok.com/",
  },
  {
    index: "05",
    title: "YouTube",
    description: "Vlogs e conteúdos completos.",
    href: "https://youtube.com/",
  },
  {
    index: "06",
    title: "Cupons",
    description: "Todos os meus cupons em um só lugar.",
    href: "https://instagram.com/",
  },
];

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Links", href: "#links" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];
