import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '@/app/shared/services/navigation.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.page.html',
  styleUrls: ['./instructions.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InstructionsPage implements OnInit {

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit() {
  }
  navigateHome() {
    this.navigation.goHome();
  }

}
