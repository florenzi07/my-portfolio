import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProjectDetail } from '../../../models/project.model';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <section class="overview-section" *ngIf="project">
      <div class="overview-grid">
        <!-- Left Side: Overview / Challenge / Solution -->
        <div class="case-study-column">
          <!-- Overview Block -->
          <div class="case-study-block">
            <div class="block-header">
              <span class="block-icon">📋</span>
              <span class="block-label">OVERVIEW</span>
            </div>
            <p class="block-text">{{ project.overview }}</p>
          </div>

          <!-- Challenge Block -->
          <div class="case-study-block">
            <div class="block-header">
              <span class="block-icon">🎯</span>
              <span class="block-label">THE CHALLENGE</span>
            </div>
            <p class="block-text">{{ project.challenge }}</p>
          </div>

          <!-- Solution Block -->
          <div class="case-study-block">
            <div class="block-header">
              <span class="block-icon">💡</span>
              <span class="block-label">THE SOLUTION</span>
            </div>
            <p class="block-text">{{ project.solution }}</p>
          </div>
        </div>

        <!-- Right Side: Main Preview Card + 4 Feature Highlights -->
        <div class="preview-column">
          <!-- Large Feature Card Screenshot -->
          <div class="featured-card-wrapper">
            <img [src]="project.heroImageUrl" [alt]="project.title" class="featured-img" />
          </div>

          <!-- 4 Feature Cards Grid -->
          <div class="feature-highlights-grid">
            <div *ngFor="let feat of project.features" class="highlight-card">
              <div class="highlight-icon">{{ formatIcon(feat.icon) }}</div>
              <h4 class="highlight-title">{{ feat.title }}</h4>
              <p class="highlight-desc">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .overview-section {
      margin-bottom: 5rem;
    }

    .overview-grid {
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      gap: 3.5rem;
      align-items: start;
    }

    /* Left Column */
    .case-study-column {
      display: flex;
      flex-direction: column;
      gap: 2.2rem;
    }

    .case-study-block {
      background-color: rgba(255, 255, 255, 0.4);
      padding: 1.6rem 1.8rem;
      border-radius: 14px;
      border: 1px solid rgba(184, 176, 162, 0.25);
    }

    .block-header {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 0.8rem;
    }

    .block-icon {
      font-size: 1.1rem;
    }

    .block-label {
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: #C59B27;
      text-transform: uppercase;
    }

    .block-text {
      font-size: 0.95rem;
      line-height: 1.65;
      color: #4A453E;
    }

    /* Right Column */
    .preview-column {
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
    }

    .featured-card-wrapper {
      width: 100%;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(184, 176, 162, 0.3);
      background-color: #FAF6F0;
    }

    .featured-img {
      width: 100%;
      height: auto;
      display: block;
    }

    .feature-highlights-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .highlight-card {
      background: #FAF6F0;
      border: 1px solid rgba(184, 176, 162, 0.35);
      border-radius: 12px;
      padding: 1.2rem 0.9rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .highlight-icon {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    .highlight-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: #1F1C18;
      margin-bottom: 0.3rem;
    }

    .highlight-desc {
      font-size: 0.72rem;
      line-height: 1.4;
      color: #6D675E;
    }

    @media (max-width: 1024px) {
      .overview-section {
        margin-bottom: 3rem;
      }
      .overview-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .feature-highlights-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 540px) {
      .feature-highlights-grid {
        grid-template-columns: 1fr;
      }
      .case-study-block {
        padding: 1.25rem 1.1rem;
      }
    }

    @media (max-width: 374px) {
      .case-study-block {
        padding: 1rem 0.85rem;
      }
      .block-text {
        font-size: 0.88rem;
      }
    }
  `]
})
export class ProjectOverview {
  @Input({ required: true }) project!: ProjectDetail;

  formatIcon(icon?: string): string {
    if (!icon) return '⚡';
    const iconMap: Record<string, string> = {
      briefcase: '💼',
      users: '👥',
      calendar: '📅',
      'file-text': '📄',
      wallet: '💳',
      chart: '📊',
      bell: '🔔',
      shield: '🛡️',
    };
    return iconMap[icon] || icon;
  }
}
