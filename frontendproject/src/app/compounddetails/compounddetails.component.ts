import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommanService } from 'src/services/comman.service';
import { DatatransferService } from 'src/services/datatransfer.service';
import { HelperUtil } from 'src/utility/helpUtils';
import { GlobeApis } from '../APIs/globeApis';

@Component({
  selector: 'app-compounddetails',
  templateUrl: './compounddetails.component.html',
  styleUrls: ['./compounddetails.component.scss']
})
export class CompounddetailsComponent implements OnInit {
  operationtype:any;
  modifycompoundform:any;

  imageSrc: string;
  ispreview:boolean=false;
  makeallreadonly:boolean=false;
  response: any;
  imageFile:boolean=false;
  constructor(private datashare:DatatransferService, private commanService:CommanService, private router:Router) { }

  ngOnInit(): void {
    this.commanService.spinner.show()
    this.operationtype=this.datashare.getData()
    
    if(!this.operationtype){
      this.router.navigate(['/compoundlist']);
    }

    this.modifycompoundform=new FormGroup({
      CompoundName:new FormControl('',[Validators.required]),
      CompondImageSource:new FormControl('',[Validators.required]),
      CompoundDescription:new FormControl('',[Validators.required]),
      dateModified:new FormControl('',[Validators.required]),
      fileSource: new FormControl('', [Validators.required]) 
    })


    if(this.operationtype.operationType=='update' || this.operationtype.operationType=='delete'){
      this.modifycompoundform.controls.CompoundName.setValue(this.operationtype.CompoundName);
      this.modifycompoundform.controls.CompoundDescription.setValue(this.operationtype.CompounrDescription);
      // this.modifycompoundform.controls.CompondImageSource.setValue(this.operationtype.CompondImageSource);
      this.imageSrc=this.operationtype.CompondImageSource
      this.ispreview=true
      if(this.operationtype.operationType=='delete'){
        this.makeallreadonly=true;
      }
    }
    this.commanService.spinner.hide()
  }

  readURL(event) {
    if (event.target.files && event.target.files[0])   {
      const file = event.target.files[0];
      this.imageFile= true 
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
        
      };
      this.ispreview = true;
      
      reader.readAsDataURL(file);
    }
  }
  onSubmit(form,operationtype){
    var data={
      "CompoundName":form.value.CompoundName,
      "CompoundDescription":form.value.CompoundDescription,
      "dateModified":form.value.dateModified,
      }
    
    // Add product 
    if(operationtype == 'add'){
      
      data["CompondImageSource"]=this.imageSrc
      
      this.commanService.httpclient.callServerForPost(GlobeApis.ADDCOMPOUND,data).subscribe(
          (val)=>{
          this.response = val;
          
          if(HelperUtil.isSuccess(this.response) && this.response.status===200){
            this.commanService.spinner.hide()
            this.commanService.snackBar.openSnackBar(this.response.message,true);
  
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
          ()=>{
            this.router.navigate(['/compoundlist'])
          }
        )
      }

    // Update product
    else if(operationtype =='update'){
      if(this.imageFile){
        data["CompondImageSource"]=this.imageSrc
        data["isimagechange"]=true 
      }
      else{
        data["CompondImageSource"]=this.operationtype.CompondImageSource;
        data["isimagechange"]=false

      }
      data["CompoundId"]=this.operationtype.CompoundId

      
      this.commanService.httpclient.callServerForPut(GlobeApis.UPDATECOMPOUND,data).subscribe(
        (val)=>{
        this.response = val;
        
        if(HelperUtil.isSuccess(this.response) && this.response.status===200){
          this.commanService.spinner.hide()
          this.commanService.snackBar.openSnackBar(this.response.message,true);

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
        ()=>{
          this.router.navigate(['/compoundlist'])
        }
      )
    }

    // delete product
    else{
      var compoundId=this.operationtype.CompoundId
      this.commanService.httpclient.callServerForDelete(GlobeApis.DELETECOMPOUND +"?CompoundId="+compoundId).subscribe(
        (val)=>{
        this.response = val;
        
        if(HelperUtil.isSuccess(this.response) && this.response.status===200){
          this.commanService.spinner.hide()
          this.commanService.snackBar.openSnackBar(this.response.message,true);

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
        ()=>{
          this.router.navigate(['/compoundlist'])
        }
      
      )
    }
  }
}
