import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NavigationUtils } from '../utils/navigation';
import { AppModules } from '@/app/routing/app-modules';

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

  canGoBack(): boolean {
    return this.navigate.length > 0
  }

  navigate(route: string) {
    this.navigationStack.push(route)
    this.router.navigate([route])
  }
}
