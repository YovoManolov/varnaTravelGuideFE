import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel/hotel.service';
import { LandmarkService } from '../services/landmark/landmark.service';
import { RestaurantService } from '../services/restaurant/restaurant.service';
import { ShoppingPlaceService } from '../services/shoppingPlace/shopping-place.service';
import { Place } from '../models/place';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.css']
})
export class ListPlacesComponent implements OnInit {

  
  allPlaces: Array<any>;
  hotels = [];
  landmarks = [];
  restaurants = [];
  shoppingPlaces = [];

  constructor(
     private hotelService: HotelService,
    private landmarkService: LandmarkService,
    private restaurantService: RestaurantService,
    private shoppingPlaceService: ShoppingPlaceService
  ) { }

  ngOnInit(): void {

    this.hotelService.getAll().subscribe((allHotels: any[])=>{
      console.log(allHotels);
      this.hotels = allHotels;

      this.hotels.forEach(hotel => {
        this.allPlaces.push(hotel);
      });
      
    }) ;
    
    this.landmarkService.getAll().subscribe((allLandmarks: any[])=>{
      console.log(allLandmarks);
      this.landmarks = allLandmarks;

      this.landmarks.forEach(landmark => {
        this.allPlaces.push(landmark);
      });
    });

    this.restaurantService.getAll().subscribe((allRestaurants: any[])=>{
      console.log(allRestaurants);
      this.restaurants = allRestaurants;

      this.restaurants.forEach(restaurant => {
        this.allPlaces.push(restaurant);
      });
    });

    this.shoppingPlaceService.getAll().subscribe((allShoppingPlaces: any[])=>{
      console.log(allShoppingPlaces);
      this.shoppingPlaces = allShoppingPlaces;

      this.shoppingPlaces.forEach(shoppingPlace => {
        this.allPlaces.push(shoppingPlace);
      });
    });
    
  }

}
