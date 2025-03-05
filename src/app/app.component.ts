import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from "./login/login.component";
import { PlpComponent } from './plp/plp.component';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterModule, HomePageComponent, LoginComponent, PlpComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularpractice';
  cartcount=0;
  // prodcount=0;
  count=0;
  
  Productcount(prodcount:number){
  this.cartcount= prodcount;
  }

}
