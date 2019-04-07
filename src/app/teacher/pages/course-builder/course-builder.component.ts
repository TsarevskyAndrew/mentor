import {Component, OnInit} from '@angular/core';
// import {CourseBuilderService} from '../../../services/course-builder/course-builder.service';

import {ActivatedRoute, ParamMap} from '@angular/router';
import {Course} from '../../../models/course';
import {TeacherCoursesService} from '../../../services/teacher-courses/teacher-courses.service';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-course-builder',
    templateUrl: './course-builder.component.html',
    styleUrls: ['./course-builder.component.scss']
})
export class CourseBuilderComponent implements OnInit {

    course: Course;
    curID: string;

    constructor(private _http: TeacherCoursesService,
                private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.curID = this._activatedRoute.snapshot.paramMap.get('id');
        console.log('this.curID', this.curID);
        this._http.getCourseById(this.curID)
            .subscribe(
                res => {
                    this.course = res.message[0];
                    console.log('RES:', res);
                    console.log('this.course:', this.course);
                },
                err => {
                    console.log(err);
                }
            );
    }

}
