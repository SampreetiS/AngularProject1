import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { Product } from '../Product.model';
import { Event, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgForOf, NgFor, CommonModule, RouterLink, RouterOutlet],
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
 
 
@Output() addToCart = new EventEmitter<any>();
@Output() prodcountEE = new EventEmitter();


// Cardfunc
prodcountf(){
  this.prodcountEE.emit(this.prodcount);
  console.log('added',this.prodcount);
}
addedtocart(product:any){
this.addToCart.emit(product);
console.log('sent product', product);

}
  // ShoppingCart(products:Product[]){  
  // console.log(products);
  // this.products=products;
  // }
}
