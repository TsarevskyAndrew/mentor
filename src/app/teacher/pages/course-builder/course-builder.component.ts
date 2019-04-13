import {Component, OnInit} from '@angular/core';
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

    public imagePath;
    imgURL: any;
    public message: string;

    cardImgFile: File = null;

    constructor(private _http: TeacherCoursesService,
                private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.curID = this._activatedRoute.snapshot.paramMap.get('id');
        console.log('this.curID', this.curID);
        this._http.getCourseById(this.curID)
            .subscribe(
                res => {
                    this.course = res.message;
                    console.log('RES:', res);
                    console.log('this.course:', this.course);
                },
                err => {
                    console.log(err);
                }
            );
    }

    // onFileSelected(event) {
    //     console.log(event);
    //     this.cardImgFile = <File> event.target.file[0];
    // }
    preview(files) {
        if (files.length === 0) {
            return;
        }

        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = 'Only images are supported.';
            return;
        }

        const reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
        };
    }

    updateCourse() {
        console.log(this.course);
        this._http.updateCourse(this.course)
            .subscribe(
                res => {
                    console.log('RES:', res);
                },
                err => {
                    console.log(err);
                }
            );
    }

}
