/** Idiomas soportados por el portafolio. */
export type Lang = 'es' | 'en';

/** Texto con una versión por idioma. */
export type LocalizedText = Record<Lang, string>;

/** Una línea de la terminal del hero: comando tipeado o salida impresa. */
export interface TerminalLine {
  type: 'cmd' | 'out';
  text: string;
}
