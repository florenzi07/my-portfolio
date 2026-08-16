import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.css',
})
export class AboutMeSection implements AfterViewInit, OnDestroy {

  private platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;

  @ViewChildren('paragraph')
  paragraphs!: QueryList<ElementRef<HTMLElement>>;

  @ViewChild('section')
  sectionAbout!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    requestAnimationFrame(() => this.initAnimation());
  }

  initAnimation(): void {

    this.ctx = gsap.context(() => {

      this.paragraphs.forEach((paragraph) => {

        const split = new SplitType(paragraph.nativeElement, {
          types: 'chars'
        });

        gsap.set(split.chars, {
          opacity: 0.1
        });

        gsap.to(split.chars, {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: this.sectionAbout.nativeElement,
            start: "top top+=100",
            end: 'bottom bottom',
            scrub: true,
          }
        });

      });

      ScrollTrigger.refresh();

    }, this.sectionAbout.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
    ScrollTrigger.getAll().forEach(st => st.kill());
  }

}