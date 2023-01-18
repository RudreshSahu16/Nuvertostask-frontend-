import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompounddetailsComponent } from './compounddetails.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const Route : Routes =[
  {path:'',component:CompounddetailsComponent},
  
];

@NgModule({
  declarations: [CompounddetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Route),
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class CompounddetailsModule { }
