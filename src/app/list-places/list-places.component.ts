import { ShoppingPlace } from './../models/shopping-place';
import { Restaurant } from './../models/restaurant';
import { Landmark } from './../models/landmark';
import { Hotel } from './../models/hotel';
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

  allPlaces: Array<any>  = [];
  hotels: Array<Hotel> = [];
  landmarks : Array<Landmark> = [];
  restaurants: Array<Restaurant> = [];
  shoppingPlaces: Array<Place> = [];

  constructor(

        private landmarkService: LandmarkService,
        private hotelService: HotelService,
        private restaurantService: RestaurantService,
        private shoppingPlaceService: ShoppingPlaceService
        
  ) { }

  ngOnInit(): void {

    this.landmarkService.getAll().subscribe((allLandmarks: Landmark[])=>{

      console.log(allLandmarks);
      this.landmarks = allLandmarks;

      this.landmarks.forEach(landmark => {
        this.allPlaces.push(landmark);
      });

    });

    this.hotelService.getAll().subscribe((allHotels: Hotel[])=>{

      console.log(allHotels);
      this.hotels = allHotels;

      this.hotels.forEach(hotel => {
        this.allPlaces.push(hotel);
      });
      
    }) ;

    this.restaurantService.getAll().subscribe((allRestaurants: Restaurant[])=>{
          console.log(allRestaurants);
          this.restaurants = allRestaurants;

          this.restaurants.forEach(restaurant => {
          this.allPlaces.push(restaurant);
      });
    });

    this.shoppingPlaceService.getAll().subscribe((allShoppingPlaces: Place[])=>{
      console.log(allShoppingPlaces);
      this.shoppingPlaces = allShoppingPlaces;

      let shoppingPlace: ShoppingPlace ; 
        
      this.shoppingPlaces.forEach(place => {
        shoppingPlace = new ShoppingPlace(place);
        this.allPlaces.push(shoppingPlace);
      });
    });
    
  }

}
