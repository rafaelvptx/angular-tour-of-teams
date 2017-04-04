import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {MatchService}               from "./match.service";
import {Match}                      from "./match";


@Component({
    selector: 'my-matchs',
    templateUrl: './matchs.component.html',
    styleUrls: ['./matchs.component.css']
})
export class MatchsComponent implements OnInit{

    matchs: Match[];
    selectedMatch: Match;

    constructor(
        private matchService: MatchService,
        private router: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
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