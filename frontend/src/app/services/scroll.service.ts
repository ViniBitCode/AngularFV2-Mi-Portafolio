import { Injectable } from '@angular/core';

/**
 * Scroll suave hacia una sección por id. Centraliza la lógica que antes
 * vivía en el Header para que el Footer (u otros) la reutilicen.
 */
@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
