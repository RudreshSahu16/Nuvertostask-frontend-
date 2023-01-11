import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompounddetailsModule } from './compounddetails/compounddetails.module';
import { CompounddiscriptionModule } from './compounddiscription/compounddiscription.module';
import { CompoundslistModule } from './compoundslist/compoundslist.module';
import { ScreenComponent } from './screen/screen.component';



const routes: Routes = [
  {path:'',component:ScreenComponent},
  {path:'compoundlist',loadChildren:"./compoundslist/compoundslist.module#CompoundslistModule"},
  {path:'compounddetails',loadChildren:"./compounddetails/compounddetails.module#CompounddetailsModule"},
  {path:'compoundinfo',loadChildren:"./compounddiscription/compounddiscription.module#CompounddiscriptionModule"}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
