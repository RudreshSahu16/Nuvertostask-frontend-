import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatatransferService } from 'src/services/datatransfer.service';

@Component({
  selector: 'app-compounddiscription',
  templateUrl: './compounddiscription.component.html',
  styleUrls: ['./compounddiscription.component.scss']
})
export class CompounddiscriptionComponent implements OnInit {
  compoundData:any;
  constructor(private datashare:DatatransferService,private router:Router) { }

  ngOnInit(): void {
    this.compoundData=this.datashare.getData()
    if(!this.compoundData){
      this.router.navigate(['/compoundlist']);
    }
    
  }
  CompooundModification(compoundData,operationType){
    compoundData.operationType=operationType
    this.datashare.setData(compoundData)
    this.router.navigate(['/compounddetails'])
  }
}
