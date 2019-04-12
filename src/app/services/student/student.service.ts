import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

const {apiUrl} = environment;

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private _top5Url = `${apiUrl}/top5`;

    constructor(private _http: HttpClient) {

    }

    getTop5() {
        return this._http.get<any>(this._top5Url);
    }

    getCoursePreviewById(ID: string) {
        return this._http.get<any>(`${apiUrl}/courseById/${ID}`);
    }
}
