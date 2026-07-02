import { Injectable } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.model';
import { PROJECTS } from '../data/projects.data';

/**
 * Provee los proyectos del portafolio. Hoy los sirve desde un archivo local
 * (`projects.data.ts`); si en el futuro se expone el backend Spring Boot,
 * sólo hay que cambiar la implementación de estos métodos por llamadas HTTP.
 */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  /** Todos los proyectos, del más reciente al más antiguo. */
  getProjects(): Project[] {
    return [...PROJECTS].sort((a, b) => b.year - a.year);
  }

  /** Categorías presentes, en el orden en que aparecen los proyectos. */
  getCategories(): ProjectCategory[] {
    return [...new Set(PROJECTS.map((p) => p.category))];
  }
}
