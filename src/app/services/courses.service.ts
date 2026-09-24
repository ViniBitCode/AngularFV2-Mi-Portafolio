import { Injectable } from '@angular/core';
import { COURSES } from '../data/courses.data';
import { Course } from '../models/course.model';
import { Lang } from '../i18n/lang';

/** Carpeta pública donde viven los PNG de los certificados. */
export const CERTIFICATES_DIR = 'certificados';

/**
 * Provee los cursos / certificados desde `courses.data.ts`.
 */
@Injectable({ providedIn: 'root' })
export class CoursesService {
  /** Todos los cursos, del más reciente al más antiguo. */
  getCourses(): Course[] {
    return [...COURSES].sort((a, b) => b.date.localeCompare(a.date));
  }

  /** Ruta pública de la imagen del certificado. */
  imageUrl(course: Course): string {
    return `${CERTIFICATES_DIR}/${course.image}`;
  }

  /**
   * Formatea `YYYY-MM` como "marzo de 2025" / "March 2025" según idioma.
   * Si sólo hay año (`YYYY`), lo devuelve tal cual.
   */
  formatDate(date: string, lang: Lang): string {
    const [year, month] = date.split('-').map(Number);
    if (!year) return date;
    if (!month) return String(year);

    const locale = lang === 'es' ? 'es-AR' : 'en-US';
    const formatted = new Date(year, month - 1, 1).toLocaleDateString(locale, {
      month: 'long',
      year: 'numeric',
    });
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
}
