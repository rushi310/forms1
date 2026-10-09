import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../validators/validator-patterns';
import { NoSpace } from '../validators/no-space';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title  = 'reactive-form';
  signUpForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.createSignUpForm();
    console.log(this.signUpForm)
  }

  createSignUpForm(){
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(CustomRegex.username),
        NoSpace.noSpaceVal
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    })
  }
  onSubmit(){
    console.log(this.signUpForm);
    console.log(this.signUpForm.value);
  }
  get userName(){
    return this.signUpForm.get('userName') as FormControl
  }

  get email(){

    return this.signUpForm.get('email') as FormControl
  }
}
