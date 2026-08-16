import { Component, OnInit, signal, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { ProjectDetail } from '../../models/project.model';
import { ProjectNav } from './components/project-nav';
import { ProjectHero } from './components/project-hero';
import { ProjectIntro } from './components/project-intro';
import { ProjectOverview } from './components/project-overview';
import { ProjectFeaturesTech } from './components/project-features-tech';
import { ProjectGallery } from './components/project-gallery';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    NgIf,
    ProjectNav,
    ProjectHero,
    ProjectIntro,
    ProjectOverview,
    ProjectFeaturesTech,
    ProjectGallery,
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project = signal<ProjectDetail | undefined>(undefined);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      const detail = this.projectService.getProjectBySlug(slug);
      this.project.set(detail);
    });
  }
}
