import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompounddiscriptionComponent } from './compounddiscription.component';
import { RouterModule, Routes } from '@angular/router';

const Route : Routes =[
  {path:'',component:CompounddiscriptionComponent},
  
];

@NgModule({
  declarations: [CompounddiscriptionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Route),


  ]
})
export class CompounddiscriptionModule { }
