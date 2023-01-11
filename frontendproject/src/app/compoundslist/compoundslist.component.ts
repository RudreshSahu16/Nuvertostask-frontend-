import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CommanService } from 'src/services/comman.service';
import { DatatransferService } from 'src/services/datatransfer.service';
import { HelperUtil } from 'src/utility/helpUtils';
import { GlobeApis } from '../APIs/globeApis';

@Component({
  selector: 'app-compoundslist',
  templateUrl: './compoundslist.component.html',
  styleUrls: ['./compoundslist.component.scss']
})
export class CompoundslistComponent implements OnInit {
  totallength:number=10;
  itemsinpage:number=10;
  pageEvent: PageEvent;
  response: any;
  pageNumber:any;
  compounds=[];
  constructor(private commanService:CommanService, private router:Router , private datashare:DatatransferService ) { }

  ngOnInit(): void {
    this.pageNumber=1
    this.getcompoundlist(this.pageNumber);
  }

  getcompoundlist(pageNumber){
    this.commanService.spinner.show()
    this.commanService.httpclient.callServerForGet(GlobeApis.GETCOMPOUNDS+"?pageNumber="+pageNumber).subscribe(
        (val)=>{
        this.response = val;
        if(HelperUtil.isSuccess(this.response) && this.response.status===200){
          this.compounds=this.response.data
          this.totallength=this.response.size
          this.commanService.spinner.hide()
          // this.commanService.snackBar.openSnackBar(this.response.message,true);

        }
        else {
          this.commanService.spinner.hide()
          this.commanService.snackBar.openSnackBar(this.response.message,false);
          
        }
      },
      response => {
        if(response.error.statusCode==='ERROR'){
          this.commanService.spinner.hide()
          this.commanService.snackBar.openSnackBar(response.error.message,false);
        }
        else{
          this.commanService.spinner.hide()
          this.commanService.snackBar.openSnackBar('Please check your internet connection or Temporarily Service Not Available , Please try later.',false);
        }

        },
      )
  }
  onPaginateChange(event){
    this.pageNumber=event.pageIndex
    this.getcompoundlist(this.pageNumber+1);
  }
  modifyProduct(operationType){
    
    this.datashare.setData({"operationType":operationType});
    this.router.navigate(["/compounddetails"]);
  }
  viewCompound(compoundData){
    this.datashare.setData(compoundData)
    this.router.navigate(['/compoundinfo'])
  }
}
