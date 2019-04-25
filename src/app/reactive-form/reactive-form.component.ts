import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
// reactiveForm is instance you can give any of your choice
  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      state: new FormControl('', [Validators.required])
    }),
    phone: new FormControl('', [Validators.required, Validators.pattern("[9]{1}[8]{1}[0-9]{8}")]),
    gender: new FormControl('male', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }
  get firstname() { return this.reactiveForm.get('firstname'); }
  get lastname() { return this.reactiveForm.get('lastname'); }
  get email() { return this.reactiveForm.get('email'); }
  get password() { return this.reactiveForm.get('password'); }  
  get phone() { return this.reactiveForm.get('phone'); }
  get f() { return this.reactiveForm.controls; }
  onSubmit(){
   console.log(this.reactiveForm.value);
   alert('SUCCESS!! :-)')
  }

}
