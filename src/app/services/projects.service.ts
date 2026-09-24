import { Injectable } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.model';
import { PROJECTS } from '../data/projects.data';

/**
 * Provee los proyectos del portafolio desde `projects.data.ts`.
 */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  /** Todos los proyectos, del más reciente al más antiguo. */
  getProjects(): Project[] {
    return [...PROJECTS].sort((a, b) => b.year - a.year);
  }

  /** Proyectos de una categoría (pestaña), del más reciente al más antiguo. */
  getByCategory(category: ProjectCategory): Project[] {
    return this.getProjects().filter((p) => p.category === category);
  }
}
