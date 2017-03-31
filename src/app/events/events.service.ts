import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
    private apiUrl = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/events';

    constructor(private http: Http) {

    }

    loadEvents() {
        return this.http.get(this.apiUrl)
            .map((response: Response) => response.json());
    }
}
