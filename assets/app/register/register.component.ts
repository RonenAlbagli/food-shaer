import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    firstName: new FormControl('',Validators.minLength(2)),
    lastName: new FormControl('',Validators.minLength(2)),
    email: new FormControl('',Validators.email),
    password: new FormControl('', Validators.minLength(5))
  })
}

