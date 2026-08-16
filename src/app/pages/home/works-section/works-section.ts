import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Project {
  slug: string;
  number: string;
  title: string;
  tags: string[];
  categories: string[];
  imageType: 'photo' | 'oasii' | 'monogram' | 'kemper' | 'stage' | 'esi' | 'orb';
  imageUrl?: string;
  imageAlt?: string;
}

@Component({
  selector: 'app-works-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './works-section.html',
  styleUrl: './works-section.css',
})
export class WorksSection {

  readonly projects: Project[] = [
    {
      slug: 'lawyer',
      number: '01',
      title: 'Lawyer Management System',
      tags: ['DESKTOP APP', 'LEGAL PLATFORM'],
      categories: ['web-apps'],
      imageType: 'photo',
      imageUrl: '/Lawyer Management System/imgCard.png',
      imageAlt: 'Lawyer Management System',
    },
    {
      slug: 'coffee',
      number: '02',
      title: 'Coffee Shop',
      tags: ['E-COMMERCE PLATFORM', 'ANGULAR APP'],
      categories: ['web-apps', 'e-commerce'],
      imageType: 'photo',
      imageUrl: '/coffee/imgCard.png',
      imageAlt: 'Coffee Shop E-Commerce',
    },
    {
      slug: 'food',
      number: '03',
      title: 'Food Bliss',
      tags: ['FINE DINING', 'BESPOKE EVENTS'],
      categories: ['web-apps', 'e-commerce'],
      imageType: 'photo',
      imageUrl: '/food/imgCard.png',
      imageAlt: 'Food Bliss Fine Dining & Events',
    },
  ];

  activeFilter = signal<string>('all');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') return this.projects;
    return this.projects.filter(p => p.categories.includes(filter));
  });

  setFilter(value: string): void {
    this.activeFilter.set(value);
  }
}
