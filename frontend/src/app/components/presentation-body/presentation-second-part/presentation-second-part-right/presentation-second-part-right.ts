import { Component, OnInit } from '@angular/core';
import {
  CarouselComponent,
  CarouselCaptionComponent,
  CarouselControlComponent,
  CarouselIndicatorsComponent,
  CarouselInnerComponent,
  CarouselItemComponent,
} from '@coreui/angular'

@Component({
  selector: 'app-presentation-second-part-right',
  templateUrl: './presentation-second-part-right.html',
  styleUrl: './presentation-second-part-right.scss',
  imports: [
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
  ]
})

export class PresentationSecondPartRight {
  cantImagenes: number = 3;
  slides: any[] = new Array(this.cantImagenes).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: './images/1er-proyecto-imagen.png',
      title: '1er Proyecto',
      subtitle: 'Patos Pagina 1',
    };
    this.slides[1] = {
      id: 1,
      src: './images/2do-proyecto-imagen.png',
      title: '2do Proyecto',
      subtitle: 'Patos Pagina 2',
    };
    this.slides[2] = {
      id: 2,
      src: './images/3er-proyecto-imagen.png',
      title: '3er Proyecto',
      subtitle: 'Juegos con Java',
    };
  }
}
