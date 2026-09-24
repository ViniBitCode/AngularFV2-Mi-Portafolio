import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';
import { LanguageService } from '../../services/language.service';

/**
 * Lightbox retro para ver un certificado en grande. Usa `<dialog>` nativo
 * (foco atrapado, Escape, backdrop) y permite navegar entre certificados
 * con los botones o las flechas del teclado.
 */
@Component({
  selector: 'app-certificate-lightbox',
  templateUrl: './certificate-lightbox.html',
  styleUrl: './certificate-lightbox.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CertificateLightbox {
  private readonly document = inject(DOCUMENT);
  private readonly coursesService = inject(CoursesService);
  private readonly langService = inject(LanguageService);
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  readonly courses = input.required<Course[]>();
  readonly ui = this.langService.ui;

  readonly index = signal(0);
  readonly total = computed(() => this.courses().length);
  readonly current = computed<Course | null>(() => this.courses()[this.index()] ?? null);

  open(index: number): void {
    this.index.set(index);
    const dialog = this.dialog().nativeElement;
    if (!dialog.open) {
      dialog.showModal();
      this.document.body.style.overflow = 'hidden';
    }
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  /** Se dispara al cerrar por cualquier vía (botón, Escape, backdrop). */
  onClosed(): void {
    this.document.body.style.overflow = '';
  }

  prev(): void {
    this.index.update((i) => (i - 1 + this.total()) % this.total());
  }

  next(): void {
    this.index.update((i) => (i + 1) % this.total());
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === this.dialog().nativeElement) {
      this.close();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.total() < 2) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    }
  }

  imageUrl(course: Course): string {
    return this.coursesService.imageUrl(course);
  }

  formatDate(date: string): string {
    return this.coursesService.formatDate(date, this.langService.lang());
  }
}
