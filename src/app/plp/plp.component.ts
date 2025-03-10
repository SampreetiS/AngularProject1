import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../reusable-components/card/card.component';
import { Product } from '../reusable-components/Product.model';
import { filter } from 'rxjs';

@Component({
  selector: 'app-plp',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgFor,
    FormsModule,
    RouterLink,
    RouterOutlet,
    NavbarComponent,
    CardComponent,
  ],
  templateUrl: './plp.component.html',
  styleUrl: './plp.component.css',
})
export class PlpComponent {
  PhoneisChecked = false;
  LaptopisChecked = false;
  GamingisChecked = false;
  CameraisChecked = false;
  WatchisChecked = false;
  chosencat:string[]=[];
  minprice=0;
  maxprice=0;

  products: Product[] = [
    {
      Pid: 1,
      Pname: 'Smartphone',
      Pprice: 80000,
      Pdesc: 'Latest smartphone',
      Pimage: '/assets/imgfolder/smartphone.webp',
    },
    {
      Pid: 2,
      Pname: 'Laptop',
      Pprice: 90000,
      Pdesc: 'Powerful laptop',
      Pimage: '/assets/imgfolder/laptop.webp',
    },
    {
      Pid: 3,
      Pname: 'Gaming console',
      Pprice: 25000,
      Pdesc: 'Fast and hi-tech',
      Pimage: '/assets/imgfolder/gaming.webp',
    },
    {
      Pid: 4,
      Pname: 'DSLR Camera',
      Pprice: 18000,
      Pdesc: 'ultimate pictures with 50pixels',
      Pimage: '/assets/imgfolder/camera.webp',
    },
    {
      Pid: 5,
      Pname: 'Smartwatch',
      Pprice: 2000,
      Pdesc: 'Smart calling and notifications',
      Pimage: '/assets/imgfolder/smartwatch.webp',
    },
  ];

  chosenprod: Product[] = [];
  prodcount = 0;

  // constructor(private router: Router) {}

  plpfunc(prodcount: number) {
    this.prodcount = prodcount;
  }
  //  ngOnInit(prodcount:number){
  //   console.log('plp', prodcount);

  //  }
  ngOnInit(){
  
    this.chosenprod=this.products;

  }
  constructor(private cdr: ChangeDetectorRef) {}

  filterf() {
    this.chosencat=[];
    if (this.PhoneisChecked) {
      this.chosencat.push('Smartphone') ;
    } if (this.LaptopisChecked) {
      this.chosencat.push('Laptop');
    } if (this.GamingisChecked) {
      this.chosencat.push('Gaming console');
    }
    if (this.CameraisChecked) {
      this.chosencat.push('DSLR Camera');
    }
    if (this.WatchisChecked) {
      this.chosencat.push('Smartwatch');
    }
    console.log(this.chosencat);
    this.cdr.detectChanges(); // Force Angular to detect changes
   
    this.chosenprod = this.products.filter(
      (product) => this.chosencat.includes(product.Pname)
    );
    console.log('filter', this.chosenprod,this.chosencat);

   }
    
    
   
    // else{
    //   this.chosencat='';
    // }
    // for(let product of this.products){
    //   if (product.Pname === this.chosencat){
    //    this.chosenprod.push(product) ;
    //   }
    //   else{
    //     this.chosenprod=this.products;
    //   }

    

  }
  


//  <any> is used to signify that the value passed is an array of objects

// @Output() ListingCart= new EventEmitter<any[]>();

//  ngOnInit(products:any[]){
//   this.ListingCart.emit(this.products);

//  }

// defining an interface for product object array

// export interface Product{
//   id:number; name:string; price:number; description:string
// }
