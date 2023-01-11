import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectnavbarComponent } from './projectnavbar.component';



@NgModule({
  declarations: [ProjectnavbarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ProjectnavbarComponent
  ]
})
export class ProjectnavbarModule { }
