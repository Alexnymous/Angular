import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starFilm'
})
export class StarFilmPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if( value < 1.5) {
        return '<i class="far fa-thumbs-up"></i>';
      } else if( value >= 1.5 && value < 2.5) {
        return '<i class="far fa-thumbs-up"></i>';
      } else if( value >= 2.5 && value < 3.5) {
        return '<i class="far fa-thumbs-up"></i>';
      } else if(value >= 3.5 && value < 4.5) {
        return '<i class="far fa-thumbs-up"></i>';
      } else if(value >= 4.5 && value <= 5) {
        return '<i class="far fa-thumbs-up"></i>';
      }
    }
  }

