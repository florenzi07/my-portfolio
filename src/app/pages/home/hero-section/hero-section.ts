import { Component, ElementRef, OnDestroy, ViewChild, afterNextRender, inject, NgZone } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnDestroy {
  @ViewChild('heroSection') heroSectionRef!: ElementRef<HTMLElement>;
  @ViewChild('heroImage') heroImageRef!: ElementRef<HTMLElement>;
  @ViewChild('lineOne') lineOneRef!: ElementRef<HTMLElement>;
  @ViewChild('lineTwo') lineTwoRef!: ElementRef<HTMLElement>;
  @ViewChild('lineThree') lineThreeRef!: ElementRef<HTMLElement>;
  @ViewChild('signatureContainer') signatureContainerRef!: ElementRef<HTMLElement>;
  @ViewChild('pen') penRef!: ElementRef<HTMLElement>;
  @ViewChild('cvButton') cvButtonRef!: ElementRef<HTMLElement>;

  private readonly ngZone = inject(NgZone);

  private ctx?: gsap.Context;
  private entranceTl?: gsap.core.Timeline;

  // Scanner state fields
  private targetX = 0;
  private targetY = 0;
  private targetRadius = 0;
  private currentX = 0;
  private currentY = 0;
  private currentRadius = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    afterNextRender(() => {
      this.ngZone.runOutsideAngular(() => {
        gsap.registerPlugin(ScrollTrigger);
        this.buildEntranceAnimation();
        this.buildScrollAnimation();
        this.setupScanner();
      });
    });
  }

  private buildEntranceAnimation(): void {
    const imageWrap = this.heroImageRef.nativeElement;
    const line1 = this.lineOneRef.nativeElement;
    const line2 = this.lineTwoRef.nativeElement;
    const line3 = this.lineThreeRef.nativeElement;

    gsap.set([line1, line2, line3], { left: '50%', xPercent: -50 });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set(imageWrap, { autoAlpha: 1, xPercent: -50, yPercent: -50, y: 0, rotateX: 0, rotateZ: 0 });
      gsap.set(line1, { autoAlpha: 1, xPercent: -50, y: 0, filter: 'blur(0px)' });
      return;
    }

    if (window.scrollY > 5 || document.documentElement.scrollTop > 5) {
      gsap.set(imageWrap, { autoAlpha: 1, xPercent: -50, yPercent: -50, y: 0, rotateX: 0, rotateZ: 0 });
      gsap.set(line1, { autoAlpha: 1, xPercent: -50, y: 0, filter: 'blur(0px)' });
      return;
    }

    gsap.set(imageWrap.parentElement, { perspective: 1200 });

    gsap.set(imageWrap, {
      autoAlpha: 0,
      xPercent: -50,
      yPercent: -50,
      y: 90,
      rotateX: 55,
      rotateZ: -1.5,
      transformOrigin: '50% 100%',
    });
    gsap.set(line1, { autoAlpha: 0, xPercent: -50, y: 32, filter: 'blur(10px)' });

    this.entranceTl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    this.entranceTl
      .to(imageWrap, {
        autoAlpha: 1,
        y: 0,
        duration: 2.1,
        ease: 'power3.out',
      })
      .to(
        imageWrap,
        {
          rotateX: 0,
          rotateZ: 0,
          duration: 2.5,
          ease: 'elastic.out(1, 0.75)',
        },
        0,
      )
      .to(
        line1,
        {
          autoAlpha: 1,
          xPercent: -50,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.8,
          ease: 'power2.out',
        },
        0.9,
      );
  }

  private buildScrollAnimation(): void {
    const section = this.heroSectionRef.nativeElement;
    const imageWrap = this.heroImageRef.nativeElement;
    const line1 = this.lineOneRef.nativeElement;
    const line2 = this.lineTwoRef.nativeElement;
    const line3 = this.lineThreeRef.nativeElement;
    const sigContainer = this.signatureContainerRef.nativeElement;
    const pen = this.penRef.nativeElement;

    this.ctx = gsap.context(() => {

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;

      const imageRect = imageWrap.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const imageHeight = imageRect.height;

      const line1StartY = line1.getBoundingClientRect().top - sectionTop;
      const imageTopY = imageRect.top - sectionTop;
      const imageBottomY = imageRect.bottom - sectionTop;
      const imageCenterY = imageTopY + imageHeight * 0.5;

      const line1FinalY = imageTopY + imageHeight * -0.4;
      const line1TotalTravel = line1StartY - line1FinalY;

      const line1OverlapDistance = line1StartY - imageBottomY;
      const blurStartFraction = line1TotalTravel > 0 ? Math.min(Math.max(line1OverlapDistance / line1TotalTravel, 0), 1) : 0;

      const line1CenterTravel = line1StartY - imageCenterY;
      const centerFraction = line1TotalTravel > 0 ? Math.min(Math.max(line1CenterTravel / line1TotalTravel, 0), 1) : 0;

      const line2Height = line2.getBoundingClientRect().height;
      const line3Height = line3.getBoundingClientRect().height;
      const gap = viewportHeight < 768 ? 10 : 18;

      const targetGroupCenterY = imageCenterY + (viewportHeight < 768 ? 8 : 16);
      const totalGroupHeight = line2Height + gap + line3Height;

      const line2TargetY = targetGroupCenterY - totalGroupHeight / 2;
      const line3TargetY = line2TargetY + line2Height + gap;

      const line2StartOffscreen = viewportHeight * 0.2;

      const line2StartY = line2.getBoundingClientRect().top - sectionTop;
      const line2FinalY = line2TargetY - line2StartY;

      const line3StartY = line3.getBoundingClientRect().top - sectionTop;
      const line3FinalY = line3TargetY - line3StartY;

      const phase1Duration = 1.5;
      const blurDuration = 0.6;
      const blurStart = phase1Duration * blurStartFraction;

      const centerReachedAt = phase1Duration * centerFraction;

      const sigPaths = sigContainer.querySelectorAll('.hero__signature-path');
      const pathsArray = Array.from(sigPaths) as SVGPathElement[];

      pathsArray.forEach(path => {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
      });

      const sigTl = gsap.timeline({ paused: true });
      const cvBtn = this.cvButtonRef.nativeElement;

      gsap.set(cvBtn, { autoAlpha: 0, y: 15 });

      if (pathsArray.length > 0) {
        const firstStart = pathsArray[0].getPointAtLength(0);
        gsap.set(pen, {
          x: firstStart.x,
          y: firstStart.y,
          scale: 0,
          autoAlpha: 0,
        });

        sigTl
          .to(sigContainer, {
            autoAlpha: 1,
            duration: 0.1,
          })
          .to(cvBtn, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
          }, 0)
          .to(pen, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)',
          });

        pathsArray.forEach((path, index) => {
          const len = path.getTotalLength();
          const startPt = path.getPointAtLength(0);

          if (index > 0) {
            sigTl
              .to(pen, {
                x: startPt.x,
                y: startPt.y,
                scale: 0.8,
                duration: 0.08,
                ease: 'power2.inOut',
              })
              .to(pen, {
                scale: 1,
                duration: 0.02,
              });
          }

          const pathObj = { progress: 0 };

          let drawDuration = 0.15;
          if (len > 100) {
            drawDuration = 0.5;
          } else if (len < 10) {
            drawDuration = 0.08;
          } else {
            drawDuration = 0.1 + (len / 100) * 0.2;
          }

          sigTl
            .set(path, { opacity: 1 })
            .to(pathObj, {
              progress: 1,
              duration: drawDuration,
              ease: 'sine.inOut',
              onUpdate: () => {
                const currentLen = pathObj.progress * len;
                const pt = path.getPointAtLength(currentLen);
                gsap.set(pen, {
                  x: pt.x,
                  y: pt.y,
                });
                gsap.set(path, {
                  strokeDashoffset: len - currentLen,
                });
              },
            });
        });

        sigTl
          .to({}, { duration: 0.5 })
          .to(pen, {
            x: '+=30',
            y: '+=40',
            autoAlpha: 0,
            scale: 0.8,
            duration: 0.8,
            ease: 'power2.in',
          });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=300%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.scroll() > 5 && this.entranceTl) {
              this.entranceTl.progress(1);
              this.entranceTl.kill();
              this.entranceTl = undefined;
              tl.progress(self.progress);
            }
            if (self.progress >= 0.99) {
              if (sigTl.paused() || sigTl.reversed() || sigTl.progress() === 0) {
                sigTl.timeScale(1).play();
              }
            } else if (self.progress < 0.95) {
              if (!sigTl.reversed() && sigTl.progress() > 0) {
                sigTl.timeScale(4).reverse();
              }
            }
          },
        },
        defaults: {
          ease: 'power2.inOut',
        },
      });

      tl.fromTo(line1, {
        y: 0,
        xPercent: -50
      }, {
        y: -line1TotalTravel,
        xPercent: -50,
        duration: phase1Duration,
        ease: 'power1.inOut',
      }, 0)

        .fromTo(
          line1,
          {
            filter: 'blur(0px)',
            opacity: 1,
            xPercent: -50
          },
          {
            filter: 'blur(60px)',
            opacity: 0.35,
            xPercent: -50,
            duration: blurDuration,
            ease: 'power1.in',
          },
          blurStart
        )


        .fromTo(
          line2,
          { y: line2StartOffscreen, xPercent: -50, autoAlpha: 0 },
          { y: line2FinalY, xPercent: -50, autoAlpha: 1, duration: 1.0 },
          centerReachedAt
        )

        .fromTo(
          line3,
          { y: line2StartOffscreen, xPercent: -50, autoAlpha: 0 },
          { y: line3FinalY, xPercent: -50, autoAlpha: 1, duration: 1.0 },
          centerReachedAt
        );

      void imageWrap;
    }, section);
  }

  private setupScanner(): void {
    if (!this.heroImageRef?.nativeElement) return;
    const wrap = this.heroImageRef.nativeElement;
    wrap.addEventListener('mouseenter', this.onMouseEnter);
    wrap.addEventListener('mousemove', this.onMouseMove);
    wrap.addEventListener('mouseleave', this.onMouseLeave);

    // Register ticker
    gsap.ticker.add(this.onTick);
  }

  private readonly onMouseEnter = (e: MouseEvent) => {
    if (!this.heroImageRef?.nativeElement) return;
    const wrap = this.heroImageRef.nativeElement;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Immediately snap to position to prevent sliding from (0,0)
    this.targetX = x;
    this.targetY = y;
    this.currentX = x;
    this.currentY = y;

    this.targetRadius = 150; // Dynamic circular radius in px
  };

  private readonly onMouseMove = (e: MouseEvent) => {
    if (!this.heroImageRef?.nativeElement) return;
    const wrap = this.heroImageRef.nativeElement;
    const rect = wrap.getBoundingClientRect();
    this.targetX = e.clientX - rect.left;
    this.targetY = e.clientY - rect.top;
  };

  private readonly onMouseLeave = () => {
    this.targetRadius = 0; // Collapsing back to 0
  };

  private readonly onTick = () => {
    if (!this.heroImageRef?.nativeElement) return;
    const ease = 0.12;

    this.currentX += (this.targetX - this.currentX) * ease;
    this.currentY += (this.targetY - this.currentY) * ease;
    this.currentRadius += (this.targetRadius - this.currentRadius) * ease;

    const wrap = this.heroImageRef.nativeElement;
    wrap.style.setProperty('--mask-x', `${this.currentX}px`);
    wrap.style.setProperty('--mask-y', `${this.currentY}px`);
    wrap.style.setProperty('--mask-radius', `${this.currentRadius}px`);
  };

  ngOnDestroy(): void {
    this.entranceTl?.kill();
    this.ctx?.revert();

    if (this.heroImageRef?.nativeElement) {
      const wrap = this.heroImageRef.nativeElement;
      wrap.removeEventListener('mouseenter', this.onMouseEnter);
      wrap.removeEventListener('mousemove', this.onMouseMove);
      wrap.removeEventListener('mouseleave', this.onMouseLeave);
    }
    gsap.ticker.remove(this.onTick);
  }
}