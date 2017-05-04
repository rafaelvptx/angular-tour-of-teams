import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {MatchService}               from "./match.service";
import {Match}                      from "./match";

// Permet de gérer league'affichage du composant match
@Component({
    selector: 'my-matchs',
    templateUrl: './matchs.component.html',
    styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit{

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
        //Récupération des paramétres d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['l']);
        this.route.params.subscribe(p => this.nameSeason = p['s']);
        this.route.params.subscribe(p => this.selectedDay = p['d']);

        this.matchService.setMatchsUrl(this.nameLeague,this.nameSeason,this.selectedDay);

        this.getMatchs();
    }


    getMatchs(): void {
        this.matchService.getMatchs().then(matchs => this.matchs = matchs);
    }

    onSelect(match: Match): void {
        this.selectedMatch = match;
    }

  goBack(): void {
    this.location.back();
  }


}
