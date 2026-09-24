# Mi Portafolio

Portafolio personal de **Facundo Vinitzca**, hecho con **Angular 21 + SSR**.
Estética retro / arcade 8-bit: tipografía pixel, bordes duros, scanlines CRT.

- 🖥️ Terminal animada con efecto typewriter en la presentación
- 🗂️ Proyectos en tres pestañas: Básicos / Facultad / Backend (signals)
- 🎓 Sección Cursos con grilla de certificados y lightbox
- 🌗 Tema oscuro (arcade) / claro (cartucho)
- 🌐 Español / Inglés
- ✉️ Formulario de contacto (Web3Forms, con honeypot antispam)

## Desarrollo

```bash
npm install
npm start          # dev server en http://localhost:4200
```

## Build de producción

```bash
npm run build                 # genera dist/portafolio
npm run serve:ssr:portafolio  # sirve el build con SSR (puerto 4000)
```

## Estructura

```
src/app/
├── components/   # header, footer, hero, proyectos, cursos, contacto,
│                 # project-card, certificate-lightbox
├── data/         # projects.data.ts, courses.data.ts (fuentes de verdad), techs, socials
├── i18n/         # textos es/en
├── models/       # interfaces tipadas
└── services/     # proyectos, cursos, mail, scroll, tema, idioma
src/styles.scss   # TOKENS de diseño (colores, fuentes, espaciados) — tocar acá para ajustar el estilo
public/
├── certificados/ # PNG de los certificados (ver convención abajo)
├── images/       # capturas de proyectos
└── icons/        # íconos SVG de tecnologías
```

## Agregar un proyecto

Sumar un objeto en `src/app/data/projects.data.ts`. El campo `category` decide la
pestaña (`'basicos' | 'facultad' | 'backend'`) y `tag` el chip temático. Captura
opcional en `public/images` (si no hay, `image: null` genera un placeholder).

```ts
{
  id: 'springboot-inventario',
  title: { es: 'API de Inventario', en: 'Inventory API' },
  description: { es: 'API REST con...', en: 'REST API with...' },
  category: 'backend',
  tag: 'Backend',
  year: 2026,
  techs: [TECHS.java, TECHS.springBoot, TECHS.mysql, TECHS.docker],
  image: 'images/inventario.png',
  githubUrl: 'https://github.com/ViniBitCode/...',
}
```

## Agregar un curso / certificado

1. Copiar el PNG a `public/certificados/` con el nombre
   `YYYY-MM-institucion-nombre-del-curso.png` (minúsculas, sin espacios ni acentos).
2. Sumar una entrada en `src/app/data/courses.data.ts`:

```ts
{
  id: 'udemy-spring-boot-2025',
  name: 'Spring Boot desde cero',
  institution: 'Udemy',
  date: '2025-03', // YYYY-MM (o YYYY)
  image: '2025-03-udemy-spring-boot-desde-cero.png',
  credentialUrl: 'https://www.udemy.com/certificate/UC-xxxx', // opcional
}
```
