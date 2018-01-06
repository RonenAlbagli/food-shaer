import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit() {
  }
      loginForm = new FormGroup({
        email: new FormControl('',Validators.email),
        password: new FormControl('', Validators.minLength(5))
      })
}