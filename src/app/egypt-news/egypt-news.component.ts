import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-egypt-news',
  templateUrl: './egypt-news.component.html',
  styleUrls: ['./egypt-news.component.scss']
})
export class EgyptNewsComponent {

  alleyptenews: any = [];
  constructor(public _NewsService: NewsService) {
    this._NewsService.getNews().subscribe((data) => {
      this.alleyptenews = data.articles;
    });

  }

}
