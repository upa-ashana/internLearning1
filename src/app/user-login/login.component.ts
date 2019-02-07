import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    newLogin='Login Form';
    // user:string= 'hello';//passing hello to login.html in [(ngModel)]="user"
   // showValue(f){console.log(f)}

  //two way data binding -- component to view and view to component
  // username="hello ushachaudhary";  
  // showValue(){ // from login.component.html 
  //   console.log(this.username);
  // }
  // // end two way data binding

  onLogined(){
    
    console.log("login in to site");
    
  }

  public data=[];
  public usha;
  constructor(private loginSerice:LoginService){}
  ngOnInit(){
    this.data=this.loginSerice.newBuddha();
    this.usha=this.loginSerice.hello();

  }

}
