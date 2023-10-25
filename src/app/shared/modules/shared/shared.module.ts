import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ]
})
export class SharedModule { }
