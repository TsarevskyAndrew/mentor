import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TeacherComponent} from './pages/teacher/teacher.component';
import {CourseBuilderComponent} from './pages/course-builder/course-builder.component';


const routes: Routes = [
    {path: '', component: TeacherComponent},
    {path: 'builder', component: CourseBuilderComponent}

];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class TeacherRoutingModule {
}
