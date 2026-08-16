import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProjectDetail } from '../../../models/project.model';

@Component({
  selector: 'app-project-features-tech',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <section class="features-tech-section" *ngIf="project">
      <div class="features-tech-grid">
        <!-- Left: Key Features Box -->
        <div class="key-features-card">
          <span class="card-header-label">KEY FEATURES</span>
          <ul class="features-checklist">
            <li *ngFor="let item of project.keyFeaturesList" class="checklist-item">
              <span class="check-icon">✓</span>
              <span class="check-text">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Right: Dynamic Technologies Grid Box -->
        <div class="technologies-card">
          <span class="card-header-label">TECHNOLOGIES</span>
          <div class="tech-grid">
            <div *ngFor="let tech of project.technologies" class="tech-item-card">
              <div class="tech-logo-wrapper">
                <span class="tech-logo">{{ tech.icon || '⚡' }}</span>
              </div>
              <span class="tech-title">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features-tech-section {
      margin-bottom: 5rem;
    }

    .features-tech-grid {
      display: grid;
      grid-template-columns: 0.8fr 1.2fr;
      gap: 2.5rem;
      align-items: stretch;
    }

    /* Common Card Styling */
    .key-features-card,
    .technologies-card {
      background: #FAF6F0;
      border: 1px solid rgba(184, 176, 162, 0.35);
      border-radius: 16px;
      padding: 2.2rem 2rem;
      display: flex;
      flex-direction: column;
    }

    .card-header-label {
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: #C59B27;
      text-transform: uppercase;
      margin-bottom: 1.6rem;
      display: block;
    }

    /* Key Features Checklist */
    .features-checklist {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.85rem;
    }

    .checklist-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.92rem;
      color: #2D2926;
      font-weight: 500;
    }

    .check-icon {
      color: #C59B27;
      font-weight: 800;
      font-size: 0.95rem;
    }

    /* Technologies Grid */
    .tech-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem 1rem;
    }

    .tech-item-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 0.8rem 0.5rem;
      background-color: rgba(255, 255, 255, 0.6);
      border: 1px solid rgba(184, 176, 162, 0.25);
      border-radius: 12px;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .tech-item-card:hover {
      transform: translateY(-2px);
      border-color: #C59B27;
    }

    .tech-logo-wrapper {
      width: 42px;
      height: 42px;
      border-radius: 10px;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
      font-size: 1.3rem;
    }

    .tech-title {
      font-size: 0.8rem;
      font-weight: 600;
      color: #1F1C18;
      text-align: center;
    }

    @media (max-width: 900px) {
      .features-tech-section {
        margin-bottom: 3rem;
      }
      .features-tech-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .tech-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (max-width: 500px) {
      .key-features-card,
      .technologies-card {
        padding: 1.5rem 1.25rem;
      }
      .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem 0.75rem;
      }
    }

    @media (max-width: 374px) {
      .key-features-card,
      .technologies-card {
        padding: 1.2rem 0.9rem;
      }
      .checklist-item {
        font-size: 0.85rem;
      }
    }
  `]
})
export class ProjectFeaturesTech {
  @Input({ required: true }) project!: ProjectDetail;
}
