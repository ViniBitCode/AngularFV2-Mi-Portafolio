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
  selector: 'app-presentation-second-part-left',
  standalone: true,
  templateUrl: './presentation-second-part-left.html',
  styleUrl: './presentation-second-part-left.scss',
  imports: [
    CarouselComponent,
    CarouselIndicatorsComponent,
    CarouselInnerComponent,
    CarouselItemComponent,
    CarouselCaptionComponent,
    CarouselControlComponent,
  ],
})
export class PresentationSecondPartLeft implements OnInit {
  cantImagenes: number = 8;
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
    this.slides[3] = {
      id: 3,
      src: './images/4to-proyecto-imagen.png',
      title: '4to Proyecto',
      subtitle: 'Persistencia con Java',
    };
    this.slides[4] = {
      id: 4,
      src: './images/5to-proyecto-imagen.png',
      title: '5to Poryecto',
      subtitle: 'Primer API',
    };
    this.slides[5] = {
      id: 5,
      src: './images/6to-proyecto-imagen.png',
      title: '6to Proyecto',
      subtitle: 'Segunda API',
    };
    this.slides[6] = {
      id: 6,
      src: './images/7mo-proyecto-imagen.png',
      title: '7mo Proyecto',
      subtitle: 'Practica de Angular',
    };
    this.slides[7] = {
      id: 7,
      src: './images/8vo-proyecto-imagen.png',
      title: '8vo Proyecto',
      subtitle: 'Mi portafolio con Angular',
    };
  }
}
