import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { MovieComponent } from './movie/movie.component';
import { SurvolActiveDirective } from './survol-active.directive';
import { StarFilmPipe } from './star-film.pipe';
import { VisionnageComponent } from '../visionnage/visionnage.component';

import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {path:'Film', component:MovieComponent},
  {path:'movie/:id', component:VisionnageComponent},
  {path:'',   redirectTo: '/accueil', pathMatch: 'full'},
]


@NgModule({
  imports: [
    CommonModule, BrowserModule, RouterModule.forChild(routes)
  ],
  declarations: [
    MovieComponent,
    SurvolActiveDirective,
    StarFilmPipe,
    VisionnageComponent,
  ],
  providers: [],
})
export class MovieModule { }
