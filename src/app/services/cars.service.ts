import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarsService {
  Baseurl="http://localhost:3000/"
  constructor(private http :HttpClient) { 
  }
  carifoget(){
    return this.http.get(this.Baseurl+"cars")
  }
}
