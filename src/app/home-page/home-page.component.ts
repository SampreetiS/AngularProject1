import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { PlpComponent } from '../plp/plp.component';
import { CommonModule } from '@angular/common';
 

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NavbarComponent, LoginComponent, SignUpComponent, PlpComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
