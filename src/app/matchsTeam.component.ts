import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import {MatchService}               from './match.service';
import {Match}                      from './match';
// Manipulate page match by team et initialize API
@Component({
    templateUrl: './matchsTeam.component.html',
    styleUrls: ['./matchsTeam.component.css']
})
export class MatchsTeamComponent implements OnInit {
    nameLeague: String;
    nameSeason: String;
    selectedTeam: String;
    matchs: Match[];
    constructor(
        private matchService: MatchService,
        private route: ActivatedRoute,
    ) {}
    ngOnInit(): void {
        // Recuperation des parameters d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['l']);
        this.route.params.subscribe(p => this.nameSeason = p['s']);
        this.route.params.subscribe(p => this.selectedTeam = p['t']);
        // Initialisation des parameters pour getter et print page
        this.matchService.setMatchsUrlForTeam(this.nameLeague, this.nameSeason, this.selectedTeam);
        this.getMatchs();
    }
    getMatchs(): void {
        this.matchService.getMatchs().then(matchs => this.matchs = matchs);
    }
}
