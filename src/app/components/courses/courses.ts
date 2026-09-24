import { ChangeDetectionStrategy, Component, inject, viewChild } from '@angular/core';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';
import { LanguageService } from '../../services/language.service';
import { CertificateLightbox } from '../certificate-lightbox/certificate-lightbox';

/**
 * Sección "Cursos": grilla de certificados (imagen, nombre, institución y
 * fecha). Al hacer clic en una tarjeta se abre el certificado en grande en
 * un lightbox. Los datos vienen de `courses.data.ts` y las imágenes de
 * `public/certificados/`.
 */
@Component({
  selector: 'app-courses',
  imports: [CertificateLightbox],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Courses {
  private readonly coursesService = inject(CoursesService);
  private readonly langService = inject(LanguageService);
  private readonly lightbox = viewChild(CertificateLightbox);

  readonly ui = this.langService.ui;
  readonly courses = this.coursesService.getCourses();

  imageUrl(course: Course): string {
    return this.coursesService.imageUrl(course);
  }

  formatDate(date: string): string {
    return this.coursesService.formatDate(date, this.langService.lang());
  }

  open(index: number): void {
    this.lightbox()?.open(index);
  }
}
