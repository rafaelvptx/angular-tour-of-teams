import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { League }                   from "./league";
import { Season }                   from "./season"

import { LeagueService }            from "./league.service";
import { SeasonService }            from "./season.service"

@Component({
    selector: 'my-leagues',
    templateUrl: './leagues.component.html',
    styleUrls: [ './leagues.component.css']
})

export class LeaguesComponent implements OnInit {

    errorMessage: string;
    leagues: League[] = [];
    selectedLeague: League;

    constructor(
        private router: Router,
        private leagueService: LeagueService) { }

    ngOnInit(): void {
        this.leagueService.getLeagues()
            .then(leagues => this.leagues = leagues);
    }

    onSelect(league: League): void {
        this.selectedLeague = league;
        this.router.navigate(['/home/leagues', {name: this.selectedLeague.name}]);
    }
}