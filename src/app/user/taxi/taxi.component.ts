import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-taxi',
  templateUrl: './taxi.component.html',
  styleUrls: ['./taxi.component.scss']
})
export class TaxiComponent implements OnInit {

  @Input() taxiName: any;
  @Output() taxiNameChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  sendData() {
    this.taxiNameChange.emit("send data from child to parent");
  }

  showmassage() {
    console.log("massageFromChild taxi component ");
  }
}