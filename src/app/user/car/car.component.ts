import { Component, OnInit, ViewChild } from '@angular/core';
import { TaxiComponent } from '../taxi/taxi.component';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  taxiName: string = 'tormbil';
  massageFromChild: any;

  @ViewChild(TaxiComponent)
  child: TaxiComponent = new TaxiComponent;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log(this.child.showmassage());
  }

}
