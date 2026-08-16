import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProjectDetail } from '../../../models/project.model';

@Component({
  selector: 'app-project-links',
  standalone: true,
  imports: [NgIf],
  template: `
    <section class="links-section" *ngIf="project">
      <span class="card-header-label">PROJECT LINKS</span>

      <div class="links-grid">
        <!-- Action Buttons -->
        <div class="buttons-group">
          <a
            [href]="project.liveDemoUrl || '#'"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            Live Demo <span class="external-arrow">↗</span>
          </a>

          <a
            [href]="project.githubUrl || '#'"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-secondary"
          >
            <svg class="github-icon" viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub Repository
          </a>
        </div>

        <!-- Designer Quote Callout Box -->
        <div class="quote-callout" *ngIf="project.quote">
          <span class="star-icon">⭐</span>
          <p class="quote-text">{{ project.quote }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .links-section {
      margin-bottom: 5rem;
    }

    .card-header-label {
      font-size: 0.78rem;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: #C59B27;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
      display: block;
    }

    .links-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
    }

    .buttons-group {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 0.85rem 1.6rem;
      border-radius: 10px;
      font-size: 0.9rem;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
      cursor: pointer;
    }

    .btn-primary {
      background-color: #C59B27;
      color: #FFFFFF;
      border: 1px solid #B8860B;
      box-shadow: 0 4px 12px rgba(197, 155, 39, 0.25);
    }

    .btn-primary:hover {
      background-color: #B28A20;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(197, 155, 39, 0.35);
    }

    .btn-secondary {
      background-color: #FFFFFF;
      color: #1F1C18;
      border: 1px solid rgba(184, 176, 162, 0.5);
    }

    .btn-secondary:hover {
      background-color: #FAF6F0;
      transform: translateY(-2px);
    }

    .external-arrow {
      font-size: 1rem;
    }

    .quote-callout {
      background: #FAF6F0;
      border: 1px solid rgba(184, 176, 162, 0.35);
      border-radius: 12px;
      padding: 1.2rem 1.4rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .star-icon {
      font-size: 1.4rem;
      flex-shrink: 0;
    }

    .quote-text {
      font-size: 0.88rem;
      color: #4A453E;
      line-height: 1.5;
      font-weight: 500;
    }

    @media (max-width: 900px) {
      .links-section {
        margin-bottom: 3rem;
      }
      .links-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      .buttons-group {
        flex-wrap: wrap;
      }
      .btn {
        min-height: 44px;
      }
    }

    @media (max-width: 480px) {
      .buttons-group {
        flex-direction: column;
        width: 100%;
      }
      .btn {
        width: 100%;
      }
    }
  `]
})
export class ProjectLinks {
  @Input({ required: true }) project!: ProjectDetail;
}
