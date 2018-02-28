import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from  '@angular/forms';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./Login/login.component";
import {SignupComponent} from "./SignUp/signup.component";


const routes: Routes = [
  {path : 'signup', component: SignupComponent},
  {path : 'login', component: LoginComponent},

];
@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(routes),
  ],
  declarations: [SignupComponent, LoginComponent]
})
export class LoginModule { }
