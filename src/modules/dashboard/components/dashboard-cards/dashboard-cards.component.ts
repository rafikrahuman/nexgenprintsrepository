import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ReceiptService } from '@modules/dashboard/services/receipt.service';
import { clsReceipt } from '@modules/dashboard/models/clsReceipt';
import { LoginService } from '@modules/auth/services/login.service';
import { clsLogin } from '@modules/auth/models/clsLogin';

@Component({
    selector: 'sb-dashboard-cards',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-cards.component.html',
    styleUrls: ['dashboard-cards.component.scss'],
})
export class DashboardCardsComponent implements OnInit {
    receiptModel: clsReceipt[] = [];
    objlogin: clsLogin[] = [];
    //receiptModel : any;
    constructor(private receiptservice: ReceiptService,
        private loginservice: LoginService) { }
    ngOnInit() {
        this.loginservice.shareLogin.subscribe(data => {
            this.objlogin = data;
            // sessionStorage.setItem("UserID",this.objlogin[0].userId.toString());
            // sessionStorage.setItem('UserName',this.objlogin[0].userName);
            // sessionStorage.setItem("UserLastName",this.objlogin[0].userLastName);
            // sessionStorage.setItem("Email",this.objlogin[0].userEmail);
        })
    }

    getInhouse() {
        console.log("HI");
        this.receiptservice.getInhouseDetails().subscribe(
            x => {
                this.receiptModel = x;
                this.receiptservice.UpdateTable(this.receiptModel);
               
                //console.log("HI");
            }
        );
        this.receiptservice.UpdateTableColor("#007BFF");
    }

    getDispatchedDetails() {
        this.receiptservice.getDispatchedDetailsService().subscribe(data => {
            this.receiptModel = data;
            this.receiptservice.UpdateTable(this.receiptModel);
           
        })
        this.receiptservice.UpdateTableColor("#FFC107");
    }

    getDeliveredDetails() {
        this.receiptservice.getDeliveredDetailsService().subscribe(data => {
            this.receiptModel = data;
            this.receiptservice.UpdateTable(this.receiptModel);
           
        })
        this.receiptservice.UpdateTableColor("#28A745");
    }

    getInprogressDetails() {
        this.receiptservice.getInprogressService().subscribe(data => {
            this.receiptModel = data;
            this.receiptservice.UpdateTable(this.receiptModel);
           
        })
        this.receiptservice.UpdateTableColor("#DC3545");
    }

    // }
}
