import { Course } from '../models/course.model';

/**
 * Fuente de verdad de los cursos / certificados.
 *
 * Para agregar uno:
 *   1. Copiar el PNG del certificado a `public/certificados/` respetando la
 *      convención `YYYY-MM-institucion-nombre-del-curso.png`.
 *   2. Sumar una entrada acá con `image` = nombre del archivo.
 *
 * Ejemplo:
 *   {
 *     id: 'udemy-spring-boot-2025',
 *     name: 'Spring Boot desde cero',
 *     institution: 'Udemy',
 *     date: '2025-03',
 *     image: '2025-03-udemy-spring-boot-desde-cero.png',
 *     credentialUrl: 'https://www.udemy.com/certificate/UC-xxxx',
 *   }
 *
 * Se muestran del más reciente al más antiguo (ver CoursesService).
 * Mientras esté vacío, la sección muestra un estado "sin certificados".
 */
export const COURSES: Course[] = [
  {
    id: 'ibm-edt-practitioner',
    name: 'Enterprise Design Thinking Practitioner',
    institution: 'IBM',
    date: '2024-05',
    image: '2024-05-ibm-enterprise-design-thinking-practitioner.png',
    credentialUrl: 'https://www.credly.com/badges/db0b325c-8b75-41dc-ae7a-ce9a9ff0a08b/public_url',
  },
  {
    id: 'ibm-edt-co-creator',
    name: 'Enterprise Design Thinking Co-Creator',
    institution: 'IBM',
    date: '2024-08',
    image: '2024-08-ibm-enterprise-design-thinking-co-creator.png',
    credentialUrl: 'https://www.credly.com/badges/0aa86df9-7695-40e7-8ff0-85be0865052a/public_url',
  },
  {
    id: 'todocode-java-principiantes',
    name: 'Java para Principiantes',
    institution: 'TodoCode',
    date: '2024-12',
    image: '2024-12-todocode-java-para-principiantes.png',
    credentialUrl: 'https://todocodeacademy.com/certificate/java-para-principiantes-p2o/',
  },
  {
    id: 'todocode-apis-spring-boot',
    name: 'Desarrollo de APIs en Java con Spring Boot',
    institution: 'TodoCode',
    date: '2025-01',
    image: '2025-01-todocode-desarrollo-de-apis-en-java-con-spring-boot.png',
  },
  {
    id: 'todocode-poo-java',
    name: 'Programación Orientada a Objetos con Java',
    institution: 'TodoCode',
    date: '2026-01',
    image: '2026-01-todocode-poo-con-java.png',
    credentialUrl: 'https://todocodeacademy.com/certificate/certificado-curso-poo-con-java-gmq/',
  },
  {
    id: 'educacionit-introduccion-redes',
    name: 'Introducción a Redes',
    institution: 'EducaciónIT',
    date: '2026-02',
    image: '2026-02-educacionit-introduccion-a-redes.png',
    credentialUrl:
      'https://www.educacionit.com/perfil/facundo-hernan-vinitzca-1103654/certificado/83907',
  },
  {
    id: 'educacionit-reparador-pc',
    name: 'Reparador de PC',
    institution: 'EducaciónIT',
    date: '2026-05',
    image: '2026-05-educacionit-reparador-de-pc.png',
    credentialUrl:
      'https://www.educacionit.com/perfil/facundo-hernan-vinitzca-1103654/certificado/83899',
  },
  {
    id: 'todocode-spring-security',
    name: 'Seguridad con Spring Security',
    institution: 'TodoCode',
    date: '2026-09',
    image: '2026-09-todocode-seguridad-con-spring-security.png',
  },
];
