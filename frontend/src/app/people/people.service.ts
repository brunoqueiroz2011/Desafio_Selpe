import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { People } from './people.model';

@Injectable()
export class PeopleService{    

    constructor(private http: Http){
        
    }

    getAllPeople(peopleList: People):Observable<People>{
        return this.http.get(`${environment.baseURL}/person`)        
                        .map(res => res.json())
                        .map(peopleList => peopleList)
    }

    postPeerson(person: People):Observable<People>{
        var params =  JSON.stringify({name: person.name, cpf: person.cpf, phone: person.phone});
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.post(
            `${environment.baseURL}/person`,
            params,
            new RequestOptions({headers: headers})
            )
            .map(res=> res.json());
    }
    
    putPeersonById(id: string, person: People):Observable<People>{
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        var params =  JSON.stringify({name: person.name, cpf: person.cpf, phone: person.phone});
        return this.http.put(`${environment.baseURL}/person/${id}`,params,new RequestOptions({headers: headers})).map(res=> res.json());
    }

    deletePersonById(id: string){
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')
        return this.http.delete(`${environment.baseURL}/person/${id}`,new RequestOptions({headers: headers}))
                        .map(res => res.json());
    }
}