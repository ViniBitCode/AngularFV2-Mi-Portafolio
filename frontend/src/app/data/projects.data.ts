import { Project } from '../models/project.model';
import { TECHS } from './techs';

/**
 * Fuente de verdad de los proyectos del portafolio.
 *
 * Ordenados cronológicamente (del más antiguo al más reciente). Para agregar un
 * proyecto nuevo basta con sumar un objeto acá. Si el proyecto no tiene captura,
 * dejar `image: null` y la tarjeta genera un placeholder con el ícono de la
 * tecnología principal.
 */
export const PROJECTS: Project[] = [
  {
    id: 'html-css-patos',
    title: 'Todo sobre patos',
    description:
      'Mi primer sitio web: una práctica de maquetación estática multipágina con HTML y CSS puro, sin frameworks.',
    category: 'Web',
    year: 2024,
    techs: [TECHS.html, TECHS.css],
    image: 'images/1er-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/2024-1.5-HTML-y-CSS',
    liveUrl: 'https://bits4bytes.vercel.app',
  },
  {
    id: 'java-pokemon',
    title: 'Juego Pokémon',
    description:
      'Juego de batallas por turnos hecho con Java y Swing. Aplica POO —herencia y polimorfismo— para modelar Pokémon y ataques.',
    category: 'Juegos',
    year: 2025,
    techs: [TECHS.java, TECHS.swing],
    image: null,
    githubUrl: 'https://github.com/ViniBitCode/JavaFV1-JuegoPokemon',
  },
  {
    id: 'ssoo-tp0',
    title: 'SSOO · TP0 (UTN)',
    description:
      'Trabajo práctico de Sistemas Operativos (UTN) en C: manejo de memoria, punteros, sockets y compilación con Makefile.',
    category: 'Académico',
    year: 2025,
    techs: [TECHS.c],
    image: null,
    githubUrl: 'https://github.com/ViniBitCode/UTN-2025-SSOO-TP0',
  },
  {
    id: 'java-lobby-juegos',
    title: 'Lobby de Juegos',
    description:
      'Lobby de escritorio en Java Swing que reúne tres juegos —Ta-Te-Ti, Buscaminas y Ahorcado— con pantallas reutilizables.',
    category: 'Juegos',
    year: 2025,
    techs: [TECHS.java, TECHS.swing],
    image: 'images/3er-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV2-LobbyJuegos',
  },
  {
    id: 'ssoo-revenge-of-the-cth',
    title: 'SSOO · Revenge of the Cth',
    description:
      'El TP grupal de Sistemas Operativos (UTN): simulación de un sistema operativo distribuido en C — Kernel, CPU, Memoria e I/O como módulos independientes comunicados por sockets.',
    category: 'Académico',
    year: 2025,
    techs: [TECHS.c, TECHS.makefile],
    image: null,
    githubUrl: 'https://github.com/ViniBitCode/UTN-2025-SSOO-RevengeOfTheCth',
  },
  {
    id: 'java-fullstack-persistencia',
    title: 'Gestión con Persistencia',
    description:
      'Sistema de gestión (usuarios y mascotas) con Java Swing y persistencia real en MySQL vía JPA. CRUD completo por capas.',
    category: 'Fullstack',
    year: 2026,
    techs: [TECHS.java, TECHS.jpa, TECHS.mysql],
    image: 'images/4to-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV3-FullStack',
  },
  {
    id: 'springboot-intro',
    title: 'Primera API · Spring Boot',
    description:
      'Mi primer proyecto con Spring Boot: una API REST introductoria empaquetada con Docker.',
    category: 'Backend',
    year: 2026,
    techs: [TECHS.java, TECHS.springBoot, TECHS.docker],
    image: 'images/5to-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV4-Introduccion-SpringBoot',
  },
  {
    id: 'springboot-integrador',
    title: 'API Integradora · Spring Boot',
    description:
      'API REST con Spring Boot, JPA y Lombok sobre MySQL, aplicando programación funcional y contenerizada con Docker.',
    category: 'Backend',
    year: 2026,
    techs: [TECHS.java, TECHS.springBoot, TECHS.mysql, TECHS.docker],
    image: 'images/6to-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV5-SpringBoot-Integrador',
  },
  {
    id: 'angular-login',
    title: 'Login Full Stack',
    description:
      'Primer proyecto con Angular: un login conectado a un backend propio en Spring Boot. Front y back trabajando juntos.',
    category: 'Fullstack',
    year: 2026,
    techs: [TECHS.angular, TECHS.typescript, TECHS.springBoot],
    image: 'images/7mo-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/AngularFV1-Primer-Proyecto',
  },
  {
    id: 'angular-portafolio',
    title: 'Mi Portafolio',
    description:
      'Este mismo portafolio: Angular 21 con SSR, componentes standalone, signals y formulario de contacto con EmailJS.',
    category: 'Web',
    year: 2026,
    techs: [TECHS.angular, TECHS.typescript],
    image: 'images/8vo-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/AngularFV2-Mi-Portafolio',
    featured: true,
  },
];
