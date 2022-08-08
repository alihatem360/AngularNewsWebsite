import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-saudi-news',
  templateUrl: './saudi-news.component.html',
  styleUrls: ['./saudi-news.component.scss']
})
export class SaudiNewsComponent {

  SaudiArabiaNews: any = [];
  myImgUrl: string = '../../assets/unknown.png';


  constructor(public _NewsService: NewsService) {
    this._NewsService.getSaudiArabiaNews().subscribe((data) => {
      this.SaudiArabiaNews = data.articles;
      console.log(this.SaudiArabiaNews);
    });


  }
}
