/**
 * Links de contacto/redes, tomados de la presentación de GitHub
 * (github.com/ViniBitCode). Los consumen el hero y el footer.
 *
 * A propósito NO hay mailto acá: el correo no se expone en el front
 * (antispam); el canal de contacto por mail es el formulario.
 */
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const SOCIALS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ViniBitCode',
    icon: 'icons/github_icon.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/facundo-hern%C3%A1n-vinitzca-a2bb38284',
    icon: 'icons/linkedin_icon.svg',
  },
];

/** URL del perfil de GitHub, para CTAs directos. */
export const GITHUB_PROFILE_URL = 'https://github.com/ViniBitCode';
