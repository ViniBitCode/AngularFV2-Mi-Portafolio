/**
 * Un curso / certificado de la sección "Cursos".
 *
 * La imagen del certificado (PNG) vive en `public/certificados/` y acá se
 * referencia sólo por nombre de archivo. Convención sugerida:
 * `YYYY-MM-institucion-nombre-del-curso.png` (minúsculas, sin espacios ni
 * acentos), p. ej. `2025-03-udemy-spring-boot-desde-cero.png`.
 */
export interface Course {
  id: string;
  /** Nombre del curso tal como figura en el certificado. */
  name: string;
  /** Institución / plataforma que lo emitió. */
  institution: string;
  /**
   * Fecha de emisión en formato ISO: `YYYY-MM` (recomendado) o `YYYY`.
   * Se muestra formateada según el idioma activo ("marzo de 2025").
   */
  date: string;
  /** Nombre del archivo PNG dentro de `public/certificados/`. */
  image: string;
  /** Link de validación del certificado (opcional). */
  credentialUrl?: string;
}
