import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  OneNew : any= {};
  id:any; ;
 constructor(public _NewsService: NewsService,public _ActivatedRoute: ActivatedRoute) {
   this.id = this._ActivatedRoute.snapshot.paramMap.get("id");
   this._NewsService.getNews().subscribe((data) => {
     this.OneNew = data.articles[this.id];
     console.log(this.OneNew);
   }
   );
 }
  ngOnInit(): void {

  }

}

