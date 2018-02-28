import { Injectable } from '@angular/core';
import {Http} from "@angular/http";



@Injectable()
export class MovieService {

  private movies: Array<any>;

  constructor(private http: Http){}

  // get(id: number){
  //   for (let i = 0; i < this.movies.length; i++){
  //     if (this.movies[i].id == id){
  //       return this.movies[i];
  //     }
  //   }
  // }

  getAll(){
    return this.http.get('http://localhost:3000/movie/:id').toPromise()
      .then(response => response.json())
      .catch(err => console.log('Une erreur est survenue'));
    //return this.movies;
  }

}
