import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/hotels';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post(`${baseUrl}/create`, data);
  }

  getAll() {
    return this.http.get(`${baseUrl}/getAll`);
  }

  getHotelById(_id: string): Observable<Hotel> {
    const url = `${baseUrl}/getOneById/${_id}`;
    return this.http.get<Hotel>(url);
  }

  update(id: string, data) {
    return this.http.put(`${baseUrl}/update/`, data);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/deleteById/${id}`);
  }
  
}
