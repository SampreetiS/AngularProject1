import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [LoginComponent,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}
