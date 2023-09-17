import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ar-launcher',
    loadComponent: () => import('./components/ar-launcher/ar-launcher.page').then( m => m.ArLauncherPage)
  },
];
