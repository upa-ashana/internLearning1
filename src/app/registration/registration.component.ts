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
imageUrl1 : string ;
fileToUpload1:File=null;
  constructor() { }

  ngOnInit() {
  }

  registration="Registration Form";
  userRegistration(){
    console.log("user registered")
    
  }

  handleFile1(file:FileList){
    this.fileToUpload1=file.item(0);
    //show iamge preview
    var reader=new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl1=event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload1);
  }
}
