import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../../movie.service";


@Component({
  selector: 'list-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  private movie: Array<object>;
  private current : Date = new Date();
  constructor(public route:ActivatedRoute,
              private router: Router,
              private MovieService: MovieService
  ) {}

  ngOnInit() {
    this.MovieService.getAll().then(movie => {this.movie = movie;})

    //this.movie = this.MovieService.getAll();
  };

  myEvent(movie) {
    alert(movie);
  }


  ngOnDestroy() {
    this.movie = [];
  }

}

