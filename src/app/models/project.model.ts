export interface TechBadge {
  name: string;
  icon?: string;
  badgeColor?: string;
  category?: string;
}

export interface FeatureHighlight {
  icon?: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  url?: string;
  imageUrl?: string;
  title: string;
  alt?: string;
  caption?: string;
  description?: string;
}

export interface ResponsiveScreens {
  desktop: string;
  tablet?: string;
  mobile?: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  heroVideoUrl?: string;
  heroImageUrl: string;
  overview: string;
  challenge: string;
  solution: string;
  features: FeatureHighlight[];
  keyFeaturesList: string[];
  technologies: TechBadge[];
  gallery: GalleryItem[];
  responsiveScreens?: ResponsiveScreens;
  liveDemoUrl?: string;
  githubUrl?: string;
  quote?: string;
}
