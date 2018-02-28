import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieModule} from "./movie/movie/movie.module";
import { NotFoundComponent } from './movie/not-found/not-found.component';
import {AccueilComponent} from "./movie/accueil/accueil.component";
import {LoginModule} from "./movie/login/login.module";




const routes: Routes = [
  {path:'accueil', component:AccueilComponent},

  {path:'**', component:NotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,MovieModule,LoginModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
