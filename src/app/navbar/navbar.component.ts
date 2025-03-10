import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute,RouterModule, RouterLink, RouterOutlet } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule, NgClass } from '@angular/common';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { PlpComponent } from "../plp/plp.component";
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    FormsModule,
    NgClass,
    CommonModule,
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  searchtext = '';
  userName = '';
  searchishidden = true;
  menuclass='fa-solid fa-bars';
  searchinput=false;
  
  @Input() cartcount:number=0;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];
     console.log('cartcount',this.cartcount)
    });
  }
  // search() {
  //   this.searchishidden = false;
  //   console.log('search func called')
  // }
  searchbar(){
   this.searchinput=true;
   
  }
  menu(){
    this.menuclass='fa-solid fa-xmark'
  }
  
}
