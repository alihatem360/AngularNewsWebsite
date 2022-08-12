import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { TaxiComponent } from './taxi/taxi.component';
const routes: Routes = [
  {path: '', component: CarComponent},
  {path: 'taxi', component : TaxiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
