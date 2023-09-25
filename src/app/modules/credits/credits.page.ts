import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';
import { NavigationService } from '@/app/shared/services/navigation.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.page.html',
  styleUrls: ['./credits.page.scss'],
  standalone: true,
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class CreditsPage implements OnInit {

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit() {
  }

  navigateHome() {
    this.navigation.goHome();
  }
}
