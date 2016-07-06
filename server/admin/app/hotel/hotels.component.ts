import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Hotel } from './hotel';
import { HotelDetailsComponent } from './hotel-details.component';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'hotels-list',
  directives: [HotelDetailsComponent, ROUTER_DIRECTIVES],
  templateUrl: './app/template/hotels.html',
})

export class HotelsComponent implements OnInit{
  hotels: Hotel[] = [];
  selectedHotel: Hotel;

  constructor(private hotelsService : HotelsService){ }

  ngOnInit(){
    this.hotelsService
      .getAllHotels()
      .subscribe(
        h => this.hotels = h,
        error => console.error('Error: ' + error),
        () => console.log('Successfully fetched Hotels data!')
      );
  }

  selectHotel(hotel: Hotel){
    this.selectedHotel = hotel;
  }
}
