import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  private data: {};
  constructor() { }

  setData(data:Object){
    this.data=data
  }
  getData() {
    const data=this.data
    return data;
  }

}
