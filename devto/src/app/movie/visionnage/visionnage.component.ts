import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {MovieService} from "../../movie.service";


@Component({
  selector: 'app-visionnage',
  templateUrl: './visionnage.component.html',
  styleUrls: ['./visionnage.component.css']
})
export class VisionnageComponent implements OnInit {

  private movies: Array<any>;
  private movie: any;
  private link : SafeResourceUrl;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private MovieService:MovieService,
              public sanitizer: DomSanitizer) {}

  ngOnInit() {



    let id = this.route.snapshot.params['id'];

    this.MovieService.getAll().then(movie => {this.getOne(movie);});

    // this.moviedisplay= this.MovieService.get(id);
    //
    // if(this.moviedisplay == undefined){
    //   this.router.navigate(['/404']);
    }
  getOne(movie){
    let id = this.route.snapshot.params['id'];

    this.movies = movie;
    for (let i = 0; i< this.movie.length; i++){
      if(this.movie[i].id == id){
        this.movies = movie;
      }
  }
  if (this.movie == undefined){
      this.router.navigate(['/404']);
  }
    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.link);

  };
}
