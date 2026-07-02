import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SOCIALS } from '../../data/socials';
import { ScrollService } from '../../services/scroll.service';

/**
 * Pie de página: identidad, navegación rápida, links sociales y créditos.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly scrollService = inject(ScrollService);

  readonly socials = SOCIALS;
  readonly currentYear = new Date().getFullYear();

  readonly navLinks = [
    { label: 'Sobre mí', target: 'presentation-first-container' },
    { label: 'Proyectos', target: 'presentation-second-container' },
    { label: 'Contacto', target: 'presentation-third-container' },
  ];

  navigate(id: string): void {
    this.scrollService.scrollTo(id);
  }
}
