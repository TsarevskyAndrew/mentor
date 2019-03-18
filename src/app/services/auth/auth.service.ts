import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // private _registerUrl = 'http://localhost:3000/api/register';
    private _registerUrl = 'https://test-mentor.herokuapp.com/add_user';

    // private _loginUrl = 'http://localhost:3000/api/login';
    private _loginUrl = 'https://test-mentor.herokuapp.com/find_user';

    constructor(private http: HttpClient) {
    }

    registerUser(user) {
        console.log('AuthService_ registerUser', user);
        return this.http.post<any>(this._registerUrl, user);
    }

    loginUser(user) {
        console.log('AuthService_ loginUser', user);
        return this.http.post<any>(this._loginUrl, user);
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }
}
