import { Routes } from '@angular/router';
import { NavigationUtils } from './shared/utils/navigation';
import { AppModules } from './routing/app-modules';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: NavigationUtils.getRoute(AppModules.home, null)
  },
  {
    path: 'credits',
    loadComponent: () => import('./modules/credits/credits.page').then(m => m.CreditsPage)
  },

];
