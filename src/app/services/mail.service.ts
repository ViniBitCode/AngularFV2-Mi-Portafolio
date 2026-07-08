import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/** Datos que completa el visitante en el formulario de contacto. */
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  /** Honeypot antispam: los humanos no lo ven; si viene con valor, es un bot. */
  botcheck?: string;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Envía los mensajes del formulario de contacto vía Web3Forms.
 *
 * El front sólo conoce la access key pública; la casilla de destino está
 * configurada del lado de Web3Forms, así que el correo real no se expone
 * en el código ni en el bundle (evita scraping/spam).
 */
@Injectable({ providedIn: 'root' })
export class MailService {
  sendMail(data: ContactMessage): Observable<void> {
    const body = {
      access_key: environment.web3forms.accessKey,
      name: data.name,
      email: data.email,
      message: data.message,
      botcheck: data.botcheck ?? '',
      subject: `Nuevo mensaje del portafolio — ${data.name}`,
      from_name: 'Mi Portafolio',
    };

    const promise = fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    }).then(async (response) => {
      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.message ?? 'No se pudo enviar el mensaje');
      }
    });

    return from(promise);
  }
}
