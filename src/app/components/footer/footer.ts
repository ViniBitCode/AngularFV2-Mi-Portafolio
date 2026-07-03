import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SOCIALS } from '../../data/socials';
import { LanguageService } from '../../services/language.service';
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
  private readonly langService = inject(LanguageService);

  readonly ui = this.langService.ui;
  readonly socials = SOCIALS;
  readonly currentYear = new Date().getFullYear();

  navigate(id: string): void {
    this.scrollService.scrollTo(id);
  }
}
