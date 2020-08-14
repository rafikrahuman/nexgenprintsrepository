import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/internal/observable';
@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private _httpclient : HttpClient) { }

  RegisterUser(strUserName:string,strUserMiddleName:any, strUserLastName:any,
    strUserPwd:any,strUserEmail:any,strGroupID:any,strIsAlive:any,
    strCreatedDate:any,strCreatedBy:any,strUpdatedDate:any,strUpdatedBy:any){
    let hdr = {'Content-Type': 'application/json'};
    let options = { headers: hdr };
    return this._httpclient.post<any>("https://localhost:44313/api/test1", 
      JSON.stringify({ 
        UserName: strUserName,
        UserMiddleName: strUserMiddleName ,
        UserLastName: strUserLastName ,
        UserPwd: strUserPwd ,
        UserEmail: strUserEmail ,
        GroupID: strGroupID ,
        IsAlive: strIsAlive ,
        CreatedDate: strCreatedDate ,
        CreatedBy: strCreatedBy ,
        UpdatedDate: strUpdatedDate ,
        UpdatedBy: strUpdatedBy 
      }),options)
        .pipe(map(data => {
            return data;
        })    
    );
  }
}
