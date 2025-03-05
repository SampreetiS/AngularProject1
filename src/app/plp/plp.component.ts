import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plp',
  standalone: true,
  imports: [NavbarComponent, CommonModule, NgIf, 
   FormsModule, RouterLink, RouterOutlet],
  templateUrl: './plp.component.html',
  styleUrl: './plp.component.css'
})

export class PlpComponent {

  PhoneisChecked= false;
  LaptopisChecked= false;
  GamingisChecked= false;
  CameraisChecked= false;
  WatchisChecked= false;
  // products = [
  //   { id: 1, name: 'Laptop', price: 1000, description: 'Powerful laptop' },
  //   { id: 2, name: 'Phone', price: 500, description: 'Latest smartphone' },
  //   { id: 3, name: 'Headphones', price: 200, description: 'Noise-canceling' },
  // ];
   prodcount=0;
   @Output() addToCart= new EventEmitter();

   AddToCartFunc(prodcount:number){
    this.prodcount++;
    console.log(this.prodcount);
    this.addToCart.emit(prodcount);

   }


}
