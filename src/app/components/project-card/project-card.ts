import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';

/**
 * Tarjeta de un proyecto. Muestra la captura (o un placeholder con el ícono de
 * la tecnología principal si `image` es null), título y descripción en el
 * idioma activo, badges de tecnologías y links a GitHub y demo.
 */
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  private readonly langService = inject(LanguageService);

  readonly project = input.required<Project>();

  readonly lang = this.langService.lang;
  readonly ui = this.langService.ui;

  /** Ícono a mostrar en el placeholder cuando el proyecto no tiene captura. */
  readonly placeholderIcon = computed(
    () => this.project().techs.find((t) => t.icon)?.icon ?? null,
  );
}
