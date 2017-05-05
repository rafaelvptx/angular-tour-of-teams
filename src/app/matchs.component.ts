import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute }           from '@angular/router';
import { Location }                 from '@angular/common';
import {MatchService}               from './match.service';
import {Match}                      from './match';
// Manipulation component match and init API
@Component({
    selector: 'my-matchs',
    templateUrl: './matchs.component.html',
    styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit {
    nameLeague: String;
    nameSeason: String;
    selectedDay: String;
    matchs: Match[];
    selectedMatch: Match;
    constructor(
        private matchService: MatchService,
        private route: ActivatedRoute,
        private location: Location
    ) {}
    ngOnInit(): void {
        // Recuperation des parameters d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['l']);
        this.route.params.subscribe(p => this.nameSeason = p['s']);
        this.route.params.subscribe(p => this.selectedDay = p['d']);
        // Initialisation des variables pour getMatchs et tableaux score
        this.matchService.setMatchsUrl(this.nameLeague, this.nameSeason, this.selectedDay);
        this.getMatchs();
    }
    getMatchs(): void {
        this.matchService.getMatchs().then(matchs => this.matchs = matchs);
    }
}
