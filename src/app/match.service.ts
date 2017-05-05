import { Injectable }                   from '@angular/core';
import { Http }                         from '@angular/http';
import { Match }                        from './match';
import 'rxjs/add/operator/toPromise';
// Page Match par day et API
@Injectable()
export class MatchService {
    private matchsUrl = 'api/matchs';  // initialisation URL to web api
    constructor(private http: Http) { }
    // Initialisation routing match by day
    setMatchsUrl(nameLeague: String, nameSeason: String, nameDay: String) {
        this.matchsUrl = 'http://localhost:8080/' + nameLeague + '/' + nameSeason + '/' + nameDay + '/matchs';
    }
    // Initialisation routing match by team
    setMatchsUrlForTeam(nameLeague: String, nameSeason: String, nameTeam: String) {
        this.matchsUrl = 'http://localhost:8080/' + nameLeague + '/' + nameSeason + '/' + nameTeam + '/matchsTeam';
    }
    getMatchs(): Promise<Match[]> {
        return this.http.get(this.matchsUrl)
            .toPromise()
            .then(response => response.json() as Match[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred match service', error); // throw error
        return Promise.reject(error.message || error);
    }
}
