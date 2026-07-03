import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../../../services/language.service';
import { MailService } from '../../../../services/mailService';

@Component({
  selector: 'app-presentation-third-part',
  imports: [ReactiveFormsModule],
  templateUrl: './presentation-third-part.html',
  styleUrl: './presentation-third-part.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationThirdPart {
  private readonly mailService = inject(MailService);
  private readonly langService = inject(LanguageService);

  readonly ui = this.langService.ui;

  consultForm = new FormGroup({
    full_name_consultant: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email_consultant: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    message_consultant: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500),
    ]),
  });

  isSending = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  onSendMail(): void {
    if (this.consultForm.invalid) return;

    this.isSending = true;
    this.status = 'idle';

    this.mailService
      .sendMail({
        from_name:  this.consultForm.get('full_name_consultant')?.value ?? '',
        from_email: this.consultForm.get('email_consultant')?.value ?? '',
        message:    this.consultForm.get('message_consultant')?.value ?? '',
      })
      .subscribe({
        next: () => {
          this.status = 'success';
          this.isSending = false;
          this.consultForm.reset();
        },
        error: () => {
          this.status = 'error';
          this.isSending = false;
        },
      });
  }
}
