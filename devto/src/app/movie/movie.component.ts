import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'list-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private movie: Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.movie = [
      {film1 : 'NULL', releaseDate: '2013'},
      {film2 : 'La ch\'tite famille', releaseDate:'2018'},
      {film3 : "Black Panther", releaseDate:'2018'},
      {film4 : "Fifthy Shades Freed", releaseDate:'2018'}
      ]};

  ngOnDestroy() {
    this.movie = [];
  }

}

