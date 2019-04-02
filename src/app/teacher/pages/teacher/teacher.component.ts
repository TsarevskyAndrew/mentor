import {Component, OnInit} from '@angular/core';
import {Course} from '../../../models/course';
// import {COURSES} from '../../../mocks/mock-courses';
import {TeacherCoursesService} from '../../../services/teacher-courses/teacher-courses.service';

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
    arrMyCourses: Course[];

    constructor(private _http: TeacherCoursesService) {
    }

    ngOnInit() {
        this._http.getCourses()
            .subscribe(
                res => {
                    this.arrMyCourses = res.courses;
                    console.log('RES:', res);
                    console.log('this.arrMyCourses:', this.arrMyCourses);
                },
                err => {
                    console.log(err);
                }
            );
    }
}
