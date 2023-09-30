import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { environment } from '@/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { generateArTemplate } from '@/app/shared/utils/template';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.page.html',
  styleUrls: ['./artwork.page.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class ArtworkPage implements OnInit {

  artworkId: number | undefined
  iframeContent: SafeHtml
  isDebugMode: boolean = !environment.production

  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
    this.iframeContent = domSanitizer.bypassSecurityTrustHtml(
      generateArTemplate({ debug: this.isDebugMode, vrModeUI: false })
    )
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.artworkId = Number(param["id"])
    })
  }

}
