import { Component } from '@angular/core';
import { PresentationFirstPart } from "./presentation-first-part/presentation-first-part";
import { PresentationSecondPart } from './presentation-second-part/presentation-second-part';

@Component({
  selector: 'app-presentation-body',
  standalone: true,
  imports: [PresentationFirstPart, PresentationSecondPart],
  templateUrl: './presentation-body.html',
  styleUrl: './presentation-body.scss',
})
export class PresentationBody {}
