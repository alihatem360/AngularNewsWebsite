import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// HttpClientModule
import { HttpClientModule } from '@angular/common/http';

// Components
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CutPipe } from './cut.pipe';
import { ContactusComponent } from './contactus/contactus.component';
import { DetailsComponent } from './details/details.component';
import { ChinaNewsComponent } from './china-news/china-news.component';
import { SaudiNewsComponent } from './saudi-news/saudi-news.component';
import { EgyptNewsComponent } from './egypt-news/egypt-news.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'Egypt', component: EgyptNewsComponent },
  { path: 'Saudi', component: SaudiNewsComponent },
  { path: '', component: HeaderComponent },
  { path: 'home', component: HeaderComponent },
  { path: 'China', component: ChinaNewsComponent },
  { path: 'Contactus', component: ContactusComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ChinaNewsComponent,
    CutPipe,
    ContactusComponent,
    DetailsComponent,
    SaudiNewsComponent,
    EgyptNewsComponent,
    PageNotFoundComponent,
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
export class AppModule { }
