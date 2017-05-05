import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { LeagueService }            from './league.service';
import { SeasonService }            from './season.service';
import { League }                   from './league';
import { Season }                   from './season';

// Object league et API
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
  // Initialisation
  ngOnInit(): void {
    this.leagueService.getLeagues()
      .then(leagues => this.leagues = leagues.slice(0, 5));
    this.seasonService.getSeasons()
      .then(seasons => this.seasons = seasons.slice(0, 5));
  }
  // Action selection league
  onSelect(league: League): void {
    this.l = league;
    // Route
    this.router.navigate(['/home/leagues', {l: this.l.name}]);
  }
}
