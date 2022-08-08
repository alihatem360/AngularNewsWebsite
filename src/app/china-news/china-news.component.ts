import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-china-news',
  templateUrl: './china-news.component.html',
  styleUrls: ['./china-news.component.scss']
})
export class ChinaNewsComponent  {

  
  chinaNews: any = [];
  myImgUrl: string = '../../assets/unknown.png';

  constructor(public _NewsService: NewsService) {
    this._NewsService.getChinaNews().subscribe((data) => {
      this.chinaNews = data.articles;
      console.log(this.chinaNews);
    });

  }
}
