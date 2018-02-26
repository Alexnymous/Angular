import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilm'
})
export class dateFilmPipe implements PipeTransform {

  private current: Date = new Date()

  transform(any): string{
    if (releaseDate == 1){
      return'Facile';
    }else if(value == 2){
      return'Moyen';
    }
    else {
      return'Difficile';
    }
  }

}
