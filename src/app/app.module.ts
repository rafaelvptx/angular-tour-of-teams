import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms'; // <-- NgModel lives here
import { HttpModule }                   from '@angular/http';

import {AppRoutingModule}               from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }         from 'angular-in-memory-web-api';
import { InMemoryDataService }          from './in-memory-data.service';

import { AppComponent }                 from './app.component';

import { LeaguesComponent }             from './leagues.component';
import { DaysComponent }                from './days.component';
import { MatchsComponent }              from './matchs.component';

import { LeagueService }                from "./league.service";
import { SeasonService }                from "./season.service";
import { DayService }                   from "./day.service";
import { MatchService }                 from "./match.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LeaguesComponent,
    DaysComponent,
    MatchsComponent
  ],
  providers: [ LeagueService, SeasonService, DayService, MatchService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
