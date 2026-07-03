import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { GITHUB_PROFILE_URL } from '../../../data/socials';
import { ProjectCategory } from '../../../models/project.model';
import { LanguageService } from '../../../services/language.service';
import { ProjectsService } from '../../../services/projects.service';
import { ProjectCard } from '../../project-card/project-card';

type Filter = 'all' | ProjectCategory;

/**
 * Sección "Proyectos": grilla responsive de tarjetas con filtro por categoría.
 * Los datos vienen de ProjectsService; el filtrado es reactivo vía signals y
 * las etiquetas de los filtros se traducen según el idioma activo.
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
  private readonly langService = inject(LanguageService);

  readonly githubUrl = GITHUB_PROFILE_URL;
  readonly ui = this.langService.ui;

  private readonly projects = this.projectsService.getProjects();

  readonly filters: Filter[] = ['all', ...this.projectsService.getCategories()];
  readonly activeFilter = signal<Filter>('all');

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all'
      ? this.projects
      : this.projects.filter((p) => p.category === filter);
  });

  setFilter(filter: Filter): void {
    this.activeFilter.set(filter);
  }

  filterLabel(filter: Filter): string {
    return filter === 'all'
      ? this.ui().projects.filterAll
      : this.ui().projects.categories[filter];
  }
}
