import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../../models/project.model';

/**
 * Tarjeta de un proyecto. Muestra la captura (o un placeholder con el ícono de
 * la tecnología principal si `image` es null), título, descripción, badges de
 * tecnologías y links a GitHub y demo.
 */
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();

  /** Ícono a mostrar en el placeholder cuando el proyecto no tiene captura. */
  readonly placeholderIcon = computed(
    () => this.project().techs.find((t) => t.icon)?.icon ?? null,
  );
}
