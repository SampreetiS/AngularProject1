import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserService } from '../services/user.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-forgotpasspage',
  standalone: true,
  imports: [FormsModule, NgIf, 
    RouterLink, RouterOutlet, LoginComponent, NavbarComponent],
  templateUrl: './forgotpasspage.component.html',
  styleUrl: './forgotpasspage.component.css',
})
export class ForgotpasspageComponent {
  uname='';
  userlist:any;
  uemail:any;
  submitted=false;
  email='';
  constructor(private userservice: UserService) {
    //  let userlist:any;
    this.userservice.getUsers().subscribe((data:any)=>{
      this.userlist=data.users;
     console.log(data.users);

    })  
  }

  submit(){
  // if(this.email!===''){  
  this.submitted=true;
  // }
  }

  
}
