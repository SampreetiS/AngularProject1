import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlpComponent } from './plp/plp.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignUpComponent},
    {path:'', component:HomePageComponent},
    {path:'plp', component:PlpComponent},
    {path:'cart', component:CartPageComponent},
    {path:'navbar', component:NavbarComponent},



];
