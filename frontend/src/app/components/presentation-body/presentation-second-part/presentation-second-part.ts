import { Component } from '@angular/core';
import { PresentationSecondPartLeft } from "./presentation-second-part-left/presentation-second-part-left/presentation-second-part-left";
import { PresentationSecondPartRight } from "./presentation-second-part-right/presentation-second-part-right";

@Component({
  selector: 'app-presentation-second-part',
  imports: [PresentationSecondPartLeft, PresentationSecondPartRight],
  templateUrl: './presentation-second-part.html',
  styleUrl: './presentation-second-part.scss',
})
export class PresentationSecondPart {}
