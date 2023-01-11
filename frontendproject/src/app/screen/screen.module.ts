import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScreenComponent } from './screen.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ScreenComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    
  ]
})
export class ScreenModule { }
