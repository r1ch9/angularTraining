import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'weather',
    loadComponent: () => import('./pages/weather/weather.page').then((m) => m.WeatherPage),
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.page').then((m) => m.NewsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
