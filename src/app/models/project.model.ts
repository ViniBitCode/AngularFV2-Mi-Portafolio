import { LocalizedText } from '../i18n/lang';

/**
 * Categorías con las que se agrupan y filtran los proyectos del portafolio.
 * Son claves internas: su etiqueta visible (y traducción) vive en i18n/ui.ts.
 */
export type ProjectCategory =
  | 'Web'
  | 'Juegos'
  | 'Backend'
  | 'Fullstack'
  | 'Académico';

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
  category: ProjectCategory;
  year: number;
  techs: Tech[];
  image: string | null;
  githubUrl: string;
  liveUrl?: string;
  /** Destaca el proyecto (por ahora sólo semántico, para futuros usos). */
  featured?: boolean;
}
