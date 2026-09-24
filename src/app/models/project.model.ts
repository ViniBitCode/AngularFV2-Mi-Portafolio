import { LocalizedText } from '../i18n/lang';

/**
 * Categoría principal de un proyecto: define en qué pestaña de la sección
 * Proyectos aparece.
 *
 * - `basicos`:  proyectos personales / de aprendizaje.
 * - `facultad`: trabajos prácticos de la UTN FRBA.
 * - `backend`:  proyectos de backend (arranca vacía, se va completando).
 */
export type ProjectCategory = 'basicos' | 'facultad' | 'backend';

/** Orden en el que se muestran las pestañas. */
export const PROJECT_CATEGORIES: ProjectCategory[] = ['basicos', 'facultad', 'backend'];

/**
 * Etiqueta temática que se muestra como chip sobre la captura de la tarjeta.
 * Son claves internas: su texto visible (y traducción) vive en i18n/ui.ts.
 */
export type ProjectTag = 'Web' | 'Juegos' | 'Backend' | 'Fullstack' | 'Académico';

/**
 * Una tecnología usada en un proyecto. Se muestra como badge en la tarjeta.
 * `icon` es opcional: si existe, apunta a un SVG en `public/icons`.
 */
export interface Tech {
  name: string;
  icon?: string;
}

/**
 * Un proyecto del portafolio.
 *
 * `image` puede ser `null`: en ese caso la tarjeta muestra un placeholder
 * generado con el ícono de la tecnología principal (ver ProjectCard).
 */
export interface Project {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  /** Pestaña en la que aparece. */
  category: ProjectCategory;
  /** Chip temático de la tarjeta. */
  tag: ProjectTag;
  year: number;
  techs: Tech[];
  image: string | null;
  githubUrl: string;
  liveUrl?: string;
  /** Destaca el proyecto (por ahora sólo semántico, para futuros usos). */
  featured?: boolean;
}
