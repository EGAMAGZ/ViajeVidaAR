import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./modules/home/home.page').then((m) => m.HomePage),
  // },
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./modules/home/home.page').then((m) => m.HomePage),
  },
];
