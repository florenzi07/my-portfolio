import { Component } from '@angular/core';
import { HeroSection } from './hero-section/hero-section';
import { AboutMeSection } from "./about-me-section/about-me-section";
import { SectionMe } from "./section-me/section-me";
import { SkillsSection } from "./skills-section/skills-section";
import { WorksSection } from "./works-section/works-section";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-home',
  imports: [HeroSection, AboutMeSection, SectionMe, SkillsSection, WorksSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { }
