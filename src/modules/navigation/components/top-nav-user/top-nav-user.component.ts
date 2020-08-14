import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';

@Component({
    selector: 'sb-top-nav-user',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './top-nav-user.component.html',
    styleUrls: ['top-nav-user.component.scss'],
})
export class TopNavUserComponent implements OnInit {
    constructor(public userService: UserService) {}
    ngOnInit() {}
    btnLogout(){
        // sessionStorage.removeItem("UserID");
        // sessionStorage.removeItem("UserName");
        // sessionStorage.removeItem("UserLastName");
        // sessionStorage.removeItem("Email");

        sessionStorage.clear(); //("UserID");
        // sessionStorage.removeItem("UserName");
        // sessionStorage.removeItem("UserLastName");
        // sessionStorage.removeItem("Email");
        console.log('HI');
    }
}
