import {Component, OnInit }                         from '@angular/core';
import { Router, ActivatedRoute }                   from '@angular/router';
import { Day }                                      from './day';
import { DayService }                               from './day.service';
import {TeamService}                                from './team.service';
import {Team}                                       from './team';
// Manipulate component/Page day and call API
@Component({
    selector: 'my-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.css']
})

export class DaysComponent implements OnInit{

    days: Day[];
    teams: Team[];
    selectedDay: Day;
    selectedTeam: Team;
    nameLeague: string;
    selectedSeason: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dayService: DayService,
        private teamService: TeamService) {}
    getDays(): void {
        this.dayService.getDays().then(days => this.days = days);
    }
    getTeams(): void {
        this.teamService.getTeams().then(teams => this.teams = teams);
    }
    // Initialisation
    ngOnInit(): void {
         // Recuperation des parameters d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['l']);
        this.route.params.subscribe(p => this.selectedSeason = p['s']);
        // Initialisation des variables pour routing suivant
        this.dayService.setDaysUrl(this.nameLeague, this.selectedSeason);
        this.teamService.setTeamsUrl(this.nameLeague, this.selectedSeason);
        // Recuperation des informations pour affichages
        this.getDays();
        this.getTeams();
    }
    // Action pour la selection d un day
    onSelect(day: Day): void {
        this.selectedDay = day;
        // Route
        this.router.navigate(['/home/leagues/seasons/matchs', {
            l: this.nameLeague,
            s: this.selectedSeason,
            d: this.selectedDay.name}]);
    }
    // Action pour la selection d une team
    onSelectTeam(team: Team): void {
        this.selectedTeam = team;
        // Route
        this.router.navigate(['/home/leagues/seasons/matchsTeam', {
            l: this.nameLeague,
            s: this.selectedSeason,
            t: this.selectedTeam.name}]);
    }
}
