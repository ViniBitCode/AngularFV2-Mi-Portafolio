import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { PROJECT_CATEGORIES, ProjectCategory } from '../../../models/project.model';
import { LanguageService } from '../../../services/language.service';
import { ProjectsService } from '../../../services/projects.service';
import { ProjectCard } from '../../project-card/project-card';

/**
 * Sección "Proyectos": pestañas por categoría (Básicos / Facultad / Backend)
 * con una grilla responsive de tarjetas. Los datos vienen de ProjectsService;
 * la pestaña activa es un signal y las etiquetas se traducen según el idioma.
 *
 * Si una categoría no tiene proyectos (p. ej. Backend al principio) se muestra
 * un estado "Próximamente / Loading..." en lugar de la grilla.
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

  readonly ui = this.langService.ui;

  readonly categories = PROJECT_CATEGORIES;
  readonly activeCategory = signal<ProjectCategory>('basicos');

  /** Cantidad de proyectos por pestaña (para el contador del tab). */
  readonly counts: Record<ProjectCategory, number> = Object.fromEntries(
    PROJECT_CATEGORIES.map((c) => [c, this.projectsService.getByCategory(c).length]),
  ) as Record<ProjectCategory, number>;

  readonly visibleProjects = computed(() =>
    this.projectsService.getByCategory(this.activeCategory()),
  );

  select(category: ProjectCategory): void {
    this.activeCategory.set(category);
  }

  /** Navegación con teclado según el patrón WAI-ARIA para tabs. */
  onTabKeydown(event: KeyboardEvent): void {
    const current = this.categories.indexOf(this.activeCategory());
    const last = this.categories.length - 1;
    let next: number | null = null;

    switch (event.key) {
      case 'ArrowRight':
        next = current === last ? 0 : current + 1;
        break;
      case 'ArrowLeft':
        next = current === 0 ? last : current - 1;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = last;
        break;
    }

    if (next === null) return;
    event.preventDefault();

    const category = this.categories[next];
    this.select(category);
    document.getElementById(`tab-${category}`)?.focus();
  }
}
