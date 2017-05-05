import { Injectable }       from '@angular/core';
import { Http }             from '@angular/http';
import { Season }           from './season';
import 'rxjs/add/operator/toPromise';
// Manipulate page et object season + link API
@Injectable()
export class SeasonService {
    private seasonsUrl = 'api/seasons';  // URL to web api
    constructor(private http: Http) { }
    setSeasonUrl(name: String) {
        this.seasonsUrl = 'http://localhost:8080/' + name + '/saisons';
    }
    getSeasons(): Promise<Season[]> {
        return this.http.get(this.seasonsUrl)
            .toPromise()
            .then(response => response.json() as Season[])
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred season service', error); // throw error
        return Promise.reject(error.message || error);
    }
}
