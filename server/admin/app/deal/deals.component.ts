import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { RouteParams, Router} from 'angular2/router';

import { Deal } from './deal';
import { DealDetailsComponent } from './deal-details.component';
import { DealsService } from '../services/deals.service';

import { MakeKoreanDateTimePipe } from '../custom-datetime.pipe';

@Component({
  selector: 'deals-list',
  templateUrl: '/app/template/deals.html',
  directives: [DealDetailsComponent, ROUTER_DIRECTIVES],
  pipes: [MakeKoreanDateTimePipe]
})

export class DealsComponent implements OnInit{
  deals: Deal[] = [];
  selectedDeal: Deal;

  constructor(private dealsService : DealsService,
              private routeParams : RouteParams,
              private router : Router){ }

  ngOnInit(){

    this.dealsService
      .getAllDeals()
      .subscribe(
        d => this.deals = d,
        error => console.error('Error: ' + error),
        () => console.log('Successfully fetched all Deals!', this.deals)
      );
  }

  getRemainingBidTime(bid_Endtime) {

    let now: any = new Date();
    let end: any = new Date(bid_Endtime);
    let interval = end - now;
    ​
    if (interval < 0) {
      return "거래 종료";
    }
    ​
    var totalMinutes = Math.floor(interval/1000/60);
    var hours = Math.floor(totalMinutes/60);
    var mins = totalMinutes % 60;
    ​
    return "남은 시간: " + hours + " 시간 " + mins + " 분"
  }
  onSelect(deal: Deal) {
    this.router.navigate(['Deal Details', {booking_Num: deal.booking_Num}]);
  }

  selectDeal(deal: Deal){
    this.selectedDeal = deal;
  }
}
