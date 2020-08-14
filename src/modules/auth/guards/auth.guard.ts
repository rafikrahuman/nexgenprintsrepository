import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private loginservice: LoginService, private _router : Router) { }
    // canActivate(): Observable<boolean> {
    //     return of(true);
    // }
    isValid: boolean = false;
    canActivate(): boolean {
        this.loginservice.shareLogin.subscribe(
            data => {
                if (data.length > 0) {
                    this.isValid = true;
                    return true;
                }
                else {
                    this._router.navigate(["/"]);
                    this.isValid = false;
                    return false;
                }
            }
        )
        return false;
    }


}
