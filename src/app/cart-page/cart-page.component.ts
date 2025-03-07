import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterLink, RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { PlpComponent } from '../plp/plp.component';
import { CommonModule, NgFor } from '@angular/common';
import { CardComponent } from '../reusable-components/card/card.component';
import { Product } from '../reusable-components/Product.model';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [NavbarComponent,CommonModule, CardComponent,
    RouterModule,RouterLink, RouterOutlet, 
    PlpComponent, NgFor],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
chosenprod:Product[]=[];  

constructor(private route: ActivatedRoute) {
  const nav = history.state;
  if (nav.cart) {
    this.chosenprod = nav.cart;
  }
}

// cartfunc(products:Product[]){
// this.chosenprod=products;
// console.log('cartfunc',this.chosenprod);
// }
}
