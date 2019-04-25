import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {
 formBuilder:FormGroup;
 submitted = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formBuilder=this.fb.group({
      fullName: ['', Validators.required],     
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required]
      }),
      gender: ['male', Validators.required]
      
    });
  }

  get f() { return this.formBuilder.controls; }

  onSubmit(){
    console.log(this.formBuilder.value);
    this.submitted = true;

        // stop here if form is invalid
        if (this.formBuilder.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
  }

}
