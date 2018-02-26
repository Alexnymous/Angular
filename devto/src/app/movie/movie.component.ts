import { Component, OnInit, OnDestroy } from '@angular/core';


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
      {titre : 'NULL', releaseDate: '2013', picture : '../assets/Null.jpg' },
      {titre : 'La ch\'tite famille', releaseDate:'2018', picture : '../assets/lachtitefamille.jpg' },
      {titre : "Black Panther", releaseDate:'2018', picture : '../assets/blackpanther.jpeg'},
      {titre : "Fifthy Shades Freed", releaseDate:'2018', picture : '../assets/fifth.jpg'}
      ]

  this.nbrFilm = this.movie.length};

  myEvent(movie) {
    alert(movie);
  }

  ngOnDestroy() {
    this.movie = [];
  }

}

