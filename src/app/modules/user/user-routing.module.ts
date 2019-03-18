import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from '../../components/user/user.component';


const routes: Routes = [{path: '', component: UserComponent}];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes),
        // CommonModule
    ],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
