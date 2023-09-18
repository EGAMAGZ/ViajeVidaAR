import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ArLauncherPage } from '../components/ar-launcher/ar-launcher.page';
import { Camera } from "@capacitor/camera";
import { generateARTemplate } from '@/app/shared/utils/template';
import { environment } from "@/environments/environment";
import { SharedModule } from '@/app/shared/modules/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class HomePage implements OnInit {
  constructor(
    private modalController: ModalController,
  ) {
  }

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
