import {Component, OnInit} from '@angular/core';
import {Course} from '../../../models/course';
import {StudentService} from '../../../services/student/student.service';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
    arrMyCourses: Course[] = [];
    arrTopCourses: Course[] = [];

    constructor(private _studentService: StudentService) {
    }

    ngOnInit() {
        this._studentService.getTop5()
            .subscribe(
                res => {
                    this.arrTopCourses = res.top;
                    console.log('RES getTop5 :', res);
                    console.log('this.arrMyCourses:', this.arrTopCourses);
                },
                err => {
                    console.log(err);
                }
            );
    }
}
