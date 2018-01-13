import { authService } from './authSevice';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from './userModel';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
	loginForm: User;
	constructor(private authService: authService, private router: Router) {}

	ngOnInit() {}

	onSubmit(loginForm: NgForm) {
		let user = new User(loginForm.value.email, loginForm.value.password);

		this.authService.login(user).subscribe(
			data => {
				this.authService.activeUser = data;
				this.router.navigate(['./home']);
			},
			error => console.log(error)
		);
	}
}
