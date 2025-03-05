import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { SignUpComponent } from '../sign-up/sign-up.component';


@Component({
  selector: 'app-login',  //this means <app-login> should be used when referring to data written under this component's html file, in app.component.html file. along with this in the parent component's .ts file this selector should be imported.hence if <app-login> needs to be used in app.component.html, first import the class defined here (LoginComponent) in the 'imports' section of app.component.ts file and then add your component content in app.component.html under <app-login></app-login> tag.
  standalone: true,
  imports: [FormsModule, RouterLink, RouterOutlet, HomePageComponent, SignUpComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

username: any;
password:any;
RightUser= false;
RightPass= false;

InputUser(event:Event){
//  let username= event?.target?.value; alternative to this exp is below
let username= (event.target as HTMLInputElement).value ;
console.log(username);
if (username == 'abc'){
  this.RightUser=true;
  console.log(this.RightUser)
}else{
  this.RightUser=false;
  // console.log(this.RightUser)
}

}
InputPass(event:Event){
 let password= (event.target as HTMLInputElement).value;
//  console.log(password);

 if (password == '123abc'){
  this.RightPass=true;
  console.log(this.RightPass)
}else{
  this.RightPass=false;
  console.log(this.RightPass)
}
}
constructor(private router:Router){}
loginCheck(RightPass:boolean,RightUser:boolean, name:string){


  // if(this.username !=="" && this.password !== ""){
     if (this.RightUser == true && this.RightPass == true){
       this.router.navigate([''],{queryParams:{name}})
     }else{
      alert('not successful');
     }
  //  }
 }

}
