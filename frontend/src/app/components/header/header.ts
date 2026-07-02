import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GITHUB_PROFILE_URL } from '../../data/socials';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly scrollService = inject(ScrollService);

  readonly githubUrl = GITHUB_PROFILE_URL;

  navigate(id: string): void {
    this.scrollService.scrollTo(id);
  }
}
