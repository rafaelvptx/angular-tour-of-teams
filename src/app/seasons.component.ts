import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { Location }                 from '@angular/common';

import { Season }                   from "./season"

import { SeasonService }            from "./season.service"

@Component({
    selector: 'my-seasons',
    templateUrl: './seasons.component.html',
    styleUrls: [ './seasons.component.css']
})

export class SeasonsComponent implements OnInit {

    seasons: Season[] = [];
    selectedSeason: Season;

    constructor(
        private router: Router,
        private location: Location,
        private seasonService: SeasonService) { }

    ngOnInit(): void {
        this.seasonService.getSeasons()
            .then(seasons => this.seasons = seasons.slice(0, 5));
    }

    onSelect(season: Season): void {
        this.selectedSeason = season;
        this.router.navigate(['/seasons', this.selectedSeason.name]);
    }

    goBack(): void {
        this.location.back();
    }

}