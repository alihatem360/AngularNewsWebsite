import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// HttpClientModule
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LolComponent } from './lol/lol.component';



const routes: Routes = [
  { path: 'Egypt', component: MenuComponent },
  { path: 'Saudi', component: AboutComponent },
  { path: '', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'China', component: LolComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    LolComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
