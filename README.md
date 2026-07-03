# Mi Portafolio

Portafolio personal de **Facundo Vinitzca**, hecho con **Angular 21 + SSR**.

- 🖥️ Terminal animada con efecto typewriter en la presentación
- 🗂️ Grilla de proyectos con filtro por categoría (signals)
- 🌗 Tema claro / oscuro
- 🌐 Español / Inglés
- ✉️ Formulario de contacto con EmailJS

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
├── components/   # header, hero, proyectos, contacto, footer, project-card
├── data/         # projects.data.ts (fuente de verdad), techs, socials
├── models/       # interfaces tipadas
└── services/     # proyectos, mail, scroll, tema, idioma
```

Para agregar un proyecto nuevo: sumar un objeto en `src/app/data/projects.data.ts`
y (opcional) su captura en `public/images`.
