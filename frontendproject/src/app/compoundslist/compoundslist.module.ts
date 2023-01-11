import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundslistComponent } from './compoundslist.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectnavbarModule } from '../projectnavbar/projectnavbar.module';
import {MatPaginatorModule} from '@angular/material/paginator';

const Route : Routes =[
  {path:'',component:CompoundslistComponent},
  
];

@NgModule({
  declarations: [CompoundslistComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Route),
    ProjectnavbarModule,
    MatPaginatorModule
  ]
})
export class CompoundslistModule { }
