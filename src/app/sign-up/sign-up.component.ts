import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router, RouterLink } from '@angular/router';
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
  imports: [LoginComponent, RouterLink, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  // SignupForm=[];
  // SignupForm = new FormGroup({
  //   firstname: new FormControl('', [Validators.required]),
  //   lastname: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern('/^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$'),
  //     Validators.minLength(3),
  //   ]),
  //   pass: new FormControl('', [Validators.required]),
  //   cb:new FormControl('',[Validators.requiredTrue])
  // });
   // get firstname() {
  //   return this.SignupForm.get('firstname');
  // }
  // get email() {
  //   return this.SignupForm.get('email');
  // }
  // get pass() {
  //   return this.SignupForm.get('pass');
  // }

  // details:any;
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
