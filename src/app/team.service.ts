import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Team } from './team';

@Injectable()
export class TeamService {

    private teamsUrl = 'api/team';  // URL to web api

    constructor(private http: Http) { }

    setTeamsUrl(nameLeague: String, nameSeason: String) {
        this.teamsUrl = 'http://localhost:8080/'+ nameLeague +'/'+ nameSeason +'/equipes';
    }

    getTeams(): Promise<Team[]> {
        return this.http.get(this.teamsUrl)
            .toPromise()
            .then(response => response.json() as Team[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getTeam(id: number): Promise<Team> {
        const url = `${this.teamsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Team)
            .catch(this.handleError);
    }
}
