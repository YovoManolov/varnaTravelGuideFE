import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from 'src/app/models/restaurant';
import { Observable } from 'rxjs/internal/Observable';

const baseUrl = 'http://localhost:8080/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post(`${baseUrl}/create`, data);
  }

  getAll() {
    return this.http.get(`${baseUrl}/getAll`);
  }

  getRestaurantById(_id: string): Observable<Restaurant> {
    const url = `${baseUrl}/getOneById/${_id}`;
    return this.http.get<Restaurant>(url);
  }

  update(id: string, data) {
    return this.http.put(`${baseUrl}/update/`, data);
  }

    delete(id: string) {
    return this.http.delete(`${baseUrl}/deleteById/${id}`);
  }
}
