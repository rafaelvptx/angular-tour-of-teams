import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { League } from './league';


// Permet de manipuler l'objet league et d'accèder à l'API

@Injectable()
export class LeagueService {

    private leaguesUrl = 'http://localhost:8080/leagues';  // URL to web api

    constructor(private http: Http) { }

    /*getLeagues(): Promise<League[]> {
        return this.http.get(this.leaguesUrl)
            .toPromise()
            .then(response => response.json().data as League[])
            .catch(this.handleError);
     JSON.parse("{\"ligues\": " + response.text() + "}")
    }*/
    getLeagues(): Promise<League[]> {
        return this.http.get(this.leaguesUrl)
            .toPromise()
            .then(response => response.json() as League[])
            .catch(this.handleError);
    }


   /* private extractData(res: Response) {
        let body = res;
        return body.data || { };
    }
*/

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

/*    getLeague(id: number): Promise<League> {
        const url = `${this.leaguesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as League)
            .catch(this.handleError);
    }*/
}
