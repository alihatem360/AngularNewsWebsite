import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient: HttpClient) {
  }

  getNews(): Observable<any> {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=a87bc558cff74856b7aa19c8a73cfb3c');
  }
  
}




