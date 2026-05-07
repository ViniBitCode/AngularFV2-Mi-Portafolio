import { Component } from '@angular/core';

@Component({
  selector: 'app-presentation-first-part',
  imports: [],
  templateUrl: './presentation-first-part.html',
  styleUrl: './presentation-first-part.scss',
})
export class PresentationFirstPart {
  verCV() {
    const url = '/archives/CV - Facundo H Vinitzca.pdf'
    window.open(url, '_blank');
  }
}
