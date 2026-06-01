# Lumi People

Sitio institucional de Lumi People desarrollado con Next.js 14 y TypeScript. Es una web corporativa estatica con contenido institucional, blog en MDX, vacantes publicadas desde codigo y formularios externos para contacto y postulaciones.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- MDX con `next-mdx-remote`

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Comandos

```bash
npm install
npm run dev
npm run build
npm run start
```

## Estructura

- `src/app`: rutas, layout global, metadata routes y paginas
- `src/components`: componentes de UI e institucionales
- `src/lib/site.ts`: fuente de verdad para dominio, marca, redes, formularios y Analytics
- `src/lib/vacancies.ts`: vacantes publicadas manualmente con vigencia
- `src/lib/posts.ts`: lectura y validacion de posts MDX
- `blogposts`: articulos del blog
- `public`: assets estaticos
- `docs/handoff.md`: checklist operativo de transferencia

## Contenido

### Editar blog

Los articulos viven en `blogposts/*.mdx`.

Frontmatter obligatorio:

```md
---
title: "Titulo"
date: "2024-01-31"
description: "Resumen del articulo"
imageUrl: "/imagen.webp"
tags:
  - empleo
  - rrhh
---
```

Si falta alguno de esos campos, `src/lib/posts.ts` descarta el articulo y registra el error.

### Editar vacantes

Las vacantes viven en `src/lib/vacancies.ts`.

Cada registro define:

- `title`
- `location`
- `description`
- `applyUrl`
- `publishedAt`
- `expiresAt` opcional

Si `expiresAt` ya vencio, la vacante no se publica en `/vacantes`.

## SEO y metadata

- `src/app/sitemap.ts` genera el sitemap desde rutas publicas y articulos MDX.
- `src/app/robots.ts` expone una sola sitemap canonical.
- `src/lib/seo.ts` centraliza metadata base de paginas.
- `src/app/articulo/[postId]/page.tsx` genera metadata y schema `Article` por post.

## Operacion

- Dominio canonico: `https://www.lumipeoplearg.com`
- Deploy esperado: Vercel
- Analytics: GA4 `G-L4FMM9C2Q9`
- Formularios:
  - Cotizacion: `https://forms.gle/RNC5Ez2DrXbjcqsW6`
  - Vacantes/CV: `https://forms.gle/LWCkjmPSSLx9ZtWa7`

## Variables de entorno

Actualmente no hay variables de entorno requeridas para levantar el sitio.

## Observaciones

- El repo conserva `package-lock.json` y `pnpm-lock.yaml`. Si se decide estandarizar el gestor, conviene dejar uno solo.
- No hay CI configurado en esta version. Como mejora futura, alcanza con una verificacion minima de instalacion y typecheck en GitHub Actions.
