import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { TerminalLine } from '../../../i18n/lang';
import { SOCIALS } from '../../../data/socials';
import { LanguageService } from '../../../services/language.service';

interface Skill {
  name: string;
  icon?: string;
}

const TYPE_DELAY_MS = 45;
const AFTER_CMD_PAUSE_MS = 250;
const AFTER_OUT_PAUSE_MS = 420;

/**
 * Sección "Sobre mí": terminal animada con efecto typewriter, bio,
 * skills, links sociales y acceso al CV (en el idioma activo).
 *
 * La terminal se renderiza completa en SSR (SEO) y en el navegador se
 * re-tipea desde cero cada vez que cambia el idioma. Si el usuario
 * prefiere movimiento reducido, se muestra de golpe.
 */
@Component({
  selector: 'app-presentation-first-part',
  templateUrl: './presentation-first-part.html',
  styleUrl: './presentation-first-part.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationFirstPart {
  private readonly langService = inject(LanguageService);
  private readonly platformId = inject(PLATFORM_ID);

  readonly ui = this.langService.ui;
  readonly socials = SOCIALS;

  readonly skills: Skill[] = [
    { name: 'Java', icon: 'icons/java_icon.svg' },
    { name: 'Spring Boot', icon: 'icons/springboot_icon.svg' },
    { name: 'Angular', icon: 'icons/angular_icon.svg' },
    { name: 'TypeScript', icon: 'icons/typescript_icon.svg' },
    { name: 'MySQL', icon: 'icons/mysql_icon.svg' },
    { name: 'C', icon: 'icons/C_icon.svg' },
    { name: 'Docker', icon: 'icons/docker_icon.svg' },
    { name: 'Git', icon: 'icons/git_icon.svg' },
    { name: 'HTML', icon: 'icons/html5_icon.svg' },
    { name: 'CSS', icon: 'icons/css_icon.svg' },
  ];

  /**
   * Líneas visibles en la terminal. Arranca con el guion completo para que
   * el HTML de SSR coincida con el primer render del cliente (hidratación);
   * recién después el effect la vacía y re-tipea.
   */
  readonly termLines = signal<TerminalLine[]>(this.ui().hero.terminal);

  /** Invalida animaciones en curso cuando cambia el idioma. */
  private playToken = 0;

  constructor() {
    effect(() => {
      const script = this.ui().hero.terminal;
      this.restartTerminal(script);
    });
  }

  verCV(): void {
    window.open(this.ui().hero.cvFile, '_blank', 'noopener');
  }

  private restartTerminal(script: TerminalLine[]): void {
    this.playToken++;

    if (!isPlatformBrowser(this.platformId)) {
      this.termLines.set(script);
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      this.termLines.set(script);
      return;
    }

    this.termLines.set([]);
    void this.playTerminal(script, this.playToken);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /** Tipea los comandos caracter a caracter e imprime las salidas de golpe. */
  private async playTerminal(script: TerminalLine[], token: number): Promise<void> {
    for (const line of script) {
      if (token !== this.playToken) return;

      if (line.type === 'cmd') {
        this.termLines.update((lines) => [...lines, { type: 'cmd', text: '' }]);
        for (const char of line.text) {
          await this.sleep(TYPE_DELAY_MS);
          if (token !== this.playToken) return;
          this.termLines.update((lines) => {
            const updated = [...lines];
            const last = updated[updated.length - 1];
            updated[updated.length - 1] = { ...last, text: last.text + char };
            return updated;
          });
        }
        await this.sleep(AFTER_CMD_PAUSE_MS);
      } else {
        this.termLines.update((lines) => [...lines, line]);
        await this.sleep(AFTER_OUT_PAUSE_MS);
      }
    }
  }
}
