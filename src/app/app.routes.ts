import { Routes } from '@angular/router';
import { NavigationUtils } from './shared/utils/navigation';
import { AppModules } from './routing/app-modules';

export const routes: Routes = [
  {
    path: AppModules.home.id,
    loadComponent: () => import('./modules/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: NavigationUtils.getRoute(AppModules.home, null)
  },
  {
    path: AppModules.credits.id,
    loadComponent: () => import('./modules/credits/credits.page').then(m => m.CreditsPage)
  },
  {
    path: AppModules.travel.id,
    loadChildren: () => import('./modules/travel/travel.routes').then(m => m.routes)
  },  {
    path: 'instructions',
    loadComponent: () => import('./modules/instructions/instructions.page').then( m => m.InstructionsPage)
  }

];
