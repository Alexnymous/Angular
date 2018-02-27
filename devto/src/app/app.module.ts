import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieModule} from "./movie/movie/movie.module";
import { LoginComponent } from './movie/login/Login/login.component';
import { NotFoundComponent } from './movie/not-found/not-found.component';
import {AccueilComponent} from "./movie/accueil/accueil.component";
import { SignupComponent } from './movie/login/SignUp/signup.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'**', component:NotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,MovieModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
