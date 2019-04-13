import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './pages/student/student.component';
import {StudentRoutingModule} from './student-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    declarations: [StudentComponent],
    imports: [
        CommonModule,
        StudentRoutingModule,
        SharedModule
    ]
})
export class StudentModule {
}
