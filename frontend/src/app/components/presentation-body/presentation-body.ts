import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-presentation-body',
  imports: [NgOptimizedImage],
  templateUrl: './presentation-body.html',
  styleUrl: './presentation-body.scss',
})
export class PresentationBody {}
