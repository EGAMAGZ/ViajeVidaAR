import { Routes } from '@angular/router';
import { TravelRoutes } from './routing/travel-routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'menu'
  },
  {
    path: TravelRoutes.menu.uri.slice(1),
    loadComponent: () => import('./menu/menu.page').then((m) => m.MenuPage)
  },
  {
    path: TravelRoutes.artwork.uri.slice(1),
    loadComponent: () => import('./artwork/artwork.page').then(m => m.ArtworkPage)
  }

]
