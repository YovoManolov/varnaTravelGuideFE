import { ShoppingPlace } from './../models/shopping-place';
import { Restaurant } from './../models/restaurant';
import { Landmark } from './../models/landmark';
import { Hotel } from './../models/hotel';
import { ShoppingPlaceService } from './../services/shoppingPlace/shopping-place.service';
import { RestaurantService } from './../services/restaurant/restaurant.service';
import { LandmarkService } from './../services/landmark/landmark.service';
import { HotelService } from './../services/hotel/hotel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../models/place';

@Component({
  selector: 'app-place-describer',
  templateUrl: './place-describer.component.html',
  styleUrls: ['./place-describer.component.css']
})

export class PlaceDescriberComponent implements OnInit {

  _id: string;
  typeOfPlace: string;
  place: any ;

  constructor(
    private route: ActivatedRoute,
    private landmarkService: LandmarkService,
    private hotelService: HotelService,
    private restaurantService: RestaurantService,
    private shoppingPlaceService: ShoppingPlaceService
    ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this._id = params['_id'];
      this.typeOfPlace = params['typeOfPlace'];
      this.loadPlaceDetails();
   });
  }

  loadPlaceDetails(): void {

switch(this.typeOfPlace) { 
      case "1": {  //restaurant
        this.restaurantService.getRestaurantById(this._id).subscribe((restaurant: Restaurant)=>{
          this.place = restaurant;
        });
         break; 
      } 
      case "2": {  //hotel

        this.hotelService.getHotelById(this._id).subscribe((hotel: Hotel)=>{
          this.place = hotel;
        });
         break; 
      } 
      case "3": { //shoppingPlace
          this.shoppingPlaceService.getShoppingPlaceById(this._id).subscribe((place: Place)=>{
            this.place = new ShoppingPlace(place);
          });
         break; 
      }
      case "4": { //landmark
        this.landmarkService.getLandmarkById(this._id).subscribe((landmark: Landmark)=>{
          this.place = landmark;
        });
        break; 
      } 
      default: { 
         break; 
      } 
   } 

  }
  
 
}
