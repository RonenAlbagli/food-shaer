import { Http, Response, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Users } from '../../../models/userModel';
import { Observable } from 'rxjs/Observable';
import { error } from 'selenium-webdriver';

@Injectable()
export class authService {
	activeUser: any;
	constructor(private http: Http) {}

	login(user: Users) {
		const headers = new Headers({ 'Content-Type': 'application/json' });
		return this.http
			.post('http://localhost:3000/users', user, { headers })
			.map((response: Response) => response.json())
			.catch((error: Response) => Observable.throw(error.json()));
	}
}
