import { Component, OnInit } from '@angular/core';
import {RegistrationModel} from './registration-model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  //  animations: [routerTransition()
})
export class RegistrationComponent implements OnInit {
// registrationModel:RegistrationModel=new RegistrationModel();
  constructor() { }

  ngOnInit() {
  }

  registration="Registration Form";
  userRegistration(){
    console.log("user registered")
    
  }
}
