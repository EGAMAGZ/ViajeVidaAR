import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@/app/shared/modules/shared/shared.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [SharedModule, CommonModule]
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
