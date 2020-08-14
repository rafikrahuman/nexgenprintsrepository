import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { clsReceipt } from '../models/clsReceipt';
import * as Global from '../Global'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private _receiptModel = new BehaviorSubject<clsReceipt[]>([]);
  public share = this._receiptModel.asObservable();

  private _receipttablecolor = new BehaviorSubject<string>("");
  public sharetablecolor = this._receipttablecolor.asObservable();


  constructor(private _httpclient: HttpClient) { }

  UpdateTable(objReceipt : clsReceipt[])
  {
    this._receiptModel.next(objReceipt);
  }

  UpdateTableColor(objColor : string){
    this._receipttablecolor.next(objColor);
  }

  getDefaultDashBoard(): Observable<clsReceipt[]> {
    return this._httpclient.get<clsReceipt[]>(Global.apipath + "TblReceipts");
  }

  getInhouseDetails(): Observable<clsReceipt[]>  {
    let hdr = {
      'Content-Type': 'application/json'
    };
    let options = { headers: hdr };
    return this._httpclient.post<clsReceipt[]>(Global.apipath + "getInHouseDetails", options).pipe(map(data => {
      return data;
    }));
  }

  getDispatchedDetailsService(): Observable<clsReceipt[]>{
    let hdr = {
      'Content-Type': 'application/json'
    };
    let options = { headers: hdr };
    return this._httpclient.post<clsReceipt[]>(Global.apipath + "getDispatchedDetails", options).pipe(map(data => {
      return data;
    }));
  }

  getDeliveredDetailsService(): Observable<clsReceipt[]>{
    let hdr = {
      'Content-Type': 'application/json'
    };
    let options = { headers: hdr };
    return this._httpclient.post<clsReceipt[]>(Global.apipath + "getDeliveredDetails", options).pipe(map(data => {
      return data;
    }));
  }

  getInprogressService(): Observable<clsReceipt[]>{
    let hdr = {
      'Content-Type': 'application/json'
    };
    let options = { headers: hdr };
    return this._httpclient.post<clsReceipt[]>(Global.apipath + "sp_getInprogressDetails", options).pipe(map(data => {
      return data;
    }));
  }

}
