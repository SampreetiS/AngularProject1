import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlpComponent } from './plp/plp.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgotpasspageComponent } from './forgotpasspage/forgotpasspage.component';
import { CardComponent } from './reusable-components/card/card.component';
import { PdpComponent } from './pdp/pdp.component';

export const routes: Routes = [
    {path:'', component:LoginComponent},
    {path:'signup', component:SignUpComponent},
    {path:'home', component:HomePageComponent},
    {path:'plp', component:PlpComponent},
    {path:'cart', component:CartPageComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'forgotpass', loadComponent:()=> import('./forgotpasspage/forgotpasspage.component').then((c)=>c.ForgotpasspageComponent) },
    {path:'card', component:CardComponent},
    {path:'pdp', component:PdpComponent},







];
