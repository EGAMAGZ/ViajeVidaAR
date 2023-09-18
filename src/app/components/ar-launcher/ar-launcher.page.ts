import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { generateARTemplate } from '@/app/shared/utils/template';

@Component({
  selector: 'app-ar-launcher',
  templateUrl: './ar-launcher.page.html',
  styleUrls: ['./ar-launcher.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  encapsulation: ViewEncapsulation.None
})
export class ArLauncherPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) {

    console.log(generateARTemplate('/assets/templates/ar.njk', { debug: false, vrModeUi: false }));
  }

  ngOnInit() {
  }


  close(){
    this.modalController.dismiss();
  }
}
