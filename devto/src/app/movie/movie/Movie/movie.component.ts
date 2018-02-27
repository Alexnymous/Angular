import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute} from "@angular/router";


@Component({
  selector: 'list-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private movie: Array<object>;
  private current : Date = new Date();
  constructor(public route:ActivatedRoute) {}

  ngOnInit() {
    this.movie = [
      {
        id : 1,
        titre : 'NULL',
        releaseDate: '03/22/2014',
        picture : '../assets/Img/Null.jpg',
        note :3.6,
        link: 'https://www.youtube.com/watch?v=9ObWq4sC_vQ'
      },
      {
        id : 2,
        titre : 'La ch\'tite famille',
        releaseDate:'03/22/2018',
        picture : '../assets/Img/lachtitefamille.jpg',
        note :2.9,
        link: 'https://www.youtube.com/watch?v=Y_H3otZ3AF0'
      },
      {
        id : 3,
        titre : "Black Panther",
        releaseDate:'01/29/2018',
        picture : '../assets/Img/blackpanther.jpeg',
        note :4.3,
        link: 'https://www.youtube.com/watch?v=_klSfsi6_zs'
      },
      {
        id : 4,
        titre : "Fifthy Shades Freed",
        releaseDate:'02/09/2018',
        picture : '../assets/Img/fifth.jpg',
        note :2.8,
        link:'https://www.youtube.com/watch?v=h-sEqWIW920'
      }
      ]

  };

  myEvent(movie) {
    alert(movie);
  }

  ngOnDestroy() {
    this.movie = [];
  }

}

