import {Component, OnInit }                         from '@angular/core';
import { Router, ActivatedRoute }                   from '@angular/router';
import { Location }                                 from '@angular/common';

import { Day } from './day';
import { DayService } from './day.service';
import {TeamService} from "./team.service";
import {Team} from "./team";
// Permet de gérer l'affichage du composant journée
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
        this.route.params.subscribe(p => this.nameLeague = p['nameLeague']);
        this.route.params.subscribe(p => this.selectedSeason = p['selectedSeason']);

        this.dayService.setDaysUrl(this.nameLeague,this.selectedSeason);
        this.teamService.setTeamsUrl(this.nameLeague,this.selectedSeason);

        this.getDays();
        this.getTeams();
    }

    onSelect(day: Day): void {
        this.selectedDay = day;
        this.router.navigate(['/home/leagues/seasons/matchs',{
            nameLeague: this.nameLeague,
            selectedSeason: this.selectedSeason,
            selectedDay: this.selectedDay.name}]);
    }

    goBack(): void {
        this.location.back();
    }

}
