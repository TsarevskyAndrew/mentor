import {Component, OnInit} from '@angular/core';
import {Course} from '../../models/course';
import {StudentService} from '../../services/student/student.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-course-preview',
    templateUrl: './course-preview.component.html',
    styleUrls: ['./course-preview.component.scss']
})
export class CoursePreviewComponent implements OnInit {
    course: Course;
    curID: string;

    constructor(private _http: StudentService,
                private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.curID = this._activatedRoute.snapshot.paramMap.get('id');
        console.log('this.curID', this.curID);
        this._http.getCoursePreviewById(this.curID)
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

    onSubscribe() {
        console.log('Subscribe is clicked');
    }
}
