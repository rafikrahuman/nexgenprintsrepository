import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from '@modules/auth/services/login.service';
import { clsLogin } from '@modules/auth/models/clsLogin';
import { Router } from '@angular/router';
import { DashboardComponent } from '@modules/dashboard/containers';
//import { Router } from '@angular/router';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    objlogin: any;
    UserEmail: any;
    userPwd: any;

    constructor(private loginservice: LoginService, private _router: Router) { }
    ngOnInit() {

    }

    btnLogin() {
        this.loginservice.isvalidLogin(this.UserEmail, this.userPwd).subscribe(data => {
            this.objlogin = data;
            this.loginservice.UpdateLogin(this.objlogin);
            var objclsLogin: clsLogin[] = [];
            objclsLogin = this.objlogin as clsLogin[];

            //this.location.replaceState('/');
            if (objclsLogin.length > 0) {
                // console.log("HI");
               

                sessionStorage.setItem("UserID", this.objlogin[0].userId.toString());
                sessionStorage.setItem('UserName', this.objlogin[0].userName);
                sessionStorage.setItem("UserLastName", this.objlogin[0].userLastName);
                sessionStorage.setItem("Email", this.objlogin[0].userEmail);
                this._router.navigate(["dashboard"]);
            }
            else {
                alert("Kindly enter valid user name and password.");
                this._router.navigate(["/"]);
            }

        })
    }
}
