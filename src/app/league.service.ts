import { Injectable }                   from '@angular/core';
import { Http }                         from '@angular/http';
import { League }                       from './league';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// Page league et lien API
@Injectable()
export class LeagueService {
    private leaguesUrl = 'http://localhost:8080/leagues';  // URL to web api
    constructor(private http: Http) { }
    getLeagues(): Promise<League[]> {
        return this.http.get(this.leaguesUrl)
            .toPromise()
            .then(response => response.json() as League[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred league service', error); // throw error
        return Promise.reject(error.message || error);
    }
}
