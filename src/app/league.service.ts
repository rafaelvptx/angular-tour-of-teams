import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { League } from './league';

@Injectable()
export class LeagueService {

    private leaguesUrl = 'api/leagues';  // URL to web api

    constructor(private http: Http) { }

    getLeagues(): Promise<League[]> {
        return this.http.get(this.leaguesUrl)
            .toPromise()
            .then(response => response.json().data as League[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getLeague(id: number): Promise<League> {
        const url = `${this.leaguesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as League)
            .catch(this.handleError);
    }
}