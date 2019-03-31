import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CourseBuilderService} from '../../../services/course-builder/course-builder.service';

@Component({
    selector: 'app-course-register',
    templateUrl: './course-register.component.html',
    styleUrls: ['./course-register.component.scss']
})
export class CourseRegisterComponent implements OnInit {
    course = {};

    constructor(private _builder: CourseBuilderService,
                private _router: Router) {
    }

    ngOnInit() {
    }

    create() {
        this._builder.registerCourse(this.course)
            .subscribe(
                res => {
                    console.log(res);
                    this._router.navigate(['teacher/builder']);
                },
                err => {
                    console.log(err);
                    this._router.navigate(['teacher/builder']);
                }
            );

    }
}
