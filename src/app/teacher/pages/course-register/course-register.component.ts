import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {CourseBuilderService} from '../../../services/course-builder/course-builder.service';
import {TeacherCoursesService} from '../../../services/teacher-courses/teacher-courses.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-course-register',
    templateUrl: './course-register.component.html',
    styleUrls: ['./course-register.component.scss']
})
export class CourseRegisterComponent implements OnInit {
    course = {};
    form: FormGroup;

    constructor(private _http: TeacherCoursesService,
                private _router: Router,
                private formBuilder: FormBuilder) {
        // this.form = formBuilder.group({
        //     name: ['', Validators.required]
        // });
    }

    ngOnInit() {
    }

    create() {
        this._http.registerCourse(this.course)
            .subscribe(
                res => {
                    console.log(res);
                    this._router.navigate(['teacher/builder']);
                },
                err => {
                    console.log(err);
                }
            );

    }
}
