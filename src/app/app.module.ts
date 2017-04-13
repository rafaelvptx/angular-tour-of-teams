import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { FormsModule }                  from '@angular/forms'; // <-- NgModel lives here
import { HttpModule, JsonpModule }      from '@angular/http';

import {AppRoutingModule}               from "./app-routing.module";

import { AppComponent }                 from './app.component';

import { LeaguesComponent }             from './leagues.component';
import { SeasonsComponent }             from './seasons.component';
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
    JsonpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LeaguesComponent,
    SeasonsComponent,
    DaysComponent,
    MatchsComponent
  ],
  providers: [ LeagueService, SeasonService, DayService, MatchService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
