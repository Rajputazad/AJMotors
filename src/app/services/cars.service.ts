import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  Baseurl="http://localhost:3000/"
  private carsUrl = 'assets/cars.json';
  // console.log(carsUrl);
  
  constructor(private http :HttpClient) { 
  }
  carifoget(){
    return this.http.get(this.Baseurl+"cars")
  }
  getCars(): Observable<any> {
    return this.http.get<any>(this.carsUrl);

  }
}
