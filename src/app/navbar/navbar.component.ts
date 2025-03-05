import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from '../cart-page/cart-page.component';
import { PlpComponent } from "../plp/plp.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    FormsModule,
    LoginComponent,
    SignUpComponent,
    CartPageComponent,
    PlpComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  searchtext = '';
  userName = '';
  searchishidden = true;
  
  

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];
    });
  }
  search() {
    this.searchishidden = false;
  }
  @Input() cartcount:any;
  Productcount(prodcount:number){
    this.cartcount= prodcount;
    }
}
