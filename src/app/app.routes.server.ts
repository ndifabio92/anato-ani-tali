import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'about', renderMode: RenderMode.Prerender },
  { path: 'faq', renderMode: RenderMode.Prerender },
  { path: 'contact', renderMode: RenderMode.Prerender },
  { path: 'courses', renderMode: RenderMode.Prerender },
  { path: 'not-found', renderMode: RenderMode.Prerender },
  { path: 'admin/login', renderMode: RenderMode.Client }, // no necesita SSR/SSG
  { path: '**', renderMode: RenderMode.Client }, // fallback siempre Client
];
