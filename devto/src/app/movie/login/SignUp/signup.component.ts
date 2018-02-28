import { Component, OnInit } from '@angular/core';
import { User} from "../user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log('Inscription de : ' + this.user.username);
  }

}
