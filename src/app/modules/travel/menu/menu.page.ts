import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { NavigationService } from '@/app/shared/services/navigation.service';
import stagesOfLife, { StageOfLife } from '@/app/data/stages-life';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class MenuPage implements OnInit {

  STAGES_OF_LIFE: StageOfLife[] = stagesOfLife

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit() {
  }

  navigateTravelArtwork(id: number) {
    this.navigation.goTravelArtwork(id)
  }
}
