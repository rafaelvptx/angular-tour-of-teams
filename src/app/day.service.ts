import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Day } from './day';
import 'rxjs/add/operator/toPromise';
// Manipulate object day
@Injectable()
export class DayService {
    private daysUrl = 'api/days';  // URL to web api
    constructor(private http: Http) { }

    setDaysUrl(nameLeague: String, nameSeason: String) {
        this.daysUrl = 'http://localhost:8080/' + nameLeague + '/' + nameSeason + '/journees';
    }

    getDays(): Promise<Day[]> {
        return this.http.get(this.daysUrl)
            .toPromise()
            .then(response => response.json() as Day[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred day service', error); // throw error service
        return Promise.reject(error.message || error);
    }

    getDay(id: number): Promise<Day> {
        const url = `${this.daysUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Day)
            .catch(this.handleError);
    }
}
