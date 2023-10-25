import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { environment } from '@/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { generateArTemplate } from '@/app/shared/utils/template';
import { Artwork, allArtworks } from '@/app/data/artworks';
import { TemplateHttpLoaderService } from '@/app/shared/services/template-http-loader.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.page.html',
  styleUrls: ['./artwork.page.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule],
  providers: [
    TemplateHttpLoaderService
  ]
})
export class ArtworkPage implements OnInit {
  iframeContent = signal<SafeHtml | undefined>(undefined)

  isDebugMode = signal(!environment.production)
  artworkId = signal<number | undefined>(undefined)
  artwork = signal<Artwork | undefined>(undefined)

  constructor(
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private templateLoader: TemplateHttpLoaderService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.artworkId.set(Number(param["id"]));

      this.artwork.set(
        allArtworks.find(artwork => artwork.id === Number(param["id"]))
      );

      this.templateLoader.loadArTemplate().subscribe((data) => {

        this.iframeContent.set(
          this.domSanitizer.bypassSecurityTrustHtml(
            generateArTemplate(data, { debug: this.isDebugMode(), vrModeUI: false, modelPath: this.artwork()?.modelPath ?? "/assets/bunny.png" })
          )
        )
      });
    });
  }

}
