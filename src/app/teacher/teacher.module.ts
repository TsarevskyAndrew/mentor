import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeacherComponent} from './pages/teacher/teacher.component';
import {TeacherRoutingModule} from './teacher-routing.module';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { CourseBuilderComponent } from './pages/course-builder/course-builder.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [TeacherComponent, CreateCourseComponent, CourseBuilderComponent],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        FormsModule
    ]
})
export class TeacherModule {
}
