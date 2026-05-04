import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  navigate(id: string) {
    const nombre_componente = document.getElementById(id);
    if (nombre_componente) {
      nombre_componente.scrollIntoView({
        behavior: 'smooth', // Animación suave
        block: 'start', // Alinea al inicio de la sección
        inline: 'nearest',
      });
    }
  }
}
