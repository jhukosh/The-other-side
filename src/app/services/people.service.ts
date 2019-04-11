import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = 'https://melroune.github.io/starwars-api/api/all.json';
 
  constructor(public http: HttpClient) {
   }  
 
   getData(){
     return this.http.get(`${this.url}`);
   }
  
}
