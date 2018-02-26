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
      {titre : 'NULL', releaseDate: '22/03/2014', picture : '../assets/Img/Null.jpg', note :3},
      {titre : 'La ch\'tite famille', releaseDate:'22/03/2018', picture : '../assets/Img/lachtitefamille.jpg', note :3},
      {titre : "Black Panther", releaseDate:'29/01/2018', picture : '../assets/Img/blackpanther.jpeg', note :4},
      {titre : "Fifthy Shades Freed", releaseDate:'9/02/2018', picture : '../assets/Img/fifth.jpg', note :2}
      ]
  };

  myEvent(movie) {
    alert(movie);
  }

  ngOnDestroy() {
    this.movie = [];
  }

}

