import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { environment } from '@/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { generateArTemplate } from '@/app/shared/utils/template';
import { Artwork, allArtworks } from '@/app/data/artworks';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.page.html',
  styleUrls: ['./artwork.page.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class ArtworkPage implements OnInit {
  iframeContent: SafeHtml | undefined

  isDebugMode = signal(!environment.production)
  artworkId = signal<number | undefined>(undefined)
  artwork = signal<Artwork | undefined>(undefined)

  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
    this.iframeContent = domSanitizer.bypassSecurityTrustHtml(
      generateArTemplate({ debug: this.isDebugMode(), vrModeUI: false })
    )
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.artworkId.set(Number(param["id"]));

      this.artwork.set(
        allArtworks.find(artwork => artwork.id === Number(param["id"]))
      );
    });
  }

}
