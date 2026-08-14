# Julia's Edit

Crie uma landing page premium mobile-first para ser utilizada como Link in Bio

de uma influencer feminina do Instagram.

A página deve ter inspiração estrutural em sites editoriais modernos e portfolios

brutalistas, mas não copie nenhum site existente literalmente.

OBJETIVO

Criar uma página de marca pessoal muito mais sofisticada que um Linktree tradicional,

com foco em:

- Instagram

- TikTok

- YouTube

- produtos favoritos

- looks

- cupons

- contato comercial

- publicidade e collabs

PERSONAGEM

Nome temporário: Julia Moraes

Profissão:

Influencer e criadora de conteúdo.

Nichos:

Fashion

Beauty

Lifestyle

ESTILO VISUAL

Crie uma estética editorial premium inspirada em revistas de moda.

Características:

- layout minimalista

- tipografia muito grande

- títulos em uppercase

- fotografia da influencer como elemento principal

- grandes blocos de conteúdo

- bastante espaço em branco

- grid editorial

- linhas finas

- números 01, 02, 03 nas seções

- setas diagonais ↗

- aparência sofisticada

- evitar aparência de template

- evitar estilo Linktree tradicional

- evitar excesso de bordas arredondadas

- evitar glassmorphism exagerado

PALETA

Background:

#F4F0EA

Texto:

#151515

Cor de destaque:

#D94F70

Cinza:

#9D9994

TIPOGRAFIA

Utilize Google Fonts.

Títulos:

Archivo Black ou fonte semelhante.

Textos:

Inter ou Manrope.

Utilize Playfair Display em algumas palavras estratégicas para gerar

contraste editorial.

HERO

Criar um hero ocupando aproximadamente 100svh.

No topo:

JM

e menu:

INÍCIO

LINKS

SOBRE

CONTATO

Adicionar pequeno texto:

JULIA MORAES

01 / FASHION

02 / BEAUTY

03 / LIFESTYLE

Headline grande:

MINHA VIDA,

MEUS LOOKS

E TUDO QUE EU AMO.

Subheadline:

Criadora de conteúdo • Fashion • Beauty • Lifestyle

Adicionar fotografia PNG da influencer com fundo transparente.

A fotografia deve integrar-se ao layout e não simplesmente aparecer dentro de um card.

Adicionar no background palavras tipográficas gigantes como:

JULIA

CREATOR

LIFESTYLE

LINKS

Criar grandes cards editoriais.

CARD 01

INSTAGRAM

"Acompanhe meu dia a dia"

Adicionar seta ↗.

CARD 02

MEUS FAVORITOS

"Looks, beleza e produtos que estou usando."

CARD 03

SHOP MY LOOK

"Encontre as peças que aparecem nos meus conteúdos."

CARD 04

TIKTOK

"Vídeos, trends e bastidores."

CARD 05

YOUTUBE

"Vlogs e conteúdos completos."

CARD 06

CUPONS

"Todos os meus cupons em um só lugar."

PUBLICIDADE

Criar uma seção maior:

COLLABS

& PUBLICIDADE

Texto:

"Quer apresentar sua marca para minha comunidade?"

Botão:

FALE COMIGO ↗

O botão deverá futuramente poder direcionar para WhatsApp ou e-mail.

SOCIAL

Adicionar links:

INSTAGRAM

TIKTOK

YOUTUBE

PINTEREST

FOOTER

JM

JULIA MORAES

Instagram

TikTok

YouTube

© 2026 Julia Moraes

INTERAÇÕES

Utilize Framer Motion.

Criar:

- animação de entrada do hero

- reveal dos textos

- stagger animation

- parallax muito sutil

- cards aparecendo ao scroll

- hover das setas

- hover editorial nos cards

- zoom sutil nas imagens

- transições suaves

Não exagere nas animações.

MOBILE

Essa página será acessada principalmente através da bio do Instagram.

Portanto desenvolva MOBILE FIRST.

Priorizar:

390px

393px

430px

Garantir excelente visual em iPhone e Android.

No desktop, criar uma adaptação elegante do layout utilizando grid.

TECNOLOGIAS

Next.js

React

TypeScript

Tailwind CSS

Framer Motion

Lucide React

ORGANIZAÇÃO

Criar componentes:

Navbar

Hero

SocialLinks

LinkCard

FeaturedCard

CollabsSection

Footer

Criar os dados dos links em um array separado para facilitar futuras alterações.

Criar:

src/data/links.ts

para que Instagram, TikTok, YouTube, WhatsApp e demais URLs possam ser

alterados facilmente.

IMAGENS

Utilizar placeholders inicialmente para:

/public/images/profile.png

/public/images/look-01.jpg

/public/images/look-02.jpg

Preparar o layout para substituirmos posteriormente pelas fotos reais da influencer.

QUALIDADE

O resultado deve parecer um projeto feito por uma agência de design premium,

e não um template pronto.

A interface deve transmitir:

feminilidade

personalidade

sofisticação

moda

exclusividade

modernidade.

Entregue o projeto completo e funcional.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/605c6383-6a9a-4fa0-aa2b-8286b1d265b3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
