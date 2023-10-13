import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavigationUtils } from '../utils/navigation';
import { AppModules } from '@/app/routing/app-modules';
import { TravelRoutes } from '@/app/modules/travel/routing/travel-routes';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigationStack: Array<string> = []

  constructor(
    private router: Router
  ) { }

  back() {
    if (this.canGoBack()) {
      this.router.navigate([this.navigationStack.pop()])
    }
  }

  goCredits() {
    this.navigate(
      NavigationUtils.getRoute(
        AppModules.credits,
        null
      )
    )
  }

  goHome() {
    this.navigate(
      NavigationUtils.getRoute(
        AppModules.home,
        null
      )
    )
  }

  goTravelHome() {
    this.navigate(
      NavigationUtils.getRoute(
        AppModules.travel,
        TravelRoutes.menu
      )
    )
  }

  goInstructions() {
    this.navigate(
      NavigationUtils.getRoute(
        AppModules.instructions,
        null
      )
    )
  }

  goTravelArtwork(id: number) {
    this.navigate(
      NavigationUtils.getRoute(
        AppModules.travel,
        TravelRoutes.artwork,
        {
          "id": id
        }
      )
    )
  }

  canGoBack(): boolean {
    return this.navigate.length > 0
  }

  navigate(route: string) {
    this.navigationStack.push(route)
    this.router.navigate([route])
  }
}
