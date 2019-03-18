import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginUserData = {};

    constructor(private _auth: AuthService,
                private _router: Router) {
    }

    ngOnInit() {
    }

    cancel() {
        event.preventDefault();
        this._router.navigate(['']);
    }

    loginUser() {
        this._auth.loginUser(this.loginUserData)
            .subscribe(
                res => {
                    console.log(res);
                    localStorage.setItem('token', res.token);
                    this._router.navigate(['user']);
                },
                err => console.log(err)
            );
    }
}
