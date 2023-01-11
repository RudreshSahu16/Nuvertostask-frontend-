import { Component, OnInit } from '@angular/core';
import{environment} from '../../environments/environment';

const BASE_URL=environment.BASE_URL;
@Component({
    template: ''
  })
export class GlobeApis implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    public  static GLOBALCOMPOUND= BASE_URL + '/compound';

    // Get seatstatus
  static GETCOMPOUNDS=GlobeApis.GLOBALCOMPOUND+'/getcompounds';
  static UPDATECOMPOUND=GlobeApis.GLOBALCOMPOUND+'/updatecompound';
  static ADDCOMPOUND=GlobeApis.GLOBALCOMPOUND+'/addcompound';
  static DELETECOMPOUND=GlobeApis.GLOBALCOMPOUND+'/deletecompound';

}
