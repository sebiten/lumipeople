# Handoff tecnico

## Resumen

El proyecto es una web institucional estatica en Next.js 14 con TypeScript. No tiene backend propio, base de datos ni integraciones transaccionales. La continuidad operativa depende sobre todo de accesos, contenido y cuentas externas.

## Accesos a transferir

- Dominio y DNS de `lumipeoplearg.com`
- Proyecto de deploy en Vercel
- Repositorio Git
- Google Analytics 4 `G-L4FMM9C2Q9`
- Google Forms usados para cotizacion y postulacion
- Redes sociales y cuentas administradoras

## Mantenimiento habitual

- Datos institucionales y accesos reutilizados: `src/lib/site.ts`
- Vacantes y vigencia: `src/lib/vacancies.ts`
- Articulos del blog: `blogposts/*.mdx`
- Sitemap y robots: `src/app/sitemap.ts` y `src/app/robots.ts`

## Checklist de entrega

- Confirmar titularidad y acceso administrador del dominio
- Confirmar acceso administrador al proyecto en Vercel
- Confirmar acceso administrador al repositorio
- Confirmar acceso a GA4 y propiedad correcta
- Confirmar acceso a cada Google Form vigente
- Confirmar acceso a Facebook, Instagram y LinkedIn
- Entregar este README y este handoff junto con el repo

## Variables de entorno

No hay variables de entorno requeridas al momento de esta entrega.

## Mejoras futuras sugeridas

- Agregar CI basico con instalacion y typecheck
- Definir un unico gestor de paquetes y dejar un solo lockfile
- Externalizar vacantes si el volumen crece o si hace falta edicion no tecnica
