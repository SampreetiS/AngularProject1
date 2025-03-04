import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignUpComponent},
    {path:'/', component:HomePageComponent},
    {path:'login', component:LoginComponent},
    {path:'login', component:LoginComponent},

];
