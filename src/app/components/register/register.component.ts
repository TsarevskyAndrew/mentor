import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerUserData = {};

    constructor(private _auth: AuthService,
                private _router: Router) {
    }

    ngOnInit() {
    }

    cancel() {
        event.preventDefault();
        this._router.navigate(['']);
    }

    registerUser() {
        console.log('RegisterComponent_', this.registerUserData);
        this._auth.registerUser(this.registerUserData)
            .subscribe(
                result => {
                    console.log('result is:');
                    console.log(result.token);
                    localStorage.setItem('token', result.token);
                    this._router.navigate(['student']);
                },
                err => console.log(err)
            );
    }

}
