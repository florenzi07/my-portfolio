import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProjectDetail } from '../../../models/project.model';

@Component({
  selector: 'app-project-responsive',
  standalone: true,
  imports: [NgIf],
  template: `
    <section class="responsive-section" *ngIf="project">
      <div class="devices-row">
        <!-- Laptop Screen Mockup -->
        <div class="device-item desktop-device">
          <div class="laptop-frame">
            <div class="laptop-camera"></div>
            <div class="laptop-screen">
              <img
                [src]="project.responsiveScreens?.desktop || project.heroImageUrl"
                [alt]="project.title + ' Desktop View'"
              />
            </div>
          </div>
          <span class="device-label">Desktop View</span>
        </div>

        <!-- Tablet Mockup -->
        <div class="device-item tablet-device">
          <div class="tablet-frame">
            <div class="tablet-camera"></div>
            <div class="tablet-screen">
              <img
                [src]="project.responsiveScreens?.tablet || project.heroImageUrl"
                [alt]="project.title + ' Tablet View'"
              />
            </div>
          </div>
          <span class="device-label">Tablet View</span>
        </div>

        <!-- Smartphone Mockup -->
        <div class="device-item mobile-device">
          <div class="phone-frame">
            <div class="phone-notch"></div>
            <div class="phone-screen">
              <img
                [src]="project.responsiveScreens?.mobile || project.heroImageUrl"
                [alt]="project.title + ' Mobile View'"
              />
            </div>
          </div>
          <span class="device-label">Mobile View</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .responsive-section {
      margin-bottom: 5rem;
    }

    .devices-row {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      gap: 2rem;
      padding: 1rem 0;
    }

    .device-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
    }

    .device-label {
      font-size: 0.78rem;
      font-weight: 600;
      color: #6D675E;
    }

    /* Laptop Frame */
    .laptop-frame {
      width: 480px;
      aspect-ratio: 16 / 10;
      background: #1E1E1E;
      border-radius: 12px 12px 0 0;
      padding: 10px 10px 0;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.14);
      position: relative;
    }

    .laptop-camera {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #3A3A3A;
      margin: 0 auto 6px;
    }

    .laptop-screen {
      width: 100%;
      height: calc(100% - 12px);
      overflow: hidden;
      border-radius: 4px 4px 0 0;
      background: #000;
    }

    .laptop-screen img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Tablet Frame */
    .tablet-frame {
      width: 220px;
      aspect-ratio: 3 / 4;
      background: #1E1E1E;
      border-radius: 16px;
      padding: 12px;
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
      position: relative;
    }

    .tablet-camera {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #3A3A3A;
      position: absolute;
      top: 5px;
      left: 50%;
      transform: translateX(-50%);
    }

    .tablet-screen {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 8px;
      background: #000;
    }

    .tablet-screen img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Mobile Frame */
    .phone-frame {
      width: 120px;
      aspect-ratio: 9 / 19;
      background: #1E1E1E;
      border-radius: 20px;
      padding: 8px;
      box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
      position: relative;
    }

    .phone-notch {
      width: 40px;
      height: 12px;
      background: #1E1E1E;
      border-radius: 0 0 8px 8px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }

    .phone-screen {
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 14px;
      background: #000;
    }

    .phone-screen img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 900px) {
      .responsive-section {
        margin-bottom: 3rem;
      }
      .devices-row {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
      .laptop-frame {
        width: 100%;
        max-width: 440px;
      }
    }

    @media (max-width: 480px) {
      .laptop-frame {
        max-width: 300px;
        padding: 6px 6px 0;
      }
      .tablet-frame {
        width: 180px;
      }
      .phone-frame {
        width: 110px;
      }
    }
  `]
})
export class ProjectResponsive {
  @Input({ required: true }) project!: ProjectDetail;
}
