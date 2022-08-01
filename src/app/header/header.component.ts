import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allNews = [];
  constructor( public _NewsService: NewsService) {
    this.allNews = this._NewsService.getNews();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   }

  ngOnInit(): void {
  }

}
