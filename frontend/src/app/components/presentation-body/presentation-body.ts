import { Component } from '@angular/core';
import { PresentationFirstPart } from "../presentation-body/presentation-first-part/presentation-first-part";
import { PresentationSecondPart } from '../presentation-body/presentation-second-part/presentation-second-part';
import { PresentationThirdPart } from '../presentation-body/presentation-third-part/presentation-third-part/presentation-third-part';

@Component({
  selector: 'app-presentation-body',
  standalone: true,
  imports: [PresentationFirstPart, PresentationSecondPart, PresentationThirdPart],
  templateUrl: './presentation-body.html',
  styleUrl: './presentation-body.scss',
})
export class PresentationBody {}
