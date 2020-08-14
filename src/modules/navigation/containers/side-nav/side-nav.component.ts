import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';
import { LoginService } from '@modules/auth/services/login.service';
import { clsLogin } from '@modules/auth/models/clsLogin';

@Component({
    selector: 'sb-side-nav',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
    @Input() sidenavStyle!: string;
    @Input() sideNavItems!: SideNavItems;
    @Input() sideNavSections!: SideNavSection[];


    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;

    objLogin: clsLogin[] = [];
    userName : any;

    constructor(public navigationService: NavigationService,
        public userService: UserService,
        private userLoginService: LoginService) { }

    ngOnInit() {
        this.userLoginService.shareLogin.subscribe(data => {
            this.objLogin = data;
           //this.userName =  this.objLogin[0]["userName"];
           //this.userName =  this.objLogin[0].userName;
           this.userName =  sessionStorage.getItem("UserName");
           // console.log("hi");
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
