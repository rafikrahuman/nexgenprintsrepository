import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnInit,
    QueryList,
    ViewChildren,
    OnDestroy,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '@modules/tables/directives';
import { Country } from '@modules/tables/models';
import { CountryService } from '@modules/tables/services';
import { Observable } from 'rxjs';
import { ReceiptService } from '@modules/dashboard/services/receipt.service';
//import { DashboardCardsComponent } from '@modules/dashboard/components/dashboard-cards/dashboard-cards.component'
//import { clsReceipt } from '@modules/dashboard/models/clsReceipt';
// import {NgxPaginationModule} from 'ngx-pagination';  
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
    selector: 'sb-ng-bootstrap-table',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ng-bootstrap-table.component.html',
    styleUrls: ['ng-bootstrap-table.component.scss'],
})
export class NgBootstrapTableComponent implements OnInit, OnDestroy {
    @Input() pageSize = 4;

    countries$!: Observable<Country[]>;
    total$!: Observable<number>;
    sortedColumn!: string;
    sortedDirection!: string;
    p : any; // HErouku
    filter : any; //heroku
    //receiptModel : clsReceipt[] = [];
    receiptModel: any;

    bgcolor: any ;
    
    @ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

    constructor(
        public countryService: CountryService,
        private changeDetectorRef: ChangeDetectorRef,
        private receiptservice: ReceiptService
        // private dashboardcomp : DashboardCardsComponent
    ) {this.bgcolor = "#007BFF" }

    ngOnInit() {
        // this.countryService.pageSize = this.pageSize;
        // this.countries$ = this.countryService.countries$;
        // this.total$ = this.countryService.total$;

        // this.receiptservice.getDefaultDashBoard().subscribe(data => {
        //     this.receiptModel = data;
        // })

        //this.receiptModel = this.receiptservice.share ;

        this.receiptservice.getInhouseDetails().subscribe(
            x => {
                this.receiptModel = x;
                this.receiptservice.UpdateTable(this.receiptModel);
               
                //console.log("HI");
            }
        );
        this.receiptservice.UpdateTableColor("#007BFF");
        this.receiptservice.share.subscribe(data => {
            this.receiptModel = data;
            // this.dashboardcomp.getInhouse();
            this.receiptservice.sharetablecolor.subscribe(datacolor => {
                //this.getBackgroundColor(datacolor);
                this.bgcolor = datacolor;
            })

            this.changeDetectorRef.markForCheck();
            //this.changeDetectorRef.detectChanges();
        })

        

        //this.changeDetectorRef.detectChanges();
    }

    getBackgroundColor(hair: any) {
        let color = 'orange';
        if(hair != undefined)
        {
            color = hair;
        }
        // if (hair == 1) {
        //     color = 'purple'
        //     if (hair == 2) {
        //         color = 'turquoise';
        //     }
        // } else if (hair == 3) {
        //     color = 'gold';
        // }
        return color;
    }

    ngOnDestroy() {
        this.changeDetectorRef.detach();
    }

    onSort({ column, direction }: SortEvent) {
        this.sortedColumn = column;
        this.sortedDirection = direction;
        this.countryService.sortColumn = column;
        this.countryService.sortDirection = direction;
        this.changeDetectorRef.detectChanges();
    }
}
