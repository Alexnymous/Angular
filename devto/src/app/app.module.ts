import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { SurvolActiveDirective } from './movie/survol-active.directive';
import { StylefilmPipe } from './movie/dateFilm.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SurvolActiveDirective,
    StylefilmPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
