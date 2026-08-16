import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-nav',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="project-nav">
      <a [routerLink]="['/']" class="back-link">
        <span class="arrow">&larr;</span> Back to Projects
      </a>
    </header>
  `,
  styles: [`
    .project-nav {
      display: flex;
      align-items: center;
      padding: 1.5rem 0;
      margin-bottom: 2rem;
      font-size: 0.9rem;
      color: var(--pd-text-muted, #5C564E);
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #1F1C18;
      font-weight: 600;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .back-link:hover {
      opacity: 0.7;
      transform: translateX(-2px);
    }

    .arrow {
      font-size: 1.1rem;
    }
  `]
})
export class ProjectNav {}
