import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpclientService } from './httpclient.service';
import { SnackBarService } from './snack-bar.service';



@Injectable({
  providedIn: 'root'
})
export class CommanService {
  constructor(public spinner: NgxSpinnerService, public snackBar:SnackBarService,public httpclient:HttpclientService) { 
    console.log("CommanService initialise");
  }

  ngOnInit(){}
  public showSpinner(){
    this.spinner.show();
    setTimeout(() => {

        this.spinner.hide();
    }, 2000);
}
}
