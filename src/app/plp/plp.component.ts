import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../reusable-components/card/card.component';
import { Product } from '../reusable-components/Product.model';

@Component({
  selector: 'app-plp',
  standalone: true,
  imports: [CommonModule, NgIf, 
   FormsModule, RouterLink, RouterOutlet,
   NavbarComponent, CardComponent],
  templateUrl: './plp.component.html',
  styleUrl: './plp.component.css'
})

export class PlpComponent {

  PhoneisChecked= false;
  LaptopisChecked= false;
  GamingisChecked= false;
  CameraisChecked= false;
  WatchisChecked= false;
  


  
   
   products: Product[] = [
    { Pid: 1, Pname: 'Laptop', Pprice: 90000, Pdesc: 'Powerful laptop', Pimage:"/assets/imgfolder/smartphone.webp"},
    { Pid: 2, Pname: 'Smartphone', Pprice: 50000, Pdesc: 'Latest smartphone', Pimage:"/assets/imgfolder/laptop.webp" },
    { Pid: 3, Pname: 'Gaming console', Pprice: 25000, Pdesc: 'Fast and hi-tech', Pimage:'/assets/imgfolder/gaming.webp' },
    { Pid: 4, Pname: 'DSLR Camera', Pprice: 18000, Pdesc: 'ultimate pictures with 50pixels', Pimage:'/assets/imgfolder/camera.webp' },
    { Pid: 5, Pname: 'Smartwatch', Pprice: 2000, Pdesc: 'Smart calling and notifications', Pimage:'/assets/imgfolder/smartwatch.webp' },

  ];
  chosenprod:Product[]=[];
  prodcount=0
  constructor(private router:Router){}

  plpfunc(prodcount:number){
   this.prodcount=prodcount;
   console.log('plp', this.prodcount);
  }

  
  
  //  <any> is used to signify that the value passed is an array of objects

  // @Output() ListingCart= new EventEmitter<any[]>();

  //  ngOnInit(products:any[]){
  //   this.ListingCart.emit(this.products);

  //  }

   
}
  // defining an interface for product object array

// export interface Product{
//   id:number; name:string; price:number; description:string
// }
