///<reference path="../../node_modules/@angular/router/src/router.d.ts"/>
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }                                from '@angular/core';
import { Router, ActivatedRoute, Params }                   from '@angular/router';
import { Location }                                         from '@angular/common';

import { Season }                                           from "./season"

import { SeasonService }                                    from "./season.service"
import {League} from "./league";
import {LeagueService} from "./league.service";

@Component({
    selector: 'my-seasons',
    templateUrl: './seasons.component.html',
    styleUrls: [ './seasons.component.css']
})

export class SeasonsComponent implements OnInit {

    league: League;
    nameLeague: string = '';
    url: string = '';
    seasons: Season[] = [];
    selectedSeason: Season;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private leagueService: LeagueService,
        private seasonService: SeasonService) { }

    ngOnInit(): void  {

        this.route.params.subscribe(p => this.nameLeague = p['name']);

        this.seasonService.getSeasons()
            .then(seasons => this.seasons = seasons.slice(0, 5));
    }

    onSelect(season: Season): void {
        this.selectedSeason = season;
        this.router.navigate(['/home/leagues/seasons',{nameLeague: this.nameLeague, selectedSeason: this.selectedSeason.name}]);
    }

    goBack(): void {
        this.location.back();
    }

}