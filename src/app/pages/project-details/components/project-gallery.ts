import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ProjectDetail } from '../../../models/project.model';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <section class="gallery-section" *ngIf="project && project.gallery.length">
      <div class="gallery-content">
        <span class="card-header-label">GALLERY</span>
        
        <div class="gallery-grid">
          <div *ngFor="let item of project.gallery" class="gallery-item-card">
            <div class="gallery-img-wrapper">
              <img [src]="item.imageUrl || item.url" [alt]="item.alt || item.title || 'Gallery image'" class="gallery-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      margin-bottom: 5rem;
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

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.8rem;
      align-items: start;
    }

    .gallery-item-card {
      display: flex;
      flex-direction: column;
      background: #FFFFFF;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(184, 176, 162, 0.25);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .gallery-item-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
    }

    .gallery-img-wrapper {
      width: 100%;
      overflow: hidden;
      background-color: #FAF6F0;
    }

    .gallery-img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.4s ease;
    }

    .gallery-item-card:hover .gallery-img {
      transform: scale(1.02);
    }

    @media (max-width: 768px) {
      .gallery-section {
        margin-bottom: 3rem;
      }
      .gallery-grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
      }
    }
  `]
})
export class ProjectGallery {
  @Input({ required: true }) project!: ProjectDetail;
}
