import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router';


import { MovieComponent } from './movie/movie.component';
import { SurvolActiveDirective } from './survol-active.directive';
import { StarFilmPipe } from './star-film.pipe';
import { VisionnageComponent } from '../visionnage/visionnage.component';

import { NotFoundComponent } from '../not-found/not-found.component';
import {MovieService} from "../../movie.service";
import {HttpModule} from "@angular/http";

const routes: Routes = [
  {path:'Film', component:MovieComponent},
  {path:'movie/:id', component:VisionnageComponent},
  {path:'',   redirectTo: '/accueil', pathMatch: 'full'},
]


@NgModule({
  imports: [
    CommonModule, HttpModule, BrowserModule, RouterModule.forChild(routes)
  ],
  declarations: [
    MovieComponent,
    SurvolActiveDirective,
    StarFilmPipe,
    VisionnageComponent,
  ],
  providers: [MovieService],
})
export class MovieModule {
  constructor(
    private router: Router,
    private MovieService: MovieService
    ){}

}

