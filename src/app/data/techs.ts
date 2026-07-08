import { Tech } from '../models/project.model';

/**
 * Catálogo central de tecnologías. Evita repetir nombre + ruta de ícono en
 * cada proyecto y mantiene los badges consistentes en todo el portafolio.
 * Los íconos viven en `public/icons`; si una tech no tiene ícono, el badge
 * se muestra sólo con texto.
 */
export const TECHS = {
  html: { name: 'HTML', icon: 'icons/html5_icon.svg' },
  css: { name: 'CSS', icon: 'icons/css_icon.svg' },
  java: { name: 'Java', icon: 'icons/java_icon.svg' },
  swing: { name: 'Java Swing' },
  c: { name: 'C', icon: 'icons/C_icon.svg' },
  makefile: { name: 'Makefile' },
  mysql: { name: 'MySQL', icon: 'icons/mysql_icon.svg' },
  jpa: { name: 'JPA / Hibernate' },
  springBoot: { name: 'Spring Boot', icon: 'icons/springboot_icon.svg' },
  docker: { name: 'Docker', icon: 'icons/docker_icon.svg' },
  angular: { name: 'Angular', icon: 'icons/angular_icon.svg' },
  typescript: { name: 'TypeScript', icon: 'icons/typescript_icon.svg' },
} as const satisfies Record<string, Tech>;
