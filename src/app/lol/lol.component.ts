import { Component } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.scss']
})
export class LolComponent {

  chinaNews: any = [];
  myImgUrl: string = '../../assets/unknown.png';

  constructor(public _NewsService: NewsService) {
    this._NewsService.getChinaNews().subscribe((data) => {
      this.chinaNews = data.articles;
      console.log(this.chinaNews);
    });

  }



}
