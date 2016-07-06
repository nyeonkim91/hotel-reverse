import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router} from 'angular2/router';
import { Response } from 'angular2/http';

import { DealsService } from '../services/deals.service';
import { Deal } from './deal';

// import pipe for expressing date, datetime
import { MakeKoreanDatePipe } from '../custom-date.pipe';
import { MakeKoreanDateTimePipe } from '../custom-datetime.pipe';

@Component({
  selector: 'deal-details',
  templateUrl: './app/template/deal-details.html',
  pipes: [ MakeKoreanDatePipe, MakeKoreanDateTimePipe ]
})

export class DealDetailsComponent implements OnInit {
  @Input() deal : Deal;

  constructor(private dealsService: DealsService,
              private routeParams: RouteParams,
              private router: Router){
  }

  ngOnInit(){
    let booking_Num = Number.parseInt(this.routeParams.get('booking_Num'));

    console.log('getting deal with booking_Num: ', booking_Num);

    this.dealsService
      .getDeal(booking_Num)
      .subscribe(
        d => this.deal = d,
        error => console.error('Error: ' + error),
        () => console.log('Successfully fetched a Deal!')
      );
  }

  gotoDealsList(){
    let link = ['Deals'];
    this.router.navigate(link);
  }
}
