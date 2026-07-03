import { computed, DOCUMENT, inject, Injectable, signal } from '@angular/core';
import { Lang } from '../i18n/lang';
import { UI } from '../i18n/ui';

const STORAGE_KEY = 'portafolio-lang';

/**
 * Maneja el idioma del sitio (es/en). Expone `ui` como signal computada
 * con todos los textos del idioma activo; los componentes leen
 * `ui().seccion.clave` y reaccionan solos al cambio de idioma.
 * La preferencia persiste en localStorage.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>('es');
  readonly ui = computed(() => UI[this.lang()]);

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') {
        this.lang.set(saved);
      }
    }
    this.apply(this.lang());
  }

  toggle(): void {
    const next: Lang = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, next);
    }
    this.apply(next);
  }

  private apply(lang: Lang): void {
    this.document.documentElement.lang = lang;
  }
}
