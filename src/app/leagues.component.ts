import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';

import { League }                   from './league';
import { Season }                   from './season';

import { LeagueService }            from './league.service';
import { SeasonService }            from './season.service';

// Permet de gérer league'affichage du composant league
@Component({
  selector: 'my-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: [ './leagues.component.css']
})

export class LeaguesComponent implements OnInit {

  leagues: League[] = [];
  seasons: Season[] = [];
  l: League;

  constructor(
    private router: Router,
    private leagueService: LeagueService,
    private seasonService: SeasonService) { }

  ngOnInit(): void {
    this.leagueService.getLeagues()
      .then(leagues => this.leagues = leagues.slice(0, 5));
    this.seasonService.getSeasons()
      .then(seasons => this.seasons = seasons.slice(0, 5));
  }

  onSelect(league: League): void {
    this.l = league;
    this.router.navigate(['/home/leagues', {l: this.l.name}]);
  }

}
