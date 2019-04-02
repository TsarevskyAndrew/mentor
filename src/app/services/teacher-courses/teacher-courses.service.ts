import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TeacherCoursesService {

    private _registerCourseUrl = 'https://mentor-online-new.herokuapp.com/addCourse';
    private _findCourseUrl = 'https://mentor-online-new.herokuapp.com/findCourse';

    constructor(private _http: HttpClient) {
    }

    registerCourse(course) {
        console.log('registerCourse() course_', course);
        return this._http.post<any>(this._registerCourseUrl, course);
    }

    getCourses() {
        return this._http.get<any>(this._findCourseUrl);
    }
}
