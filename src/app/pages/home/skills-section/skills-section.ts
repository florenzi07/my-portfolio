/* ═══════════════════════════════════════════════════════════════
   SKILLS & TOOLS — Angular Component (TypeScript)
   GSAP Timeline · Path Sparkles · Mouse Parallax
   ═══════════════════════════════════════════════════════════════ */

import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  afterNextRender,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import gsap from 'gsap';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection implements OnDestroy {

  /* ── View Element References ── */
  @ViewChild('skillsSection') sectionRef!: ElementRef<HTMLElement>;
  @ViewChild('divider')       dividerRef!: ElementRef<HTMLElement>;
  @ViewChild('core')          coreRef!:    ElementRef<HTMLElement>;
  @ViewChild('dock')          dockRef!:    ElementRef<HTMLElement>;

  /* ── Injection Tokens ── */
  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  /* ── Internal State ── */
  private ctx?: gsap.Context;
  private masterTl?: gsap.core.Timeline;
  private sparkleTimelines: gsap.core.Timeline[] = [];
  
  private mouseX = 0;
  private mouseY = 0;
  private targetMouseX = 0;
  private targetMouseY = 0;
  private rafId = 0;
  private isSectionVisible = false;

  /* ── Bound Event Handlers ── */
  private readonly onMouseMove = (e: MouseEvent): void => {
    const section = this.sectionRef?.nativeElement;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    
    // Normalize coordinates from -1 to 1
    this.targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    this.targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  constructor() {
    // Only run browser-specific animation setups when running in browser mode (SSR safe)
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      this.ngZone.runOutsideAngular(() => {
        this.initAnimations();
        this.initParallax();
      });
    });
  }

  /* ──────────────────────────────────────────────
     GSAP Master Animation Timeline
     ────────────────────────────────────────────── */
  private initAnimations(): void {
    const section = this.sectionRef.nativeElement;
    const header  = section.querySelector('.skills__header') as HTMLElement;
    const divider = section.querySelector('.skills__diamond-line') as HTMLElement;
    const core    = this.coreRef.nativeElement;
    const dock    = this.dockRef.nativeElement;

    // SVG paths
    const paths = Array.from(section.querySelectorAll('.skills__path')) as SVGPathElement[];

    // Cards & list items
    const cards = Array.from(section.querySelectorAll('.skills__card')) as HTMLElement[];
    const dockItems = Array.from(section.querySelectorAll('.skills__dock-item')) as HTMLElement[];

    this.ctx = gsap.context(() => {
      
      // SVG Glow Paths & Nodes
      const glowPaths = Array.from(section.querySelectorAll('.skills__path-glow')) as SVGPathElement[];
      const nodes = Array.from(section.querySelectorAll('.skills__node-glow')) as SVGCircleElement[];

      // Initialize states to prepare for entry timeline
      gsap.set(header, { opacity: 0, y: 30 });
      gsap.set(core, { opacity: 0, scale: 0.8 });
      gsap.set(cards, { opacity: 0, y: 40 });
      gsap.set(dock, { opacity: 0, y: 30 });
      gsap.set(dockItems, { opacity: 0, y: 15 });
      gsap.set(nodes, { scale: 0, transformOrigin: '50% 50%' });
      gsap.set(paths, { opacity: 0 });
      gsap.set(glowPaths, { opacity: 0 });

      /* ── 1. Create Paused Master Timeline ── */
      this.masterTl = gsap.timeline({
        paused: true,
        defaults: {
          ease: 'power3.out',
        },
      });

      const tl = this.masterTl;

      // Create IntersectionObserver to trigger animations and tickParallax reliably
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.isSectionVisible = true;
            this.masterTl?.play();
            dock.classList.add('skills__dock--visible');
            this.startSparkles(paths);
            observer.disconnect();
          }
        });
      }, { threshold: 0.15 });
      observer.observe(section);

      // 1. Reveal Header Title & drawing line (divider draws left to right)
      tl.to(header, {
        opacity: 1,
        y: 0,
        duration: 1,
      }, 0)
      .fromTo(divider, {
        scaleX: 0,
        transformOrigin: 'left center'
      }, {
        scaleX: 1,
        duration: 1.5,
        ease: 'power2.inOut',
      }, 0.2);

      // 2. Scale the central circle from 0.8 to 1
      tl.to(core, {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'back.out(1.5)',
      }, 0.8);

      // 3. Fade in connection lines — opacity only, no dasharray clipping
      tl.to(paths, {
        opacity: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power2.inOut',
      }, 1.2);

      tl.to(glowPaths, {
        opacity: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power2.inOut',
      }, 1.2);

      // Animate connector buttons/nodes scaling up
      tl.to(nodes, {
        scale: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: 'back.out(2)',
      }, 2.0);

      // 4. Fade in the four cards with 0.2s staggered delay
      cards.forEach((card, i) => {
        tl.to(card, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }, 1.6 + i * 0.2);

        // 5. Inside each card, reveal list items sequentially
        const items = Array.from(card.querySelectorAll('.skills__card-item'));
        tl.to(items, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
        }, 2.0 + i * 0.15);
      });

      // 6. Tools dock slide up and individual items reveal
      tl.to(dock, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      }, 2.8);

      tl.to(dockItems, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'back.out(1.3)',
      }, 3.0);

    }, section);
  }

  /* ──────────────────────────────────────────────
     Sparkle Particle Path Followers
     ────────────────────────────────────────────── */
  private startSparkles(paths: SVGPathElement[]): void {
    const section = this.sectionRef.nativeElement;
    
    paths.forEach((path, i) => {
      const sparkle = section.querySelector(`#sparkle${i + 1}`) as SVGCircleElement;
      if (!sparkle) return;

      const pathLength = path.getTotalLength();
      const sparkleObj = { progress: 0 };

      // Set initial position at center (0 on path)
      const startPt = path.getPointAtLength(0);
      gsap.set(sparkle, { cx: startPt.x, cy: startPt.y, opacity: 0 });

      // Create an infinite loop timeline for each sparkle particle
      const sparkleTl = gsap.timeline({ repeat: -1, delay: i * 0.8 });
      
      sparkleTl.to(sparkleObj, {
        progress: 1,
        duration: 4 + Math.random() * 2,
        ease: 'power1.inOut',
        onStart: () => {
          gsap.set(sparkle, { opacity: 1 });
        },
        onUpdate: () => {
          // Calculate point along path from core outward
          const dist = sparkleObj.progress * pathLength; 
          const pt = path.getPointAtLength(dist);
          sparkle.setAttribute('cx', pt.x.toString());
          sparkle.setAttribute('cy', pt.y.toString());
        },
        onComplete: () => {
          gsap.set(sparkle, { opacity: 0 });
        }
      });

      this.sparkleTimelines.push(sparkleTl);
    });
  }

  /* ──────────────────────────────────────────────
     Smooth Mouse Parallax Engine (RAF-based)
     ────────────────────────────────────────────── */
  private initParallax(): void {
    const section = this.sectionRef.nativeElement;
    section.addEventListener('mousemove', this.onMouseMove, { passive: true });
    this.tickParallax();
  }

  private tickParallax = (): void => {
    if (this.isSectionVisible) {
      // Linear interpolation to make the movement ultra smooth
      this.mouseX += (this.targetMouseX - this.mouseX) * 0.08;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.08;

      const sectionEl = this.sectionRef.nativeElement;
      const cards = Array.from(sectionEl.querySelectorAll('.skills__card')) as HTMLElement[];
      const core = this.coreRef?.nativeElement;
      
      const mainPaths = Array.from(sectionEl.querySelectorAll('.skills__path')) as SVGPathElement[];
      const glowPaths = Array.from(sectionEl.querySelectorAll('.skills__path-glow')) as SVGPathElement[];
      const nodes = Array.from(sectionEl.querySelectorAll('.skills__node-glow')) as SVGCircleElement[];
      const svgEl = sectionEl.querySelector('.skills__connections') as SVGElement;

      // Apply parallax to core & cards first
      const coreX = this.mouseX * -10;
      const coreY = this.mouseY * -10;

      const cardOffsets = [
        { x: this.mouseX * 0.04 * 50, y: this.mouseY * 0.04 * 50 }, // TL
        { x: this.mouseX * 0.06 * 50, y: this.mouseY * 0.06 * 50 }, // TR
        { x: this.mouseX * 0.05 * 50, y: this.mouseY * 0.05 * 50 }, // BL
        { x: this.mouseX * 0.03 * 50, y: this.mouseY * 0.03 * 50 }, // BR
      ];

      // Instantly apply target parallax positions to core & cards so bounding rects update in the same frame
      if (core) {
        gsap.set(core, { x: coreX, y: coreY });
      }
      cards.forEach((el, i) => {
        const offset = cardOffsets[i];
        gsap.set(el, { x: offset.x, y: offset.y });
      });

      if (svgEl && core) {
        const svgRect = svgEl.getBoundingClientRect();
        const coreRect = core.getBoundingClientRect();

        // Calculate viewBox scaling parameters for preserveAspectRatio="xMidYMid meet"
        const vbWidth = 1000;
        const vbHeight = 680;
        const vbAspect = vbWidth / vbHeight;
        const containerAspect = svgRect.width / svgRect.height;
        
        let leftOffset = 0;
        let topOffset = 0;
        let scaledWidth = svgRect.width;
        let scaledHeight = svgRect.height;
        
        if (containerAspect > vbAspect) {
          // Container is wider than viewBox aspect ratio (letterbox on left/right)
          scaledWidth = svgRect.height * vbAspect;
          leftOffset = (svgRect.width - scaledWidth) / 2;
        } else {
          // Container is taller than viewBox aspect ratio (letterbox on top/bottom)
          scaledHeight = svgRect.width / vbAspect;
          topOffset = (svgRect.height - scaledHeight) / 2;
        }

        // Helper to convert screen coordinates to SVG viewBox coordinates
        const getSvgCoords = (screenX: number, screenY: number) => {
          const x = ((screenX - (svgRect.left + leftOffset)) / scaledWidth) * vbWidth;
          const y = ((screenY - (svgRect.top + topOffset)) / scaledHeight) * vbHeight;
          return { x, y };
        };

        // Calculate core center and radius in SVG viewBox space
        const coreCenter = getSvgCoords((coreRect.left + coreRect.right) / 2, (coreRect.top + coreRect.bottom) / 2);
        // outer ring radius is coreWidth / 2 + 12px (which is 12px beyond border). Convert to SVG scale:
        const r = (coreRect.width / 2 + 12) * (vbWidth / scaledWidth);

        // Calculate core connection points (nodes at 45 degree angles)
        const cos45 = 0.7071;
        const sin45 = 0.7071;

        const corePoints = [
          { x: coreCenter.x - r * cos45, y: coreCenter.y - r * sin45 }, // TL
          { x: coreCenter.x + r * cos45, y: coreCenter.y - r * sin45 }, // TR
          { x: coreCenter.x - r * cos45, y: coreCenter.y + r * sin45 }, // BL
          { x: coreCenter.x + r * cos45, y: coreCenter.y + r * sin45 }, // BR
        ];

        // Calculate card connection points (nodes centered vertically on the inner facing edge)
        const cardPoints = cards.map((card, i) => {
          const cardRect = card.getBoundingClientRect();
          const isLeft = (i === 0 || i === 2); // TL and BL are on the left
          
          // X is right edge for left cards, left edge for right cards
          const edgeX = isLeft ? cardRect.right : cardRect.left;
          const coords = getSvgCoords(edgeX, (cardRect.top + cardRect.bottom) / 2);
          if (i === 0) {
            console.log('DEBUG_COORD: cardRect.right:', cardRect.right, 'svgRect.left:', svgRect.left, 'svgRect.width:', svgRect.width, 'svgRect.height:', svgRect.height, 'leftOffset:', leftOffset, 'scaledWidth:', scaledWidth, 'computedX:', coords.x);
          }
          return coords;
        });

        // Update each path and node
        corePoints.forEach((cp, i) => {
          const tp = cardPoints[i];
          if (!tp) return;

          // Control points for nice S-curves:
          // We project horizontally from the connection nodes. 
          const isLeft = (i === 0 || i === 2);
          const ctrl1X = isLeft ? coreCenter.x - r * 0.45 : coreCenter.x + r * 0.45;
          const ctrl1Y = cp.y;
          const ctrl2X = isLeft ? tp.x + 40 : tp.x - 40;
          const ctrl2Y = tp.y;

          const pathStr = `M${cp.x.toFixed(1)},${cp.y.toFixed(1)} C${ctrl1X.toFixed(1)},${ctrl1Y.toFixed(1)} ${ctrl2X.toFixed(1)},${ctrl2Y.toFixed(1)} ${tp.x.toFixed(1)},${tp.y.toFixed(1)}`;

          if (mainPaths[i]) {
            mainPaths[i].setAttribute('d', pathStr);
          }
          if (glowPaths[i]) {
            glowPaths[i].setAttribute('d', pathStr);
          }

          // Core side nodes (0 to 3)
          if (nodes[i]) {
            nodes[i].setAttribute('cx', cp.x.toString());
            nodes[i].setAttribute('cy', cp.y.toString());
          }

          // Card side nodes (4 to 7)
          if (nodes[i + 4]) {
            nodes[i + 4].setAttribute('cx', tp.x.toString());
            nodes[i + 4].setAttribute('cy', tp.y.toString());
          }
        });
      }
    }

    this.rafId = requestAnimationFrame(this.tickParallax);
  };

  /* ──────────────────────────────────────────────
     Cleanup
     ────────────────────────────────────────────── */
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.sectionRef?.nativeElement?.removeEventListener('mousemove', this.onMouseMove);
    }

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }

    this.sparkleTimelines.forEach(tl => tl.kill());
    this.masterTl?.kill();
    this.ctx?.revert();
  }
}
