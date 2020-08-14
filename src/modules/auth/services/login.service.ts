import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { clsLogin } from '../models/clsLogin';
import { clsLoginValidation } from '../models/clsLoginValidation';
import * as Global from '../../../../src/modules/dashboard/Global'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginModel = new BehaviorSubject<clsLogin[]>([])
  public shareLogin = this.loginModel.asObservable();
  constructor(private httpclient : HttpClient) { }

  UpdateLogin(objLogin : clsLogin[])
  {
    this.loginModel.next(objLogin);
  }

  isvalidLogin(UserEmail:string, UserPwd:string) :Observable< clsLogin>{
    let hdr = {
      'Content-Type': 'application/json'
    };
    let options = { headers: hdr };
    return this.httpclient.post<clsLogin>(Global.apipath + "isValidLogin",JSON.stringify({
      UserEmail : UserEmail,
      UserPwd : UserPwd
    }) ,options).pipe(map(data => {
      return data;
    }))
  }

}
