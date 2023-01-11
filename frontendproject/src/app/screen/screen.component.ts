import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/services/comman.service';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {

  constructor(private commanService: CommanService) { }

  ngOnInit(): void {
    this.commanService.showSpinner();
  }

  

}
