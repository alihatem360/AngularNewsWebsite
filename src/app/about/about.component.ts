import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  SaudiArabiaNews: any = [];


  constructor(public _NewsService: NewsService) {
    this._NewsService.getSaudiArabiaNews().subscribe((data) => {
      this.SaudiArabiaNews = data.articles;
      console.log(this.SaudiArabiaNews);
    });


  }

  ngOnInit(): void {
  }

}
