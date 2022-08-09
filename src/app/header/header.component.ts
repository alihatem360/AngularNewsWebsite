import { Component } from '@angular/core';
import  {NewsService} from '../news.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  alleyptenews: any = [];
  constructor(public _NewsService: NewsService) {
    this._NewsService.getNews().subscribe((data) => {
      this.alleyptenews = data.articles;
    });

  }



}