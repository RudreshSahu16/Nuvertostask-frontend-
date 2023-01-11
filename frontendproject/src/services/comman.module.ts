import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { NgxSpinnerModule } from "ngx-spinner";
import { CommanService } from "./comman.service";
import { HttpclientService } from "./httpclient.service";



// import { HttpclientService } from "./httpclient.service";

@NgModule({
    declarations: [
     
    ],
    imports: [
        NgxSpinnerModule,
        MatSnackBarModule
       
        
        
    ],
    exports:[
        NgxSpinnerModule,
        MatSnackBarModule
       
        
      ],
    providers: [CommanService,HttpclientService],
    bootstrap: []
  })
  export class CommanServicesModule { }