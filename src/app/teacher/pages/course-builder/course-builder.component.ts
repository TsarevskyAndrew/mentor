import {Component, OnInit} from '@angular/core';
import {CourseBuilderService} from '../../../services/course-builder/course-builder.service';

@Component({
    selector: 'app-course-builder',
    templateUrl: './course-builder.component.html',
    styleUrls: ['./course-builder.component.scss']
})
export class CourseBuilderComponent implements OnInit {

    course = {};

    constructor(private _builder: CourseBuilderService) {

    }

    ngOnInit() {
    }

    create() {
        this._builder.registerCourse(this.course)
            .subscribe(
                res => {
                    console.log(res);
                },
                err => console.log(err)
            );

    }
}
