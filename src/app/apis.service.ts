import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apis } from './apis';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  url = "https://api.publicapis.org/entries" 

  constructor(private httpClient : HttpClient) { }

  getApis():Observable<Apis[]>{
    return this.httpClient.get<Apis[]>(this.url)
  }

}
