///<reference path="../../node_modules/@angular/router/src/router.d.ts"/>
import 'rxjs/add/operator/switchMap';
import { Component, OnInit }                                from '@angular/core';
import { Router, ActivatedRoute, Params }                   from '@angular/router';
import { Location }                                         from '@angular/common';

import { Season }                                           from "./season"

import { SeasonService }                                    from "./season.service"
import {League} from "./league";
import {LeagueService} from "./league.service";
// Permet de gérer league'affichage du composant season
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
        private seasonService: SeasonService) { }

    ngOnInit(): void  {
        //Récupération des paramétres d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['l']);

        this.seasonService.setSeasonUrl(this.nameLeague);
        this.seasonService.getSeasons()
            .then(seasons => this.seasons = seasons);
    }

    onSelect(season: Season): void {
        this.selectedSeason = season;
        this.router.navigate(['/home/leagues/seasons',{l: this.nameLeague, s: this.selectedSeason.name}]);
    }

    goBack(): void {
        this.location.back();
    }

}