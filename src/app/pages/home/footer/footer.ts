import { Component, ElementRef, OnDestroy, ViewChild, afterNextRender } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})

export class Footer implements OnDestroy {
  private unbindListeners?: () => void;
  private scrollTriggerInstance?: ScrollTrigger;

  @ViewChild('footer') footer!: ElementRef<HTMLElement>;

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  constructor() {
    afterNextRender(() => {
      this.initParallax();
      this.initHeadlineAnimation();
    });
  }

  private initHeadlineAnimation(): void {
    const headline = document.querySelector('.footer .headline') as HTMLElement | null;
    if (!headline) return;

    // Wrap each letter in a span
    const wrapTextNodes = (parent: Node) => {
      const fragment = document.createDocumentFragment();
      parent.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || '';
          for (const char of text) {
            if (char === '\n' || char === '\r') continue;
            if (char === ' ') {
              fragment.appendChild(document.createTextNode(' '));
              continue;
            }
            const span = document.createElement('span');
            span.classList.add('letter');
            span.textContent = char;
            fragment.appendChild(span);
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (el.tagName === 'BR') {
            fragment.appendChild(el.cloneNode());
          } else if (el.classList.contains('dot-accent')) {
            const span = document.createElement('span');
            span.classList.add('letter', 'dot-accent');
            span.textContent = el.textContent;
            fragment.appendChild(span);
          } else {
            // Recurse into el, then move its (now-wrapped) children into a shallow clone.
            const clone = el.cloneNode(false) as HTMLElement;
            wrapTextNodes(el);
            while (el.firstChild) {
              clone.appendChild(el.firstChild);
            }
            fragment.appendChild(clone);
          }
        }
      });
      while (parent.firstChild) parent.removeChild(parent.firstChild);
      parent.appendChild(fragment);
    };

    wrapTextNodes(headline);

    const letters = headline.querySelectorAll('.letter');

    // GSAP timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.footer.nativeElement,
        start: 'bottom 50%',
        end: 'bottom bottom',
        toggleActions: 'play reverse play reverse',
      },
    });

    tl.to(letters, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
      stagger: 0.03,
    });

    this.scrollTriggerInstance = tl.scrollTrigger as ScrollTrigger;
  }

  private initParallax(): void {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isReducedMotion || window.innerWidth <= 992) {
      return;
    }

    const heroSection = document.querySelector('.footer .hero') as HTMLElement | null;
    const bgCircle = document.querySelector('.footer .bg-graphic-circle') as SVGElement | null;
    const redStar = document.querySelector('.footer .red-star') as SVGElement | null;

    if (!heroSection || !bgCircle || !redStar) {
      return;
    }

    const onMouseMove = (event: MouseEvent) => {
      const offsetX = ((event.clientX / window.innerWidth) - 0.5) * 8;
      const offsetY = ((event.clientY / window.innerHeight) - 0.5) * 8;

      bgCircle.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
      // `translate` composes with the star's CSS rotation animation.
      redStar.style.translate = `${-offsetX * 0.5}px ${-offsetY * 0.5}px`;
    };

    const onMouseLeave = () => {
      bgCircle.style.transform = 'translate3d(0, 0, 0)';
      redStar.style.translate = '0 0';
    };

    heroSection.addEventListener('mousemove', onMouseMove);
    heroSection.addEventListener('mouseleave', onMouseLeave);

    this.unbindListeners = () => {
      heroSection.removeEventListener('mousemove', onMouseMove);
      heroSection.removeEventListener('mouseleave', onMouseLeave);
    };
  }

  ngOnDestroy(): void {
    this.unbindListeners?.();
    this.scrollTriggerInstance?.kill();
  }
}