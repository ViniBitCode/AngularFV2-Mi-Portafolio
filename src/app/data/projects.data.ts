import { Project } from '../models/project.model';
import { TECHS } from './techs';

/**
 * Fuente de verdad de los proyectos del portafolio.
 *
 * Ordenados cronológicamente (del más antiguo al más reciente). Para agregar un
 * proyecto nuevo basta con sumar un objeto acá, con título y descripción en
 * ambos idiomas. Si el proyecto no tiene captura, dejar `image: null` y la
 * tarjeta genera un placeholder con el ícono de la tecnología principal.
 */
export const PROJECTS: Project[] = [
  {
    id: 'html-css-patos',
    title: {
      es: 'Todo sobre patos',
      en: 'All about ducks',
    },
    description: {
      es: 'Mi primer sitio web: una práctica de maquetación estática multipágina con HTML y CSS puro, sin frameworks.',
      en: 'My first website: a multi-page static layout practice built with pure HTML and CSS, no frameworks.',
    },
    category: 'Web',
    year: 2024,
    techs: [TECHS.html, TECHS.css],
    image: 'images/1er-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/2024-1.5-HTML-y-CSS',
    liveUrl: 'https://bits4bytes.vercel.app',
  },
  {
    id: 'java-pokemon',
    title: {
      es: 'Juego Pokémon',
      en: 'Pokémon Game',
    },
    description: {
      es: 'Juego de batallas por turnos hecho con Java y Swing. Aplica POO —herencia y polimorfismo— para modelar Pokémon y ataques.',
      en: 'Turn-based battle game built with Java and Swing. Applies OOP —inheritance and polymorphism— to model Pokémon and attacks.',
    },
    category: 'Juegos',
    year: 2025,
    techs: [TECHS.java, TECHS.swing],
    image: null,
    githubUrl: 'https://github.com/ViniBitCode/JavaFV1-JuegoPokemon',
  },
  {
    id: 'ssoo-tp0',
    title: {
      es: 'SSOO · TP0 (UTN)',
      en: 'OS · TP0 (UTN)',
    },
    description: {
      es: 'Trabajo práctico de Sistemas Operativos (UTN) en C: manejo de memoria, punteros, sockets y compilación con Makefile.',
      en: 'Operating Systems course assignment (UTN) in C: memory management, pointers, sockets and Makefile builds.',
    },
    category: 'Académico',
    year: 2025,
    techs: [TECHS.c],
    image: null,
    githubUrl: 'https://github.com/ViniBitCode/UTN-2025-SSOO-TP0',
  },
  {
    id: 'ssoo-revenge-of-the-cth',
    title: {
      es: 'SSOO · Revenge of the Cth',
      en: 'OS · Revenge of the Cth',
    },
    description: {
      es: 'El TP grupal de Sistemas Operativos (UTN): simulación de un sistema operativo distribuido en C — Kernel, CPU, Memoria e I/O como módulos independientes comunicados por sockets.',
      en: 'The Operating Systems group project (UTN): a distributed OS simulation in C — Kernel, CPU, Memory and I/O as independent modules communicating over sockets.',
    },
    category: 'Académico',
    year: 2025,
    techs: [TECHS.c, TECHS.makefile],
    image: null,
    githubUrl: 'https://github.com/ViniBitCode/UTN-2025-SSOO-RevengeOfTheCth',
  },
  {
    id: 'java-lobby-juegos',
    title: {
      es: 'Lobby de Juegos',
      en: 'Games Lobby',
    },
    description: {
      es: 'Lobby de escritorio en Java Swing que reúne tres juegos —Ta-Te-Ti, Buscaminas y Ahorcado— con pantallas reutilizables.',
      en: 'Desktop lobby in Java Swing bundling three games —Tic-Tac-Toe, Minesweeper and Hangman— with reusable screens.',
    },
    category: 'Juegos',
    year: 2025,
    techs: [TECHS.java, TECHS.swing],
    image: 'images/3er-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV2-LobbyJuegos',
  },
  {
    id: 'java-fullstack-persistencia',
    title: {
      es: 'Gestión con Persistencia',
      en: 'Management with Persistence',
    },
    description: {
      es: 'Sistema de gestión (usuarios y mascotas) con Java Swing y persistencia real en MySQL vía JPA. CRUD completo por capas.',
      en: 'Management system (users and pets) with Java Swing and real persistence in MySQL via JPA. Full layered CRUD.',
    },
    category: 'Fullstack',
    year: 2026,
    techs: [TECHS.java, TECHS.jpa, TECHS.mysql],
    image: 'images/4to-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV3-FullStack',
  },
  {
    id: 'springboot-intro',
    title: {
      es: 'Primera API · Spring Boot',
      en: 'First API · Spring Boot',
    },
    description: {
      es: 'Mi primer proyecto con Spring Boot: una API REST introductoria empaquetada con Docker.',
      en: 'My first Spring Boot project: an introductory REST API packaged with Docker.',
    },
    category: 'Backend',
    year: 2026,
    techs: [TECHS.java, TECHS.springBoot, TECHS.docker],
    image: 'images/5to-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV4-Introduccion-SpringBoot',
  },
  {
    id: 'springboot-integrador',
    title: {
      es: 'API Integradora · Spring Boot',
      en: 'Integrative API · Spring Boot',
    },
    description: {
      es: 'API REST con Spring Boot, JPA y Lombok sobre MySQL, aplicando programación funcional y contenerizada con Docker.',
      en: 'REST API with Spring Boot, JPA and Lombok on MySQL, applying functional programming and containerized with Docker.',
    },
    category: 'Backend',
    year: 2026,
    techs: [TECHS.java, TECHS.springBoot, TECHS.mysql, TECHS.docker],
    image: 'images/6to-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/JavaFV5-SpringBoot-Integrador',
  },
  {
    id: 'angular-login',
    title: {
      es: 'Login Full Stack',
      en: 'Full Stack Login',
    },
    description: {
      es: 'Primer proyecto con Angular: un login conectado a una API propia hecha en Spring Boot. Front y back trabajando juntos.',
      en: 'First Angular project: a login connected to my own Spring Boot API. Front and back working together.',
    },
    category: 'Fullstack',
    year: 2026,
    techs: [TECHS.angular, TECHS.typescript, TECHS.springBoot],
    image: 'images/7mo-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/AngularFV1-Primer-Proyecto',
  },
  {
    id: 'angular-portafolio',
    title: {
      es: 'Mi Portafolio',
      en: 'My Portfolio',
    },
    description: {
      es: 'Este mismo portafolio: Angular 21 con SSR, signals, tema claro/oscuro, español/inglés y formulario de contacto.',
      en: 'This very portfolio: Angular 21 with SSR, signals, light/dark theme, Spanish/English and a contact form.',
    },
    category: 'Web',
    year: 2026,
    techs: [TECHS.angular, TECHS.typescript],
    image: 'images/8vo-proyecto-imagen.png',
    githubUrl: 'https://github.com/ViniBitCode/AngularFV2-Mi-Portafolio',
    featured: true,
  },
];
