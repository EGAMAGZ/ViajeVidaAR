import { Component, OnInit, signal } from '@angular/core';
import { Camera } from "@capacitor/camera";
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavigationService } from '@/app/shared/services/navigation.service';
import { environment } from "@/environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
  ],
})
export class HomePage implements OnInit {

  isDebugMode = signal(!environment.production);

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit(): void {
    Camera.requestPermissions(
      {
        permissions: [
          'camera',
          'photos',
        ]
      }
    );
  }

  navigateCredits() {
    this.navigation.goCredits()
  }
  navigateTravelMenu() {
    this.navigation.goTravelMenu()
  }

  navigateInstructions() {
    this.navigation.goInstructions()
  }
}
