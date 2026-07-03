import { ProjectCategory } from '../models/project.model';
import { Lang, TerminalLine } from './lang';

/**
 * Todos los textos de la interfaz. La interfaz tipada garantiza que
 * ningún idioma se quede sin una clave.
 *
 * Los títulos de sección son tuplas [textoNormal, textoAcentuado]
 * porque la segunda parte se pinta con el color de acento.
 */
export interface UiStrings {
  nav: {
    brand: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    bio: string;
    skillsTitle: [string, string];
    cvButton: string;
    cvFile: string;
    terminal: TerminalLine[];
  };
  projects: {
    title: [string, string];
    subtitle: string;
    filterAll: string;
    categories: Record<ProjectCategory, string>;
    code: string;
    demo: string;
    githubTitle: [string, string];
    githubCta: string;
  };
  contact: {
    title: [string, string];
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    nameRequired: string;
    nameMinLength: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageMinLength: string;
    messageMaxLength: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    tagline: string;
    credit: string;
  };
}

export const UI: Record<Lang, UiStrings> = {
  es: {
    nav: {
      brand: 'Mi Portafolio',
      about: 'Sobre mi',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola! Soy',
      bio:
        'Estudiante de Ingeniería en Sistemas de Información (UTN) enfocado en ' +
        'desarrollo Backend con Java y Spring Boot. Mi paso por el soporte técnico y ' +
        'la docencia me permitió comunicar ideas complejas de forma simple y trabajar ' +
        'bajo presión para resolver problemas. Hoy construyo proyectos propios con la ' +
        'meta de convertirme en desarrollador Senior Java & Angular para cuando ' +
        'termine la carrera.',
      skillsTitle: ['Mis', 'Habilidades'],
      cvButton: 'Ver mi CV',
      cvFile: '/archives/CV - Facundo H Vinitzca.pdf',
      terminal: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'Facundo Vinitzca — 22 años, Buenos Aires 🇦🇷' },
        { type: 'cmd', text: 'cat formacion.txt' },
        { type: 'out', text: 'Ing. en Sistemas de Información @ UTN' },
        { type: 'cmd', text: 'cat objetivo.txt' },
        { type: 'out', text: 'Ser dev Senior en Java & Angular al recibirme' },
        { type: 'cmd', text: './buscando.sh' },
        { type: 'out', text: 'Primer empleo como Full Stack (Java + Angular)' },
      ],
    },
    projects: {
      title: ['Mis', 'Proyectos'],
      subtitle:
        'Un recorrido por lo que fui construyendo: de mis primeras páginas estáticas a ' +
        'APIs con Spring Boot y apps full stack con Angular.',
      filterAll: 'Todos',
      categories: {
        Web: 'Web',
        Juegos: 'Juegos',
        Backend: 'Backend',
        Fullstack: 'Fullstack',
        Académico: 'Académico',
      },
      code: 'Código',
      demo: 'Ver demo',
      githubTitle: ['Mi actividad en', 'GitHub'],
      githubCta: 'Ver mi perfil completo en GitHub →',
    },
    contact: {
      title: ['Contacta', 'conmigo'],
      nameLabel: 'Nombre completo',
      emailLabel: 'Email',
      messageLabel: 'Mensaje',
      nameRequired: 'El nombre es requerido.',
      nameMinLength: 'Mínimo 3 caracteres.',
      emailRequired: 'El email es requerido.',
      emailInvalid: 'Formato de email inválido.',
      messageRequired: 'El mensaje es requerido.',
      messageMinLength: 'Mínimo 10 caracteres.',
      messageMaxLength: 'Máximo 500 caracteres.',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: '✅ Mensaje enviado con éxito.',
      error: '❌ Error al enviar. Intentá de nuevo.',
    },
    footer: {
      tagline: 'Backend en construcción — Java, Spring Boot & Angular.',
      credit: 'Hecho con Angular, SSR y ☕',
    },
  },

  en: {
    nav: {
      brand: 'My Portfolio',
      about: 'About me',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi! I'm",
      bio:
        'Information Systems Engineering student (UTN) focused on Backend ' +
        'development with Java and Spring Boot. My time in tech support and ' +
        'teaching taught me to communicate complex ideas simply and to work ' +
        'under pressure to solve problems. Today I build my own projects with ' +
        'the goal of becoming a Senior Java & Angular developer by the time I ' +
        'graduate.',
      skillsTitle: ['My', 'Skills'],
      cvButton: 'View my resume',
      cvFile: '/archives/Resume - Facundo H Vinitzca.pdf',
      terminal: [
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'Facundo Vinitzca — 22 years old, Buenos Aires 🇦🇷' },
        { type: 'cmd', text: 'cat education.txt' },
        { type: 'out', text: 'Information Systems Engineering @ UTN' },
        { type: 'cmd', text: 'cat goal.txt' },
        { type: 'out', text: 'Become a Senior Java & Angular dev by graduation' },
        { type: 'cmd', text: './job_hunting.sh' },
        { type: 'out', text: 'First job as a Full Stack dev (Java + Angular)' },
      ],
    },
    projects: {
      title: ['My', 'Projects'],
      subtitle:
        'A tour of what I have been building: from my first static pages to ' +
        'Spring Boot APIs and full-stack apps with Angular.',
      filterAll: 'All',
      categories: {
        Web: 'Web',
        Juegos: 'Games',
        Backend: 'Backend',
        Fullstack: 'Fullstack',
        Académico: 'Academic',
      },
      code: 'Code',
      demo: 'Live demo',
      githubTitle: ['My activity on', 'GitHub'],
      githubCta: 'See my full GitHub profile →',
    },
    contact: {
      title: ['Get in', 'touch'],
      nameLabel: 'Full name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      nameRequired: 'Name is required.',
      nameMinLength: 'At least 3 characters.',
      emailRequired: 'Email is required.',
      emailInvalid: 'Invalid email format.',
      messageRequired: 'Message is required.',
      messageMinLength: 'At least 10 characters.',
      messageMaxLength: 'Up to 500 characters.',
      send: 'Send message',
      sending: 'Sending...',
      success: '✅ Message sent successfully.',
      error: '❌ Something went wrong. Please try again.',
    },
    footer: {
      tagline: 'Backend in the making — Java, Spring Boot & Angular.',
      credit: 'Built with Angular, SSR & ☕',
    },
  },
};
