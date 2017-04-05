import {Component, OnInit }                         from '@angular/core';
import { Router, ActivatedRoute }                   from '@angular/router';
import { Location }                                 from '@angular/common';

import { Day } from './day';
import { DayService } from './day.service';

@Component({
    selector: 'my-days',
    templateUrl: './days.component.html',
    styleUrls: ['./days.component.css']
})

export class DaysComponent implements OnInit{
    title = 'Tour of Days';
    days: Day[];
    selectedDay: Day;
    nameLeague: string;
    selectedSeason: string;


    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private router: Router,
        private  dayService: DayService) {}

    getDays(): void {
        this.dayService.getDays().then(days => this.days = days);
    }

    ngOnInit(): void {
        this.route.params.subscribe(p => this.nameLeague = p['nameLeague']);
        this.route.params.subscribe(p => this.selectedSeason = p['selectedSeason']);

        this.getDays();
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
