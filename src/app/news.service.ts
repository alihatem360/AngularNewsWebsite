import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient: HttpClient) {
  }

  getNews() {
    return this._HttpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3b9c1c3c9b3c4c3c9b3c4c3c9b3c4c3c')
  }
  
}




