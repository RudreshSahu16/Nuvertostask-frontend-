import { Injectable, NgZone } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  duration=5000
  constructor(private snackBar:MatSnackBar) { 
    
    console.log("constructor()  HelperSnackbarService");
    
  }
  
  openSnackBar(message: string,type: boolean) {
    this.snackBar.open(message, 'Dismiss', {
      duration: this.duration,
      panelClass:  [type?'success-snackbar':'failure-snackbar'],
      horizontalPosition: 'center',
      verticalPosition:'bottom',
      
      
    });
  }
    
}
