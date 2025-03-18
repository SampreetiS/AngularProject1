import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from "../reusable-components/card/card.component";
import { Product } from '../reusable-components/Product.model';

@Component({
  selector: 'app-pdp',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavbarComponent, CardComponent],
  templateUrl: './pdp.component.html',
  styleUrl: './pdp.component.css'
})
export class PdpComponent {
pdpprod:any;
// ngOnInit(){
// this.pdpprod;
// }

chosenprod($event:any){
console.log("received product", $event);
this.pdpprod= $event;
console.log("pdp", this.pdpprod);
}
}
