import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'lawyer' },
        { slug: 'lowyer' },
        { slug: 'coffee' },
        { slug: 'food' },
        { slug: 'kemper' },
        { slug: 'artiver' },
        { slug: 'esi' },
        { slug: 'google-next' },
        { slug: 'portfolio' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];

