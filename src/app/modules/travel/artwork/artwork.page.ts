import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { environment } from '@/environments/environment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { generateArTemplate } from '@/app/shared/utils/template';
import { Artwork, allArtworks } from '@/app/data/artworks';
import { TemplateHttpLoaderService } from '@/app/shared/services/template-http-loader.service';
import { NavigationService } from '@/app/shared/services/navigation.service';

const DEFAULT_ARTWORK: Artwork = {
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  id: 0,
  markerPath: "",
  modelPath: "/assets/bunny.png",
  name: "Obra de Arte",
  dimensions: {
    width: 2,
    height: 2
  },
}

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
    private templateLoader: TemplateHttpLoaderService,
    private navigation: NavigationService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.artworkId.set(Number(param["id"]));

      this.artwork.set(
        allArtworks.find(artwork => artwork.id === Number(param["id"]))
      );

      this.templateLoader.loadArTemplate().subscribe((template) => {

        this.iframeContent.set(
          this.domSanitizer.bypassSecurityTrustHtml(
            generateArTemplate(template, {
              debug: this.isDebugMode(),
              vrModeUI: false,
              artwork: this.artwork() ?? DEFAULT_ARTWORK
            })
          )
        )
      });
    });
  }

  navigateMenu(){
    this.navigation.goTravelMenu();
  }

}
