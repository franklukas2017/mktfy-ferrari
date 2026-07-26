# Mktfy Astro Landing Page

Este é o projeto Astro recriado com base no design "Ferrari-design-analysis".

## Como rodar o projeto localmente:

1. Abra seu terminal nesta pasta (`M:\astro-lp-mktfy\mktfy-astro`).
2. Execute `npm install` para instalar as dependências.
3. Copie as imagens da pasta raiz para dentro da pasta `public/` deste projeto (ex: `gerenciador-de-anuncios.jpg`, `roas_dashboard.jpg`, etc).
4. Execute `npm run dev` para iniciar o servidor de desenvolvimento.

## Cloudflare Pages

O projeto já está configurado para o Cloudflare Pages.
O formulário de contato está conectado a uma Cloudflare Function localizada em `functions/api/contact.ts`.

Para testar as functions localmente, você pode usar o Wrangler:
`npx wrangler pages dev dist` (após rodar `npm run build`).
