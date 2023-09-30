import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArLauncherPage } from '@/app/components/ar-launcher/ar-launcher.page';
import { Camera } from "@capacitor/camera";
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavigationService } from '@/app/shared/services/navigation.service';

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
  constructor(
    private modalController: ModalController,
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
    this.navigation.goTravelHome()
  }

  async openAR() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ArLauncherPage,
    });

    return await modal.present();
  }
}
