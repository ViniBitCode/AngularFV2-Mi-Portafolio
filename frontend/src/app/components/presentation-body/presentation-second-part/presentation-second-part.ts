import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { GITHUB_PROFILE_URL } from '../../../data/socials';
import { ProjectCategory } from '../../../models/project.model';
import { ProjectsService } from '../../../services/projects.service';
import { ProjectCard } from '../../project-card/project-card';

type Filter = 'Todos' | ProjectCategory;

/**
 * Sección "Proyectos": grilla responsive de tarjetas con filtro por categoría.
 * Los datos vienen de ProjectsService; el filtrado es reactivo vía signals.
 */
@Component({
  selector: 'app-presentation-second-part',
  imports: [ProjectCard],
  templateUrl: './presentation-second-part.html',
  styleUrl: './presentation-second-part.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationSecondPart {
  private readonly projectsService = inject(ProjectsService);

  readonly githubUrl = GITHUB_PROFILE_URL;

  private readonly projects = this.projectsService.getProjects();

  readonly filters: Filter[] = ['Todos', ...this.projectsService.getCategories()];
  readonly activeFilter = signal<Filter>('Todos');

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'Todos'
      ? this.projects
      : this.projects.filter((p) => p.category === filter);
  });

  setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }
}
