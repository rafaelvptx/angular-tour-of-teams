import {Component, OnInit }                         from '@angular/core';
import { Router, ActivatedRoute }                   from '@angular/router';
import { Location }                                 from '@angular/common';

import { Day } from './day';
import { DayService } from './day.service';
import {TeamService} from "./team.service";
import {Team} from "./team";
// Permet de gérer league'affichage du composant journée
@Component({
    selector: 'my-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.css']
})

export class DaysComponent implements OnInit{
    title = 'Tour of Days';
    days: Day[];
    teams: Team[];
    selectedDay: Day;
    selectedTeam: Team;
    nameLeague: string;
    selectedSeason: string;


    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private dayService: DayService,
        private teamService: TeamService) {}

    getDays(): void {
        this.dayService.getDays().then(days => this.days = days);
    }

    getTeams(): void {
        this.teamService.getTeams().then(teams => this.teams = teams);
    }

    ngOnInit(): void {
        //Récupération des paramétres d'affichage
        this.route.params.subscribe(p => this.nameLeague = p['l']);
        this.route.params.subscribe(p => this.selectedSeason = p['s']);

        this.dayService.setDaysUrl(this.nameLeague,this.selectedSeason);
        this.teamService.setTeamsUrl(this.nameLeague,this.selectedSeason);

        this.getDays();
        this.getTeams();
    }

    onSelect(day: Day): void {
        this.selectedDay = day;
        this.router.navigate(['/home/leagues/seasons/matchs',{
            l: this.nameLeague,
            s: this.selectedSeason,
            d: this.selectedDay.name}]);
    }

    onSelectTeam(team: Team): void {
        this.selectedTeam = team;
        this.router.navigate(['/home/leagues/seasons/matchsTeam',{
            l: this.nameLeague,
            s: this.selectedSeason,
            t: this.selectedTeam.name}]);
    }

    goBack(): void {
        this.location.back();
    }

}
