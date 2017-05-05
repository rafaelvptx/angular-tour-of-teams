import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Team } from './team';

@Injectable()
export class TeamService {
    private teamsUrl = 'api/team';  // URL to web api
    constructor(private http: Http) { }
    setTeamsUrl(nameLeague: String, nameSeason: String) {
        this.teamsUrl = 'http://localhost:8080/' + nameLeague + '/' + nameSeason + '/equipes';
    }
    getTeams(): Promise<Team[]> {
        return this.http.get(this.teamsUrl)
            .toPromise()
            .then(response => response.json() as Team[])
            .catch(this.handleError);
    }
    // throw error
    private handleError(error: any): Promise<any> {
        console.error('An error occurred team service', error); // throw error
        return Promise.reject(error.message || error);
    }
}
