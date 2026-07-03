import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MailService {

  sendMail(templateParams: Record<string, string>): Observable<void> {
    const { serviceId, templateId, publicKey } = environment.emailjs;

    const promise = emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => void 0);

    return from(promise);
  }
}