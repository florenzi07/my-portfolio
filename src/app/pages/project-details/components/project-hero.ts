import {
  Component,
  Input,
  signal,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ProjectDetail } from '../../../models/project.model';

@Component({
  selector: 'app-project-hero',
  standalone: true,
  imports: [],
  template: `
    @if (project) {
      <div class="hero-media-container">
        <div class="media-frame">
          <!-- Video element when heroVideoUrl exists -->
          @if (project.heroVideoUrl) {
            <video
              #videoRef
              [src]="encodeUrl(project.heroVideoUrl)"
              [poster]="project.heroImageUrl"
              class="hero-video"
              playsinline
              (timeupdate)="onTimeUpdate()"
              (ended)="onEnded()"
              (click)="togglePlay()"
            ></video>
          } @else {
            <!-- Image fallback when no video exists -->
            <img
              [src]="project.heroImageUrl"
              [alt]="project.title"
              class="hero-img"
            />
          }

          <!-- Video Player Overlay Controls -->
          <div
            class="video-overlay"
            [class.hidden]="isPlaying()"
            (click)="togglePlay()"
          >
            <button
              class="play-btn"
              type="button"
              [attr.aria-label]="isPlaying() ? 'Pause' : 'Play'"
            >
              @if (!isPlaying()) {
                <span>&#9654;</span>
              } @else {
                <span>&#10074;&#10074;</span>
              }
            </button>
          </div>

          <!-- Video Control Bar -->
          @if (project.heroVideoUrl) {
            <div class="control-bar">
              <button
                class="small-play-btn"
                type="button"
                (click)="togglePlay()"
              >
                @if (!isPlaying()) {
                  <span>&#9654;</span>
                } @else {
                  <span>&#10074;&#10074;</span>
                }
              </button>

              <span class="time-code">{{ formattedTime() }}</span>

              <div
                class="progress-track"
                (click)="seekVideo($event)"
              >
                <div
                  class="progress-fill"
                  [style.width.%]="progressPercent()"
                ></div>
                <div
                  class="progress-thumb"
                  [style.left.%]="progressPercent()"
                ></div>
              </div>

              <div class="control-icons">
                <span
                  class="icon"
                  title="Volume"
                  (click)="toggleMute()"
                >
                  {{ isMuted() ? '🔇' : '🔊' }}
                </span>
                <span
                  class="icon"
                  title="Fullscreen"
                  (click)="toggleFullscreen()"
                >
                  &#9974;
                </span>
              </div>
            </div>
          }
        </div>
      </div>
    }
  `,
  styles: [
    `
      .hero-media-container {
        width: 100%;
        margin-bottom: 3.5rem;
      }

      .media-frame {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        background-color: #0a0a0a;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }

      .hero-video,
      .hero-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }

      .video-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: opacity 0.3s ease;
      }

      .video-overlay.hidden {
        opacity: 0;
        pointer-events: none;
      }

      .media-frame:hover .video-overlay.hidden {
        opacity: 1;
        pointer-events: auto;
        background: rgba(0, 0, 0, 0.25);
      }

      .play-btn {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1.5px solid rgba(255, 255, 255, 0.5);
        color: #ffffff;
        font-size: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition:
          transform 0.25s ease,
          background 0.25s ease;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        padding-left: 4px;
      }

      .video-overlay:hover .play-btn {
        transform: scale(1.08);
        background: rgba(255, 255, 255, 0.35);
      }

      .control-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
        display: flex;
        align-items: center;
        padding: 0 1.2rem;
        gap: 1rem;
        color: #e2e8f0;
        font-size: 0.8rem;
        font-family: var(--font-mono, monospace);
        z-index: 10;
      }

      .small-play-btn {
        background: none;
        border: none;
        color: #ffffff;
        cursor: pointer;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
      }

      .time-code {
        font-size: 0.78rem;
        color: rgba(255, 255, 255, 0.85);
        white-space: nowrap;
      }

      .progress-track {
        position: relative;
        flex: 1;
        height: 6px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 3px;
        cursor: pointer;
      }

      .progress-fill {
        height: 100%;
        background: #c59b27;
        border-radius: 3px;
        transition: width 0.1s linear;
      }

      .progress-thumb {
        position: absolute;
        top: 50%;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ffffff;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
      }

      .control-icons {
        display: flex;
        gap: 0.8rem;
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.85);
      }

      .icon {
        cursor: pointer;
        transition: color 0.2s ease;
      }

      .icon:hover {
        color: #ffffff;
      }

      @media (max-width: 768px) {
        .hero-media-container {
          margin-bottom: 2rem;
        }
        .play-btn {
          width: 56px;
          height: 56px;
          font-size: 1.2rem;
        }
        .control-bar {
          font-size: 0.7rem;
          padding: 0 0.8rem;
          gap: 0.6rem;
          height: 44px;
        }
        .small-play-btn, .icon {
          min-width: 36px;
          min-height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      }

      @media (max-width: 430px) {
        .media-frame {
          border-radius: 10px;
        }
        .play-btn {
          width: 48px;
          height: 48px;
          font-size: 1rem;
        }
      }
    `,
  ],
})
export class ProjectHero {
  @Input({ required: true }) project!: ProjectDetail;

  @ViewChild('videoRef') videoRef?: ElementRef<HTMLVideoElement>;

  isPlaying = signal<boolean>(false);
  isMuted = signal<boolean>(false);
  progressPercent = signal<number>(0);
  formattedTime = signal<string>('0:00 / 0:00');

  encodeUrl(url?: string): string {
    if (!url) return '';
    return encodeURI(url);
  }

  togglePlay(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => {
          this.isPlaying.set(true);
        })
        .catch(err => console.log('Video play error:', err));
    } else {
      video.pause();
      this.isPlaying.set(false);
    }
  }

  onTimeUpdate(): void {
    const video = this.videoRef?.nativeElement;
    if (!video || !video.duration) return;

    const percent = (video.currentTime / video.duration) * 100;
    this.progressPercent.set(percent);

    const cur = this.formatSeconds(video.currentTime);
    const dur = this.formatSeconds(video.duration);
    this.formattedTime.set(`${cur} / ${dur}`);
  }

  onEnded(): void {
    this.isPlaying.set(false);
    this.progressPercent.set(0);
  }

  seekVideo(event: MouseEvent): void {
    const video = this.videoRef?.nativeElement;
    if (!video || !video.duration) return;

    const track = event.currentTarget as HTMLElement;
    const rect = track.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = ratio * video.duration;
    this.progressPercent.set(ratio * 100);
  }

  toggleMute(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;

    video.muted = !video.muted;
    this.isMuted.set(video.muted);
  }

  toggleFullscreen(): void {
    const video = this.videoRef?.nativeElement;
    if (!video) return;

    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }

  private formatSeconds(sec: number): string {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
