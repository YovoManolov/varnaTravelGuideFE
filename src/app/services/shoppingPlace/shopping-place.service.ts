import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/shoppingPlaces';

@Injectable({
  providedIn: 'root'
})
export class ShoppingPlaceService {

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post(`${baseUrl}/create`, data);
  }

  getAll() {
    return this.http.get(`${baseUrl}/getAll`);
  }

  getShoppingPlaceById(id: string) {
    return this.http.get(`${baseUrl}/getOneById/${id}`);
  }

  update(id: string, data) {
    return this.http.put(`${baseUrl}/update/`, data);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/deleteById/${id}`);
  }
}
