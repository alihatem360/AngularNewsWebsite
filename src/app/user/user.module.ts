import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CarComponent } from './car/car.component';
import { TaxiComponent } from './taxi/taxi.component';



@NgModule({
  declarations: [
    CarComponent,
    TaxiComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
