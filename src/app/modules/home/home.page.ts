import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArLauncherPage } from '@/app/components/ar-launcher/ar-launcher.page';
import { Camera } from "@capacitor/camera";
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { environment } from "@/environments/environment";
import { CommonModule } from '@angular/common';

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

  async openAR() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: ArLauncherPage,
    });

    return await modal.present();
  }
}
