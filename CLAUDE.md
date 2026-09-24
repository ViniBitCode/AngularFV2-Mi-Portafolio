# Mi Portafolio — Angular 21 + SSR

Portafolio personal de Facundo Vinitzca. Proyecto Angular en la raíz del repo
(no existe carpeta `frontend/`; el backend Spring Boot se eliminó a propósito).
Para el contexto completo e historia del proyecto, leer `context.md` (local,
gitignorado) si existe.

## Comandos

```bash
npm start                      # dev server (usar --port 4300: el 4200 suele estar ocupado)
npx ng serve --port 4300
npm run build                  # producción → dist/portafolio
npm run serve:ssr:portafolio   # sirve el build SSR (puerto 4000)
```

Verificar cambios contra el SSR (curl a localhost:4300) además del build.

## Reglas del repo

- **Commits**: SOLO cuando el usuario lo pide. Formato `#N - descripción`
  (N correlativo al último commit), en español, **sin líneas de co-author
  ni atribución de ninguna herramienta**.
- **Nunca exponer el correo del usuario en el front** (ni mailto, ni texto,
  ni en bundles): el contacto es vía formulario (Web3Forms). La casilla real
  vive solo en la configuración de Web3Forms.
- `src/environments/environment.ts` está **gitignorado** (contiene la access
  key de Web3Forms). La plantilla versionada es `environment.example.ts`.
  Nunca sacar el ignore ni commitear la key.
- `context.md` (raíz) también está gitignorado: mantenerlo actualizado al
  hacer cambios grandes, pero jamás subirlo.

## Arquitectura (respetar en cada cambio)

- **Standalone components + signals + OnPush**. Sin NgModules.
- **Datos**: `src/app/data/projects.data.ts` es la fuente de verdad de los
  proyectos (títulos/descripciones bilingües `LocalizedText`); techs en
  `techs.ts`, redes en `socials.ts`.
- **i18n es/en**: TODO texto visible sale del diccionario tipado
  `src/app/i18n/ui.ts` (`UiStrings` obliga a cargar ambos idiomas).
  Nada de strings hardcodeados en templates.
- **Temas**: tokens CSS en `src/styles.scss` (`:root` = oscuro default,
  `[data-theme='light']` = claro). Los componentes los consumen vía
  `src/styles/_variables.scss`. OJO: no usar `rgba(vars.$color-x, alpha)`
  (son `var()` de runtime, no compila); hay tokens dedicados para
  translúcidos. Todo cambio visual debe verse bien en ambos temas.
- La **terminal del hero es oscura en ambos temas a propósito** (colores
  fijos, identidad del sitio). No "arreglarla".
- Imágenes de proyectos en `public/images`; si un proyecto no tiene captura,
  `image: null` y la tarjeta genera placeholder con el ícono de la tech.
