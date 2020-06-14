import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Landmark } from 'src/app/models/landmark';

const baseUrl = 'http://localhost:8080/landmarks';

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post(`${baseUrl}/create`, data);
  }

  getAll() {
    return this.http.get(`${baseUrl}/getAll`);
  }

  getLandmarkById(_id: string): Observable<Landmark> {
    const url = `${baseUrl}/getOneById/${_id}`;
    return this.http.get<Landmark>(url);
  }

  update(id: string, data) {
    return this.http.put(`${baseUrl}/update/`, data);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/deleteById/${id}`);
  }
}
