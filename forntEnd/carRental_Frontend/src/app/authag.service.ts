import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthagService {

  constructor(private http:HttpClient ) { }
   url:any = "http://localhost:3000/api/"
  GetHotels(){
    return this.http.get(this.url+"GetHotels")
  }
}
