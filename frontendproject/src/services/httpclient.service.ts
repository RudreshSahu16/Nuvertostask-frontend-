import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(public http:HttpClient) { }
  callServerForPost(url: string, reqBody: any):any {
    return this.http.post(url,reqBody)
  }
  callServerForGet(url: string):any {
    return this.http.get(url)
  }
  callServerForPut(url: string,reqBody:any):any {
    return this.http.put(url,reqBody)
  }
  callServerForDelete(url: string):any {
    return this.http.delete(url)
  }
}
