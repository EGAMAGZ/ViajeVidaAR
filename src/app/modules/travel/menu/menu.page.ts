import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { NavigationService } from '@/app/shared/services/navigation.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class MenuPage implements OnInit {

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit() {
  }

  navigateTravelArtwork(id: number) {
    this.navigation.goTravelArtwork(id)
  }
}
