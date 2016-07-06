import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, Router} from 'angular2/router';
import { Response } from 'angular2/http';

import { HotelsService } from '../services/hotels.service';
import { Hotel } from './hotel';

@Component({
  selector: 'hotel-details',
  templateUrl: './app/template/hotel-details.html',
})
export class HotelDetailsComponent implements OnInit {
  @Input() hotel : Hotel;

  constructor(private hotelsService: HotelsService,
              private routeParams: RouteParams,
              private router: Router) {
  }

  ngOnInit(){
    let hotel_ID = this.routeParams.get('hotel_ID');

    console.log('getting hotel with hotel_ID: ', hotel_ID);

    this.hotelsService
      .getHotel(hotel_ID)
      .subscribe(
        h => this.hotel = h,
        error => console.error('Error: ' + error),
        () => console.log('Successfully fetched a Hotel data!')
      );
  }

  gotoHotelsList(){
    let link = ['Hotels'];
    this.router.navigate(link);
  }
}
