import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-presentation-third-part',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './presentation-third-part.html',
  styleUrl: './presentation-third-part.scss',
})
export class PresentationThirdPart {
  consultForm = new FormGroup({
    full_name_consultant: new FormControl(''),
    email_consultant: new FormControl(''),
    message_consultant: new FormControl(''),
  });
}
