import {Component, OnInit }         from '@angular/core';
import { Router }                   from '@angular/router';
import { Location }                 from '@angular/common';

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

    constructor(
        private location: Location,
        private router: Router,
        private  dayService: DayService) {}

    getDays(): void {
        this.dayService.getDays().then(days => this.days = days);
    }

    ngOnInit(): void {
        this.getDays();
    }

    onSelect(day: Day): void {
        this.selectedDay = day;
    }

    goBack(): void {
        this.location.back();
    }

}
