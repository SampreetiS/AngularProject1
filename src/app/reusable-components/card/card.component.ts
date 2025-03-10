import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Product } from '../Product.model';
import { Event } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgForOf, NgFor, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
class='';

@Input() products:Product[]=[];

prodcount=0;
buttonname= 'Add to Cart';
@Input() chosencat:string[]=[];


AddToCartFunc(){
    this.prodcount++;
    console.log('prodcount',this.prodcount);
    if(this.prodcount>=1){
      this.buttonname= '+'+ this.prodcount;
    } 
    if(this.prodcount>=5){
      this.buttonname= 'Out of stock';
      this.class='bg-secondary'
    }
 }
 
 
@Output() addToCart = new EventEmitter();

// Cardfunc
addedtocart(){
this.addToCart.emit(this.prodcount);
console.log('added',this.prodcount);
}
  // ShoppingCart(products:Product[]){  
  // console.log(products);
  // this.products=products;
  // }
}
