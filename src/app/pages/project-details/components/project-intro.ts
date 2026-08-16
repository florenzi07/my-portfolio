import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProjectDetail } from '../../../models/project.model';

@Component({
  selector: 'app-project-intro',
  standalone: true,
  imports: [NgIf],
  template: `
    <section class="intro-section" *ngIf="project">
      <div class="intro-grid">
        <!-- Left Column -->
        <div class="intro-left">
          <span class="category-tag">{{ project.category }}</span>
          <h1 class="project-title">{{ project.title }}</h1>
          <p class="project-subtitle">{{ project.subtitle }}</p>
        </div>

        <!-- Right Column -->
        <div class="intro-right">
          <p class="full-description">{{ project.shortDescription }}</p>
          <p class="detailed-text" *ngIf="project.fullDescription">
            {{ project.fullDescription }}
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .intro-section {
      margin-bottom: 4rem;
    }

    .intro-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3.5rem;
      align-items: start;
    }

    .category-tag {
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #C59B27;
      display: block;
      margin-bottom: 0.8rem;
    }

    .project-title {
      font-family: var(--font-serif, Playfair Display, Georgia, serif);
      font-size: clamp(3rem, 5vw, 4.5rem);
      font-weight: 400;
      line-height: 1.05;
      color: #1F1C18;
      margin-bottom: 0.8rem;
      letter-spacing: -0.02em;
    }

    .project-subtitle {
      font-size: 1.1rem;
      color: #5C564E;
      line-height: 1.5;
      margin-bottom: 1.8rem;
      font-weight: 400;
    }

    .tech-badges-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .tech-badge-chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.85rem;
      background-color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(184, 176, 162, 0.4);
      border-radius: 8px;
      font-size: 0.82rem;
      font-weight: 600;
      color: #2D2926;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
    }

    .tech-icon {
      font-size: 0.9rem;
    }

    .intro-right {
      padding-top: 2rem;
    }

    .full-description {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #38332E;
      margin-bottom: 1rem;
      font-weight: 400;
    }

    .detailed-text {
      font-size: 0.95rem;
      line-height: 1.65;
      color: #6D675E;
    }

    @media (max-width: 900px) {
      .intro-section {
        margin-bottom: 2.5rem;
      }

      .intro-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .intro-right {
        padding-top: 0;
      }
    }

    @media (max-width: 430px) {
      .project-title {
        font-size: clamp(2rem, 8.5vw, 2.8rem);
      }

      .project-subtitle {
        font-size: 0.98rem;
        margin-bottom: 1.2rem;
      }

      .full-description {
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  `]
})
export class ProjectIntro {
  @Input({ required: true }) project!: ProjectDetail;
}
