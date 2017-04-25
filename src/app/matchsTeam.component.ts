import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import { Location }                 from '@angular/common';

import {MatchService}               from "./match.service";
import {Match}                      from "./match";

// Permet de gérer l'affichage du composant match en fonction d'une equipe
@Component({
    selector: 'my-matchs',
    templateUrl: './matchsTeam.component.html',
    styleUrls: ['./matchsTeam.component.css']
})
export class MatchsTeamComponent implements OnInit{

    nameLeague: String;
    nameSeason: String;
    selectedTeam: String;

    matchs: Match[];
    selectedMatch: Match;

    constructor(
        private matchService: MatchService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        //Récupération des paramétres d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['nameLeague']);
        this.route.params.subscribe(p => this.nameSeason = p['selectedSeason']);
        this.route.params.subscribe(p => this.selectedTeam = p['selectedTeam']);

        this.matchService.setMatchsUrlForTeam(this.nameLeague, this.nameSeason, this.selectedTeam);

        this.getMatchs();
    }

    goBack(): void {
        this.location.back();
    }

    getMatchs(): void {
        this.matchService.getMatchs().then(matchs => this.matchs = matchs);
    }

    onSelect(match: Match): void {
        this.selectedMatch = match;
    }

}