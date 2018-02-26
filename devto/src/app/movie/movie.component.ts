import { Component, OnInit, OnDestroy } from '@angular/core';
import {Directive} from "@angular/core/src/render3/instructions";

@Component({
  selector: 'list-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private movie: Array<object>;

  constructor() {
  }

  ngOnInit() {
    this.movie = [
      {titre : 'NULL', releaseDate: '22 March 2014', picture : '../assets/Img/Null.jpg', teaser : 'https://vimeo.com/128674604'},
      {titre : 'La ch\'tite famille', releaseDate:'22 march 2018', picture : '../assets/Img/lachtitefamille.jpg'},
      {titre : "Black Panther", releaseDate:'29 january 2018', picture : '../assets/Img/blackpanther.jpeg'},
      {titre : "Fifthy Shades Freed", releaseDate:'9 february 2018', picture : '../assets/Img/fifth.jpg'}
      ]
  };

  myEvent(movie) {
    alert(movie);
  }

  ngOnDestroy() {
    this.movie = [];
  }

}

