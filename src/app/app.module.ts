import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// HttpClientModule
import {HttpClientModule} from '@angular/common/http';

// Components
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LolComponent } from './lol/lol.component';
import { CutPipe } from './cut.pipe';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
  { path: 'Egypt', component: MenuComponent },
  { path: 'Saudi', component: AboutComponent },
  { path: '', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'China', component: LolComponent },
  { path: 'Contactus', component: ContactusComponent },
  { path: 'details/:id', component: DetailsComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    MenuComponent,
    LolComponent,
    CutPipe,
    ContactusComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
