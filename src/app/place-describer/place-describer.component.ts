import { ShoppingPlace } from './../models/shopping-place';
import { Restaurant } from './../models/restaurant';
import { Landmark } from './../models/landmark';
import { Hotel } from './../models/hotel';
import { ShoppingPlaceService } from './../services/shoppingPlace/shopping-place.service';
import { RestaurantService } from './../services/restaurant/restaurant.service';
import { LandmarkService } from './../services/landmark/landmark.service';
import { HotelService } from './../services/hotel/hotel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../models/place';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-place-describer',
  templateUrl: './place-describer.component.html',
  styleUrls: ['./place-describer.component.css']
})

export class PlaceDescriberComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  
  _id: string;
  typeOfPlace: string;
  showPriceCategory: boolean;
  place: ShoppingPlace | Hotel| Restaurant | Landmark = null ;

  zoom = 12
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 30,
    minZoom: 8
  } 

  markers = []
  infoContent = ''

  constructor(
    private route: ActivatedRoute,
    private landmarkService: LandmarkService,
    private hotelService: HotelService,
    private restaurantService: RestaurantService,
    private shoppingPlaceService: ShoppingPlaceService
  ) {}

  ngOnInit(){
      this.route.params.subscribe(params => {
          this._id = params['_id'];
          this.typeOfPlace = params['typeOfPlace'];
          this.loadPlaceDetails();
      });
  }

  
  deletePlace(){
    switch(this.typeOfPlace) {

      case "1": {
        this.restaurantService.delete(this.place._id);
        break; 
      }
      case "2": {
        this.hotelService.delete(this.place._id);
        break; 
      }
      case "3": {
        this.shoppingPlaceService.delete(this.place._id);
        break; 
      }
      case "4": {
        this.landmarkService.delete(this.place._id);
        break; 
      }
    }
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

  click(event: google.maps.MouseEvent) {
    console.log(event)
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()))
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content,
    this.info.open(marker)
  }

  loadGoogleMapsInfo(place: ShoppingPlace | Hotel| Restaurant | Landmark):void {

      this.center = {
        lat: this.place.place.location.coordinates[1],
        lng: this.place.place.location.coordinates[0]
      };

    this.markers.push({
      position: {
        lat:  this.place.place.location.coordinates[1],
        lng:  this.place.place.location.coordinates[0]
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    });
  }

  loadPlaceDetails(): void {

    switch(this.typeOfPlace) {

          case "1": {  //restaurant
            this.restaurantService.getRestaurantById(this._id).subscribe((restaurant: Restaurant)=>{
              this.place = restaurant;
              console.log(this.place);
              this.loadGoogleMapsInfo(this.place);
            });
            break; 
          } 
          case "2": {  //hotel
            this.hotelService.getHotelById(this._id).subscribe((hotel: Hotel)=>{
              this.place = hotel;
              this.loadGoogleMapsInfo(this.place);
            });
            break; 
          } 
          case "3": { //shoppingPlace
              this.shoppingPlaceService.getShoppingPlaceById(this._id).subscribe((place: Place)=>{
                this.place = new ShoppingPlace(place);
                this.loadGoogleMapsInfo(this.place);
              });
            break; 
          }
          case "4": { //landmark
            this.landmarkService.getLandmarkById(this._id).subscribe((landmark: Landmark)=>{
              this.place = landmark;
              this.loadGoogleMapsInfo(this.place);
            });
            break; 
          } 
          default: { 
            this.place = null;
            break; 
          } 
    }

  } 

  
}
