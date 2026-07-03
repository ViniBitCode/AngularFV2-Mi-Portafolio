import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GITHUB_PROFILE_URL } from '../../data/socials';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly scrollService = inject(ScrollService);

  protected readonly langService = inject(LanguageService);
  protected readonly themeService = inject(ThemeService);

  readonly githubUrl = GITHUB_PROFILE_URL;
  readonly ui = this.langService.ui;

  navigate(id: string): void {
    this.scrollService.scrollTo(id);
  }
}
