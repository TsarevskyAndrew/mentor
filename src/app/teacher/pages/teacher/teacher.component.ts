import {Component, OnInit} from '@angular/core';
import {Course} from '../../../models/course';
import {COURSES} from '../../../mocks/mock-courses';

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
    arrMyCourses: Course[] = COURSES;

    constructor() {
    }

    ngOnInit() {
    }
}
