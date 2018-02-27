import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-visionnage',
  templateUrl: './visionnage.component.html',
  styleUrls: ['./visionnage.component.css']
})
export class VisionnageComponent implements OnInit {

  private movie: Array<any>;
  private moviedisplay: any;
  private link : SafeResourceUrl;
  constructor(private route: ActivatedRoute, private router: Router, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.movie = [
      {
        id : 1,
        titre : 'NULL',
        releaseDate: '03/22/2014',
        picture : '../assets/Img/Null.jpg',
        note :3.6,
        link: 'https://www.youtube.com/embed/9ObWq4sC_vQ'
      },
      {
        id : 2,
        titre : 'La ch\'tite famille',
        releaseDate:'03/22/2018',
        picture : '../assets/Img/lachtitefamille.jpg',
        note :2.9,
        link: 'https://www.youtube.com/embed/Y_H3otZ3AF0'
      },
      {
        id : 3,
        titre : "Black Panther",
        releaseDate:'01/29/2018',
        picture : '../assets/Img/blackpanther.jpeg',
        note :4.3,
        link: 'https://www.youtube.com/embed/RWKotVfUNDg'
      },
      {
        id : 4,
        titre : "Fifthy Shades Freed",
        releaseDate:'02/09/2018',
        picture : '../assets/Img/fifth.jpg',
        note :2.8,
        link:'https://www.youtube.com/embed/lYlwcoxl4yk'
      }
    ];

    let id = this.route.snapshot.params['id'];

    for (let i = 0; i < this.movie.length; i++){
      if (this.movie[i].id == id){
        this.moviedisplay = this.movie[i];
      }
    }
    if(this.movie == undefined){
      this.router.navigate(['/404']);
    }

    this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.moviedisplay.link);
  };
}
