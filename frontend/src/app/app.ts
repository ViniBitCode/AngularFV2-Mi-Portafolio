import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { PresentationBody } from "./components/presentation-body/presentation-body";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, PresentationBody],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
