import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,RouterModule, RouterLink, RouterOutlet } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { PlpComponent } from "../plp/plp.component";
import { HomePageComponent } from '../home-page/home-page.component';
import './navbar.component.scss'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    FormsModule,
  
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  searchtext = '';
  userName = '';
  searchishidden = true;
  
  @Input() cartcount:any;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];

    });
  }
  search() {
    this.searchishidden = false;
    console.log('search func called')
  }
  
  
}
