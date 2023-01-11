import { Injectable } from "@angular/core";

@Injectable() 
export class HelperUtil  {
    public static isSuccess(response):Boolean {
        let isSuccessFlag=false;
        if (response.statusCode== 'SUCCESS') {
            isSuccessFlag = true;
        }
        return isSuccessFlag;

    }
    
}