import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { User } from '../models';
import { LoginService } from './login.service';
import { clsLogin } from '../models/clsLogin';
//import { stringify } from 'querystring';

const userSubject: ReplaySubject<User> = new ReplaySubject(1);


@Injectable()
export class UserService {
    objUser: clsLogin[] = [];
    constructor(private userloginservice: LoginService) {
        // this.user = {
        //     id: '123',
        //     firstName: 'Start',
        //     lastName: 'Bootstrap',
        //     email: 'no-reply@startbootstrap.com',
        // };



        this.userloginservice.shareLogin.subscribe(data => {
            this.objUser = data;
            // let UserID : string = "";
            // if (UserID == undefined)
            // {
            //     UserID = sessionStorage.getItem("UserID")?.toString() || '';
            // }
            if (this.objUser.length > 0) {
                sessionStorage.setItem("UserID", this.objUser[0].userId.toString());
                sessionStorage.setItem('UserName', this.objUser[0].userName);
                sessionStorage.setItem("UserLastName", this.objUser[0].userLastName);
                sessionStorage.setItem("Email", this.objUser[0].userEmail);
            }

            // sessionStorage.setItem("UserID",this.objUser[0].userId.toString());
            // sessionStorage.setItem('UserName',this.objUser[0].userName);
            // sessionStorage.setItem("UserLastName",this.objUser[0].userLastName);
            // sessionStorage.setItem("Email",this.objUser[0].userEmail);

            this.user = {
                // id :  this.objUser[0].userId.toString() ,
                // firstName : this.objUser[0].userName.toString(),
                // lastName: this.objUser[0].userLastName.toString(),
                // email : this.objUser[0].userEmail.toString()
                id: sessionStorage.getItem("UserID")?.toString() || '',
                firstName: sessionStorage.getItem("UserName") || '',
                lastName: sessionStorage.getItem("UserLastName") || '',
                email: sessionStorage.getItem("Email") || ''
            }
            //console.log("HI");
        })
    }

    set user(user: User) {
        userSubject.next(user);
    }

    get user$(): Observable<User> {
        return userSubject.asObservable();
    }
}
