import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AuthGuard} from './auth.guard';
import {GuestComponent} from './components/guest/guest.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {
        path: '',
        loadChildren: './modules/user/user.module#UserModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'user',
        loadChildren: './modules/user/user.module#UserModule',
        canActivate: [AuthGuard]
    },
    {path: 'guest', component: GuestComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
