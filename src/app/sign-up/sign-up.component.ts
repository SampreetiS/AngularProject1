import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [LoginComponent, RouterLink, RouterOutlet, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  
  SignupForm = {
    firstname: '',
    lastname: '',
    email: '',
    pass: '',
    num: 0,
    cb: false,
  };
  // userDetails:any;
  submitted=false;
  
  SubmitData(val:NgForm) {
    this.submitted=true;
    console.log('Form data', val);
    // this.userDetails=val;

  }


 
}
