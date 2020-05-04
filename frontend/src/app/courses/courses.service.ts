import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Courses } from './courses.model';
import { environment } from 'environments/environment';

@Injectable()
export class CoursesService{
    constructor(private http: Http){}

    getQtdTypes(cnesType: Courses):Observable<Courses>{
        return this.http.get(`${environment.baseURL}/courses`)
                        .map(res => res.json())
                        .map(cnesType => cnesType)
    }
}