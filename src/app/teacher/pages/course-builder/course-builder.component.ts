import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-course-builder',
    templateUrl: './course-builder.component.html',
    styleUrls: ['./course-builder.component.scss']
})
export class CourseBuilderComponent implements OnInit {

    course = {};

    constructor() {

    }

    ngOnInit() {
    }

    create() {
     console.log(this.course);

    }
}
