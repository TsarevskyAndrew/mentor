import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class CourseBuilderService {

    // private _registerCourseUrl = 'https://test-mentor.herokuapp.com/add_curs';
    private _registerCourseUrl = 'https://mentor-online-new.herokuapp.com/addCourse';

    constructor(private _http: HttpClient,
                private _authService: AuthService) {
    }

    registerCourse(course) {
        // course.token = this._authService.token();
        console.log('registerCourse() course_', course);
        return this._http.post<any>(this._registerCourseUrl, course);
    }
}
