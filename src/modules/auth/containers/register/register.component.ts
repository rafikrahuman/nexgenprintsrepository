import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RegisterUserService } from '@modules/auth/services/register-user.service';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    inputFirstName  :any;
    inputLastName :any;
    inputEmailAddress :any;
    inputPassword  :any;
    inputConfirmPassword :any;

    constructor(private registerUserService : RegisterUserService) {}
    ngOnInit() {}

    btnLogin_Click(){
        console.log('Clicked Register Button');
        this.registerUserService.RegisterUser(this.inputFirstName ,'',this.inputLastName ,this.inputConfirmPassword ,
        this.inputEmailAddress ,'1',1,'2017-07-17 12:12:12','1','2017-07-17 12:12:12','1').subscribe((data)=>{
            console.log(data);
            alert("User registered sucessfully");
        })
      }
}
