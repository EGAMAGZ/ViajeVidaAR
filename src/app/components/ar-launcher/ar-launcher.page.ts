import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { generateArTemplate } from '@/app/shared/utils/template';

@Component({
  selector: 'app-ar-launcher',
  templateUrl: './ar-launcher.page.html',
  styleUrls: ['./ar-launcher.page.scss'],
  standalone: true,
  imports: [SharedModule],
  encapsulation: ViewEncapsulation.None
})
export class ArLauncherPage implements OnInit {

  iframeContent: SafeHtml

  constructor(
    private modalController: ModalController,
    private domSanitizer: DomSanitizer
  ) {
    const a = generateArTemplate({ debug: false, vrModeUI: false })
    console.log()

    this.iframeContent = domSanitizer.bypassSecurityTrustHtml(a)
  }

  ngOnInit() {
  }


  close() {
    this.modalController.dismiss();
  }
}
