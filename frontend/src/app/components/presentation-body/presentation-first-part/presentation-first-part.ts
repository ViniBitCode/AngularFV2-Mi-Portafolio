import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { SOCIALS } from '../../../data/socials';

interface Skill {
  name: string;
  icon?: string;
}

/** Una línea de la terminal del hero: comando tipeado o salida impresa. */
interface TermLine {
  type: 'cmd' | 'out';
  text: string;
}

const TYPE_DELAY_MS = 45;
const AFTER_CMD_PAUSE_MS = 250;
const AFTER_OUT_PAUSE_MS = 420;

/**
 * Sección "Sobre mí": terminal animada con efecto typewriter, bio,
 * skills, links sociales y acceso al CV.
 *
 * La animación corre sólo en el navegador (afterNextRender) y se salta
 * si el usuario prefiere movimiento reducido.
 */
@Component({
  selector: 'app-presentation-first-part',
  templateUrl: './presentation-first-part.html',
  styleUrl: './presentation-first-part.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationFirstPart {
  private readonly cvUrl = '/archives/CV - Facundo H Vinitzca.pdf';

  readonly socials = SOCIALS;

  readonly skills: Skill[] = [
    { name: 'Java', icon: 'icons/java_icon.svg' },
    { name: 'Spring Boot', icon: 'icons/springboot_icon.svg' },
    { name: 'Angular', icon: 'icons/angular_icon.svg' },
    { name: 'TypeScript' },
    { name: 'MySQL', icon: 'icons/mysql_icon.svg' },
    { name: 'C', icon: 'icons/C_icon.svg' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'HTML & CSS' },
  ];

  /** Guion de la terminal, en orden de aparición. */
  private readonly termScript: TermLine[] = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'Facundo Vinitzca — 22 años, Buenos Aires 🇦🇷' },
    { type: 'cmd', text: 'cat formacion.txt' },
    { type: 'out', text: 'Ing. en Sistemas de Información @ UTN' },
    { type: 'cmd', text: 'cat objetivo.txt' },
    { type: 'out', text: 'Ser dev Senior en Java & Angular al recibirme' },
    { type: 'cmd', text: './buscando.sh' },
    { type: 'out', text: 'Primer empleo como Full Stack (Java + Angular)' },
  ];

  /** Líneas ya visibles en la terminal (se van agregando al animar). */
  readonly termLines = signal<TermLine[]>([]);

  constructor() {
    afterNextRender(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion) {
        this.termLines.set(this.termScript);
        return;
      }
      void this.playTerminal();
    });
  }

  verCV(): void {
    window.open(this.cvUrl, '_blank', 'noopener');
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /** Tipea los comandos caracter a caracter e imprime las salidas de golpe. */
  private async playTerminal(): Promise<void> {
    for (const line of this.termScript) {
      if (line.type === 'cmd') {
        this.termLines.update((lines) => [...lines, { type: 'cmd', text: '' }]);
        for (const char of line.text) {
          await this.sleep(TYPE_DELAY_MS);
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
