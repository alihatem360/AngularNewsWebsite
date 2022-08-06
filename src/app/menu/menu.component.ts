import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  alleyptenews: any = [];
  constructor(public _NewsService: NewsService) {
    this._NewsService.getNews().subscribe((data) => {
      this.alleyptenews = data.articles;
    });

  }

}



