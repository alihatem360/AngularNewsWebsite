import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor() {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a87bc558cff74856b7aa19c8a73cfb3c'
    )
      .then((response) => response.json())
      .then((data) => console.log(data.articles));
  }

  ngOnInit(): void {}
}
