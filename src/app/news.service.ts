import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _HttpClient: HttpClient) { 
    getNews(){
return console.log("ccccc")    }
  }
}


