import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Season } from './season';


// Permet de manipuler l'objet service et d'accèder à l'API
@Injectable()
export class SeasonService {

    private seasonsUrl = 'api/seasons';  // URL to web api

    constructor(private http: Http) { }

    setSeasonUrl(name: String) {
        this.seasonsUrl = 'http://localhost:8080/'+name+'/saisons';
    }

    getSeasons(): Promise<Season[]> {
        return this.http.get(this.seasonsUrl)
            .toPromise()
            .then(response => response.json() as Season[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getSeason(id: number): Promise<Season> {
        const url = `${this.seasonsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Season)
            .catch(this.handleError);
    }
}
