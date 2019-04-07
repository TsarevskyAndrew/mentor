import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {getBodyNode} from '@angular/animations/browser/src/render/shared';
import {environment} from '../../../environments/environment';

const {apiUrl} = environment;

@Injectable({
    providedIn: 'root'
})
export class TeacherCoursesService {

    private _registerCourseUrl = `${apiUrl}/addCourse`;
    private _findCourseUrl = 'https://mentor-online-new.herokuapp.com/findCourse';
    private _getCourseByIdUrl = 'https://mentor-online-new.herokuapp.com/getCourseById/';
    private _getCourseByIdUrlCurrent: string;

    constructor(private _http: HttpClient) {
    }

    registerCourse(course) {
        console.log('registerCourse() course_', course);
        return this._http.post<any>(this._registerCourseUrl, course);
    }

    getCourses() {
        return this._http.get<any>(this._findCourseUrl);
    }

    getCourseById(ID: string) {
        // const body = {id: ID};
        this._getCourseByIdUrlCurrent = (this._getCourseByIdUrl + ID);
        return this._http.get<any>(this._getCourseByIdUrlCurrent);
    }
}
