import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { GITHUB_PROFILE_URL } from '../../data/socials';
import { UiStrings } from '../../i18n/ui';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeService } from '../../services/theme.service';

type NavKey = keyof Pick<UiStrings['nav'], 'about' | 'projects' | 'courses' | 'contact'>;

interface NavItem {
  key: NavKey;
  sectionId: string;
}

/** Secciones navegables, en orden de aparición en la página. */
export const NAV_ITEMS: NavItem[] = [
  { key: 'about', sectionId: 'presentation-first-container' },
  { key: 'projects', sectionId: 'presentation-second-container' },
  { key: 'courses', sectionId: 'courses-container' },
  { key: 'contact', sectionId: 'presentation-third-container' },
];

/**
 * Barra superior fija: marca, navegación por secciones, toggles de idioma y
 * tema, y link a GitHub. En pantallas chicas la navegación se pliega en un
 * menú hamburguesa (accesible: aria-expanded, cierra con Escape).
 */
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
  readonly navItems = NAV_ITEMS;

  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  navigate(id: string): void {
    this.menuOpen.set(false);
    this.scrollService.scrollTo(id);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen.set(false);
  }
}
